/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { metadata, utils } from '@ohif/core';

import ConnectedViewer from '../connectedComponents/ConnectedViewer.js';
import PropTypes from 'prop-types';
import { extensionManager } from './../App.js';
import Dropzone from 'react-dropzone';
import filesToStudies from '../lib/filesToStudies';
import '../connectedComponents/ViewerLocalFileData-.css';
import { withTranslation } from 'react-i18next';
//import '../connectedComponents/ViewerLocalFileData-.css';

const { OHIFStudyMetadata } = metadata;
const { studyMetadataManager } = utils;

const dropZoneLinkDialog = (onDrop, i18n, dir) => {
  return (
    <Dropzone onDrop={onDrop} noDrag>
      {({ getRootProps, getInputProps }) => (
        <span {...getRootProps()} className="link-dialog">
          {dir ? (
            <span>
              {i18n('Load folders')}
              <input
                {...getInputProps()}
                webkitdirectory="true"
                mozdirectory="true"
              />
            </span>
          ) : (
            <span>
              {i18n('Load files')}
              <input {...getInputProps()} />
            </span>
          )}
        </span>
      )}
    </Dropzone>
  );
};

const linksDialogMessage = (onDrop, i18n) => {
  return (
    <>
      {i18n('click to ')}
      {dropZoneLinkDialog(onDrop, i18n)}
      {i18n(' or ')}
      {dropZoneLinkDialog(onDrop, i18n, true)}
    </>
  );
};

class ViewerLocalFile extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    studies: PropTypes.array,
  };

  state = {
    studies: null,
    loading: false,
    error: null,
  };
  updateStudies = studies => {
    // Render the viewer when the data is ready
    studyMetadataManager.purge();

    // Map studies to new format, update metadata manager?
    const updatedStudies = studies.map(study => {
      const studyMetadata = new OHIFStudyMetadata(
        study,
        study.StudyInstanceUID
      );
      const sopClassHandlerModules =
        extensionManager.modules['sopClassHandlerModule'];

      study.displaySets =
        study.displaySets ||
        studyMetadata.createDisplaySets(sopClassHandlerModules);

      studyMetadata.forEachDisplaySet(displayset => {
        displayset.localFile = true;
      });

      studyMetadataManager.add(studyMetadata);

      return study;
    });

    this.setState({
      studies: updatedStudies,
    });
  };

  render() {
    const onDrop = async acceptedFiles => {
      this.setState({ loading: true });

      const studies = await filesToStudies(acceptedFiles);
      const updatedStudies = this.updateStudies(studies);
      if (!updatedStudies) {
        return;
      }

      this.setState({ studies: updatedStudies, loading: false });
    };

    if (this.state.error) {
      return <div>Error: {JSON.stringify(this.state.error)}</div>;
    }

    return (
      <Dropzone onDrop={onDrop} noClick>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ width: '100%', height: '100%' }}>
            {this.state.studies ? (
              <ConnectedViewer
                studies={this.state.studies}
                studyInstanceUIDs={
                  this.state.studies &&
                  this.state.studies.map(a => a.StudyInstanceUID)
                }
              />
            ) : (
              <div className={'drag-drop-instructions'}>
                <div className={'drag-drop-contents'}>
                  {this.state.loading ? (
                    <h3>{this.props.t('Loading...')}</h3>
                  ) : (
                    <>
                      <h3>{this.props.t()}</h3>
                      <h4>{linksDialogMessage(onDrop, this.props.t)}</h4>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    );
  }
}

export default withTranslation('Common')(ViewerLocalFile);