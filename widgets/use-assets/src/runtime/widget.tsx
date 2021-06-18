/** @jsx jsx */
import {React, AllWidgetProps,  jsx } from 'jimu-core'
import {Icon} from 'jimu-ui'
import {Config} from './config'
const smallImage = require('./small-image.png')

const svg2 = require('./mysvg2.svg')
const svg3 = require('./assets/icons/mysvg3.svg')

export default function(props: AllWidgetProps<Config>){
  return (
    <div className="widget-use-assets jimu-widget m-2" style={{overflow: 'auto'}}>
      <h3>Files in <b>assets</b> folder will be copied to dist folder when compile, for both runtime and setting.</h3>
      <br/>
      <div className="m-2">
        <h4>1. Use <b>props.context.folderUrl</b> to load large image from URL, the image must be put in <b>assets</b> folder because the <b>assets</b> folder will copied to dist while compile.</h4>
        <img style={{width: '200px', height: '200px'}} src={`${props.context.folderUrl}dist/runtime/assets/large-image.jpg`}/>
      </div>

      <div className="m-2">
        <h4>2. Use <b>require</b> to load image, you don't need to put this image in assets folder because this image is inlined while compile.</h4>
        <img style={{width: '200px', height: '200px'}} src={smallImage}/>
      </div>

      <div>
        <h4>3. SVG image</h4>
        <div>
          <div className="m-2">
            <h5>3.1. Use <b>props.context.folderUrl</b> to load .svg image from URL, the image must be put in <b>assets</b> folder. The .svg is rendered as image</h5>
            <img style={{width: '200px', height: '200px'}} src={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`}/>
          </div>

          <div className="m-2">
            <h5>3.2. Use <b>Icon</b> component to render .svg image from URL, the image must be put in <b>assets</b> folder. The .svg is rendered as SVG DOM</h5>
            <Icon icon={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`} color="red" width="200px" height="200px"/>
          </div>

          <div className="m-2">
            <h5>3.3. Use <b>require</b> to load .svg file and use <b>Icon</b> component to render, The .svg file is inlined and is rendered as image</h5>
            <Icon icon={svg2} color="red" width="200px" height="200px"/>
          </div>

          <div className="m-2">
            <h5>
              3.4. Use <b>require</b> to load .svg file (the file is under <b>assets/icons</b> folder) and use <b>Icon</b> component to render, The .svg file is inlined and is rendered as SVG DOM
            </h5>
            <Icon icon={svg3} color="red" width="200px" height="200px"/>
          </div>
        </div>
      </div>

    </div>
  )
}
