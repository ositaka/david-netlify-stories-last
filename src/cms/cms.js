import CMS from 'netlify-cms-app'
import './cms-utils'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
// import StoryPostPreview from './preview-templates/StoryPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('stories', StoryPostPreview)