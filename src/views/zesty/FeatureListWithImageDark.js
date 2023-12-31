/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Feature List with Image | Dark 
 * Name: feature_list_with_image_dark 
 * Model ZUID: 6-da87e8b1f8-38d6n8
 * File Created On: Wed Jul 19 2023 22:30:19 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * eyebrow (text)
 * headline (text)
 * header_content (textarea)
 * main_image (images)
 * mui_icon_1 (text)
 * feature_1 (text)
 * content_1 (textarea)
 * mui_icon_2 (text)
 * feature_2 (text)
 * content_2 (textarea)
 * mui_icon_3 (text)
 * feature_3 (text)
 * content_3 (textarea)
 * mui_icon_4 (text)
 * feature_4 (text)
 * content_4 (textarea)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-da87e8b1f8-38d6n8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function FeatureListWithImageDark({ content }) {
  return (
    <>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default FeatureListWithImageDark;
