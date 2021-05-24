import { asyncComponent, retryImport } from '@ohif/ui';
import OHIF from '@ohif/core';

const { urlUtil: UrlUtil } = OHIF.utils;

// Dynamic Import Routes (CodeSplitting)
const IHEInvokeImageDisplay = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "IHEInvokeImageDisplay" */ './IHEInvokeImageDisplay.js'
    )
  )
);
const ViewerRouting = asyncComponent(() =>
  retryImport(() =>
    import(/* webpackChunkName: "ViewerRouting" */ './ViewerRouting.js')
  )
);

const StudyListRouting = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "StudyListRouting" */ '../studylist/StudyListRouting.js'
    )
  )
);

const StandaloneRouting = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "ConnectedStandaloneRouting" */ '../connectedComponents/ConnectedStandaloneRouting.js'
    )
  )
);
const PatientList = asyncComponent(() =>
  retryImport(() =>
    import(
      /* Ajouter par Groupe passion" */ '../components/patients-list.component.js'
    )
  )
);
const CreatePatient = asyncComponent(() =>
  retryImport(() =>
    import(
      /* Ajouter par Groupe passion" */ '../components/create-patient.component.js'
    )
  )
);
const AddUser = asyncComponent(() =>
  retryImport(() =>
    import(
      /* Ajouter par Groupe :passion" */ '../components/create-user.component.js'
    )
  )
);
const Save = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "ConnectedStandaloneRouting" */ '../components/sauvegarde-upload-image.js'
    )
  )
);
const ViewerLocalFileData = asyncComponent(() =>
  retryImport(() =>
    import(
      /* webpackChunkName: "ViewerLocalFileData" */ '../connectedComponents/ViewerLocalFileData.js'
    )
  )
);
const App_2 = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../App_2.js')
  )
);
const Profil = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../profil.js')
  )
);
const Login = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../Login.js')
  )
);
const Sign_up = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../sign_up.js')
  )
);
const Test = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../profil.js')
  )
);
const Example = asyncComponent(() =>
  retryImport(() =>
    import(/* Nouvelle interface Ajouter par Group Passion */ '../report.js')
  )
);
const UsersSpace = asyncComponent(() =>
  retryImport(() =>
    import(
      /* Nouvelle interface Ajouter par Group Passion */ '../users_page.js'
    )
  )
);

const reload = () => window.location.reload();

const ROUTES_DEF = {
  default: {
    viewer: {
      path: '/viewer/:studyInstanceUIDs',
      component: ViewerRouting,
    },
    standaloneViewer: {
      path: '/viewer',
      component: StandaloneRouting,
    },
    app_2: {
      path: '/app',
      component: App_2,
    },
    login: {
      path: '/login',
      component: Login,
    },
    usersspace: {
      path: '/UsersSpace',
      component: UsersSpace,
    },
    sign_up: {
      path: '/sign_up',
      component: Sign_up,
    },
    profil: {
      path: '/profil',
      component: Profil,
    },

    createpatient: {
      path: '/CreatePatient',
      component: CreatePatient,
    },
    addUser: {
      path: '/AddUser',
      component: AddUser,
    },
    UserSpace: {
      path: '/UsersSpace',
      component: UsersSpace,
    },
    save: {
      path: '/save/',
      component: Save,
    },

    example: {
      path: '/report',
      component: Example,
    },
    patientlist: {
      path: '/patients',
      component: PatientList,
    },
    list: {
      path: ['/studylist', '/'],
      component: StudyListRouting,
      condition: appConfig => {
        return appConfig.showStudyList;
      },
    },
    local: {
      path: '/local',
      component: ViewerLocalFileData,
    },
    IHEInvokeImageDisplay: {
      path: '/IHEInvokeImageDisplay',
      component: IHEInvokeImageDisplay,
    },
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
