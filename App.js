import {View, Text} from 'react-native';
import React from 'react';
import PDFView from 'react-native-view-pdf';
const resources = {
  file:
    Platform.OS === 'ios'
      ? 'downloadedDocument.pdf'
      : '/sdcard/Download/downloadedDocument.pdf',
  url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};
console.log(resources.url)
const App = () => {
  const resourceType = 'url';
  return (
    <View style={{flex: 1}}>
      {/* Some Controls to change PDF resource */}
      <PDFView
        fadeInDuration={250.0}
        style={{flex: 1}}
        resource={'http://samples.leanpub.com/thereactnativebook-sample.pdf'}
        resourceType={resourceType}
        onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        onError={error => console.log('Cannot render PDF', error)}
      />
    </View>
  );
};

export default App;
