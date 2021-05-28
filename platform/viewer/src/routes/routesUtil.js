import { asyncComponent, retryImport } from '@ohif/ui';
import OHIF from '@ohif/core';

const { urlUtil: UrlUtil } = OHIF.utils;

// Dynamic Import Routes (CodeSplitting)
const IHEInvokeImageDisplay = asyncComponent(() =>
  retryImport(() =>
    import(/* webpackChunkName: "IHEInvokeImageDisplay" */ './IHEInvokeImageDisplay.js')
  )
);
const ViewerRouting = asyncComponent(() =>
  retryImport(() => import(/* webpackChunkName: "ViewerRouting" */ './ViewerRouting.js'))
);


const StudyListRouting = asyncComponent(() =>
  retryImport(() => import(
    /* webpackChunkName: "StudyListRouting" */ '../studylist/StudyListRouting.js'
  ))
);
const StandaloneRouting = asyncComponent(() =>
  retryImport(() => import(
    /* webpackChunkName: "ConnectedStandaloneRouting" */ '../connectedComponents/ConnectedStandaloneRouting.js'
  ))
);
const ViewerLocalFileData = asyncComponent(() =>
  retryImport(() => import(
    /* webpackChunkName: "ViewerLocalFileData" */ '../connectedComponents/ViewerLocalFileData.js'
  ))

);

const Login = asyncComponent(() =>
  retryImport(() => import(
    /* webpackChunkName: "Login" */ '../components/Connection/Login.js'
  ))

);

const Register = asyncComponent(() =>
  retryImport(() => import(
    /* webpackChunkName: "Register" */ '../components/Connection/Register.js'
  ))

);

const upload = asyncComponent(() =>
  retryImport(() =>
    import(/* webpackChunkName: "upload" */ '../connectedComponents/upload.js')
  )
);

const AddPatient = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "AddPatient" */ '../connectedComponents/AddPatient/AddPatient.js'
    )
  )
);


const reload = () => window.location.reload();

const ROUTES_DEF = {
  default: {
    login: {
      path: '/login', //done
      component: Login,
    },
    register: {
      path: '/register', //done
      component: Register,
    },
    viewer: {
      path: '/viewer/:studyInstanceUIDs',//done
      component: ViewerRouting,
    },
    standaloneViewer: {
      path: '/viewer',//done
      component: StandaloneRouting,
    },
    list: {
      path: ['/studylist', '/'], //done
      component: StudyListRouting,
      condition: appConfig => {
        return appConfig.showStudyList;
      },
    },
    upload: {
      path: '/upload',
      component: upload,
    },

    AddPatient: {
      path: '/AddPatient',
      component: AddPatient,
    },
    local: {
      path: '/local',
      component: ViewerLocalFileData,
    },
    IHEInvokeImageDisplay: {
      path: '/IHEInvokeImageDisplay',
      component: IHEInvokeImageDisplay
    }
  },
  gcloud: {
    viewer: {
      path:
        '/projects/:project/locations/:location/datasets/:dataset/dicomStores/:dicomStore/study/:studyInstanceUIDs',
      component: ViewerRouting,
      condition: appConfig => {
        return !!appConfig.enableGoogleCloudAdapter;
      },
    },
    list: {
      path:
        '/projects/:project/locations/:location/datasets/:dataset/dicomStores/:dicomStore',
      component: StudyListRouting,
      condition: appConfig => {
        const showList = appConfig.showStudyList;

        return showList && !!appConfig.enableGoogleCloudAdapter;
      },
    },
  },
};

const getRoutes = appConfig => {
  const routes = [];
  for (let keyConfig in ROUTES_DEF) {
    const routesConfig = ROUTES_DEF[keyConfig];

    for (let routeKey in routesConfig) {
      const route = routesConfig[routeKey];
      const validRoute =
        typeof route.condition === 'function'
          ? route.condition(appConfig)
          : true;

      if (validRoute) {
        routes.push({
          path: route.path,
          Component: route.component,
        });
      }
    }
  }

  return routes;
};

const parsePath = (path, server, params) => {
  let _path = path;
  const _paramsCopy = Object.assign({}, server, params);

  for (let key in _paramsCopy) {
    _path = UrlUtil.paramString.replaceParam(_path, key, _paramsCopy[key]);
  }

  return _path;
};

const parseViewerPath = (appConfig = {}, server = {}, params) => {
  let viewerPath = ROUTES_DEF.default.viewer.path;
  if (appConfig.enableGoogleCloudAdapter) {
    viewerPath = ROUTES_DEF.gcloud.viewer.path;
  }

  return parsePath(viewerPath, server, params);
};

const parseStudyListPath = (appConfig = {}, server = {}, params) => {
  let studyListPath = ROUTES_DEF.default.list.path;
  if (appConfig.enableGoogleCloudAdapter) {
    studyListPath = ROUTES_DEF.gcloud.list.path || studyListPath;
  }

  return parsePath(studyListPath, server, params);
};

export { getRoutes, parseViewerPath, parseStudyListPath, reload };
