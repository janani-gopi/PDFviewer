import {View, Text} from 'react-native';
import React from 'react';
import { useState, useCallback,useEffect } from 'react';
import PdfRendererView from 'react-native-pdf-renderer';
import ReactNativeBlobUtil from 'react-native-blob-util';

const PDF_URL = 'https://www.africau.edu/images/default/sample.pdf'

const App = () => {
  const [downloading, setDownloading] = useState(false);
  const [singlePage, setSinglePage] = useState(false);
  const [source, setSource] = useState();

  const downloadWithBlobUtil = useCallback(async () => {
    try {
      setDownloading(true);
      /**
       * Download the PDF file with any other library, like  "expo-file-system", "rn-fetch-blob" or "react-native-blob-util"
       */
      const dirs = ReactNativeBlobUtil.fs.dirs;
      const response = await ReactNativeBlobUtil.config({
        path: dirs.DocumentDir + '/file.pdf',
      }).fetch('GET', PDF_URL);
      /*
       * Then, set the local file URI to state and pass to the PdfRendererView source prop.
       */
      setSource(response.path());
    } catch (err) {
      console.warn(err);
    } finally {
      setDownloading(false);
    }
  }, []);
  useEffect(() => {
    downloadWithBlobUtil();
  }, [downloadWithBlobUtil]);

  return (
    <View style={{flex: 1}}>
      <Text>App</Text>
      <PdfRendererView
          style={{backgroundColor: 'red'}}
          source={source}
          distanceBetweenPages={16}
          maxZoom={2}
          singlePage={singlePage}
        />
    </View>
  );
};

export default App;
