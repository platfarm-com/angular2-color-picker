webpackJsonp([0],{0:function(r,n,o){"use strict";var t=o(1),e=o(3),l=o(23);e.enableProdMode(),t.platformBrowserDynamic().bootstrapModule(l.AppModule)},23:function(r,n,o){"use strict";var t=this&&this.__decorate||function(r,n,o,t){var e,l=arguments.length,c=l<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(r,n,o,t);else for(var i=r.length-1;i>=0;i--)(e=r[i])&&(c=(l<3?e(c):l>3?e(n,o,c):e(n,o))||c);return l>3&&c&&Object.defineProperty(n,o,c),c},e=this&&this.__metadata||function(r,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,n)},l=o(3),c=o(21),i=o(24),a=o(29),s=function(){function AppModule(){}return AppModule=t([l.NgModule({imports:[c.BrowserModule,a.ColorPickerModule],declarations:[i.AppComponent],providers:[a.ColorPickerService],bootstrap:[i.AppComponent]}),e("design:paramtypes",[])],AppModule)}();n.AppModule=s},24:function(r,n,o){"use strict";var t=this&&this.__decorate||function(r,n,o,t){var e,l=arguments.length,c=l<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(r,n,o,t);else for(var i=r.length-1;i>=0;i--)(e=r[i])&&(c=(l<3?e(c):l>3?e(n,o,c):e(n,o))||c);return l>3&&c&&Object.defineProperty(n,o,c),c},e=this&&this.__metadata||function(r,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,n)},l=o(3);o(25);var c=o(29),i=function(){function Cmyk(r,n,o,t){this.c=r,this.m=n,this.y=o,this.k=t}return Cmyk}();n.Cmyk=i;var a=function(){function AppComponent(r){this.cpService=r,this.color="#2889e9",this.color2="hsla(300,82%,52%)",this.color3="#fff500",this.color4="rgb(236,64,64)",this.color5="rgba(45,208,45,1)",this.color6="#1973c0",this.color7="#f200bd",this.color8="#a8ff00",this.color9="#278ce2",this.color10="#0a6211",this.color11="#f2ff00",this.color12="#f200bd",this.color13="#1973c0",this.color14="#a8ff00",this.color15="#a51ad6a3",this.arrayColors={},this.selectedColor="color",this.lastColor="#ff0",this.cmyk=new i(0,0,0,0),this.arrayColors.color="#2883e9",this.arrayColors.color2="#e920e9",this.arrayColors.color3="rgb(255,245,0)",this.arrayColors.color4="rgb(236,64,64)",this.arrayColors.color5="rgba(45,208,45,1)"}return AppComponent.prototype.onChangeColor=function(r){return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(r)))},AppComponent.prototype.rgbaToCmyk=function(r){var n,o=new i(0,0,0,0);return n=1-Math.max(r.r,r.g,r.b),1==n?new i(0,0,0,1):(o.c=(1-r.r-n)/(1-n),o.m=(1-r.g-n)/(1-n),o.y=(1-r.b-n)/(1-n),o.k=n,o)},AppComponent.prototype.onChangeColorHex8=function(r){return this.cpService.outputFormat(this.cpService.stringToHsva(r,!0),"rgba",!0)},AppComponent=t([l.Component({selector:"my-app",template:o(34),styles:[o(35)]}),e("design:paramtypes",["function"==typeof(r="undefined"!=typeof c.ColorPickerService&&c.ColorPickerService)&&r||Object])],AppComponent);var r}();n.AppComponent=a},25:function(r,n){},34:function(r,n){r.exports='<div class="container">\r\n    <h1>Angular2 Color Picker Directive</h1>\r\n    <h4>A Color Picker Directive for Angular 2 with no dependencies.</h4>\r\n    <h4><b>by Alberto Pujante</b></h4>\r\n    <a class="btn btn-primary btn-lg" href="https://github.com/Alberplz/angular2-color-picker">View on Github</a>\r\n\r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input [(colorPicker)]="color" [style.background]="color"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Usage:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color"/&gt;\r\n            </pre>            \r\n            <p>Or:</p>\r\n            <pre>\r\n&lt;input [colorPicker]="color" \r\n        (colorPickerChange)="color=$event"\r\n        [style.background]="color"/&gt;\r\n            </pre>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input [(colorPicker)]="color2" \r\n                [style.background]="color2" \r\n                [value]="color2"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Show the color in the input field:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input [(colorPicker)]="color3" \r\n                [style.background]="color3" \r\n                [value]="color3"    \r\n                [cpOutputFormat]="\'rgba\'"/><br><br>\r\n            <input [(colorPicker)]="color4" \r\n                [style.background]="color4" \r\n                [value]="color4"    \r\n                [cpOutputFormat]="\'hsla\'"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Output format:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"\r\n       [cpOutputFormat]="\'rgba\'"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row" > \r\n        <div class="col-md-5" >\r\n            <input [(colorPicker)]="color5" \r\n                [style.background]="color5"                   \r\n                [value]="color5"\r\n                [cpPosition]="\'bottom\'"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Changing dialog position:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"\r\n       [cpPosition]="\'bottom\'"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row" > \r\n        <div class="col-md-5" >\r\n            <span id="changeme" [(colorPicker)]="color6" \r\n                  [style.color]="color6"\r\n                  [cpPosition]="\'bottom\'"\r\n                  [cpPositionOffset]="\'50%\'"\r\n                  [cpPositionRelativeToArrow]="true">Change me!</span>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>You can introduce a offset of the color picker relative to the html element:</p>\r\n            <pre>\r\n&lt;span [(colorPicker)]="color" \r\n      [cpPosition]="\'bottom\'"\r\n      [style.color]="color"\r\n      [cpPositionOffset]="\'50%\'"\r\n      [cpPositionRelativeToArrow]="true">Change me!&lt;/span&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row" > \r\n        <div class="col-md-5" >\r\n            <input [(colorPicker)]="color7" \r\n                [style.background]="color7"                   \r\n                [value]="color7"\r\n                [cpCancelButton]="true"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Show cancel button:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"\r\n       [cpCancelButton]="true"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row" > \r\n        <div class="col-md-5" >\r\n            <input [(colorPicker)]="color8" \r\n                [style.background]="color8"                   \r\n                [value]="color8"\r\n                [cpCancelButton]="true"\r\n                [cpCancelButtonClass]= "\'btn btn-primary btn-xs\'"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Change cancel button class, in this example we are using a bootstrap button:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"\r\n       [cpCancelButton]="true"\r\n       [cpCancelButtonClass]= "\'btn btn-primary btn-xs\'"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n    \r\n    <hr>\r\n    <div class="row" > \r\n        <div class="col-md-5" >\r\n            <input [(colorPicker)]="color9" \r\n                [style.background]="color9"                   \r\n                [value]="color9"\r\n                [cpOKButton]="true"\r\n                [cpSaveClickOutside]="false"\r\n                [cpOKButtonClass]= "\'btn btn-primary btn-xs\'"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Show OK button:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [value]="color"\r\n       [cpOKButton]="true"\r\n       [cpSaveClickOutside]="false"\r\n       [cpOKButtonClass]= "\'btn btn-primary btn-xs\'"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n\r\n            <input [colorPicker]="color10" \r\n                (colorPickerChange)="cmyk=onChangeColor($event);color10=$event"\r\n                [style.background]="color10"/>  \r\n\r\n            <div class="clearfix"></div>\r\n\r\n            <div class="cmyk">\r\n                <div>\r\n                    <span style="color:rgb(0,255,255);" [style.font-size.px]="100*cmyk.c">C</span>\r\n                </div>\r\n                <div>\r\n                    <span style="color:rgb(255,0,255)" [style.font-size.px]="100*cmyk.m">M</span>\r\n                </div>\r\n            </div>\r\n            <div class="clearfix"></div>\r\n\r\n            <div class="cmyk">    \r\n                <div>\r\n                    <span style="color:rgb(255,255,0)" [style.font-size.px]="100*cmyk.y">Y</span>\r\n                </div>    \r\n                <div>\r\n                    <span [style.font-size.px]="100*cmyk.k">K</span>\r\n                </div>    \r\n            </div>\r\n            <div class="clearfix"></div>\r\n            \r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Change event color:</p>\r\n            <pre>\r\n&lt;input [colorPicker]="color" \r\n       (colorPickerChange)="cmyk=onChangeColor($event);color=$event"\r\n       [style.background]="color"/&gt;\r\n\r\n&lt;span [style.font-size.px]="100*cmyk.c"/&gt;C&lt;/span/&gt;\r\n&lt;span [style.font-size.px]="100*cmyk.m"/&gt;M&lt;/span/&gt;\r\n&lt;span [style.font-size.px]="100*cmyk.y"/&gt;Y&lt;/span/&gt;\r\n&lt;span [style.font-size.px]="100*cmyk.k"/&gt;K&lt;/span/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input [(colorPicker)]="color11" \r\n                [style.background]="color11" \r\n                [cpPresetColors]="[\'#fff\', \'#000\', \'#2889e9\', \'#e920e9\', \'#fff500\', \'rgb(236,64,64)\']"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>With preset colors:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color"\r\n       [cpPresetColors]="[\'#fff\', \'#000\', \'#2889e9\', \'#e920e9\', \'#fff500\', \'rgb(236,64,64)\']"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n    \r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input #ignoredInput [(colorPicker)]="color12"                \r\n                [(cpToggle)]="toggle2" \r\n                [style.background]="color12" \r\n                [cpIgnoredElements]="[ignoredButton, ignoredInput]"/>             \r\n            <div class="clearfix"></div>          \r\n            <button class="btn btn-primary" \r\n                    (click)="toggle2=!toggle2;" #ignoredButton>Toggle</button>\r\n            <br><br>\r\n            <div><b>Toggle status: {{toggle2}}</b></div>\r\n        </div>  \r\n        <div class="col-md-7">  \r\n            <p>Use cpToggle with cpIgnoredElements:</p>\r\n            <pre>\r\n&lt;input #ignoredInput [(colorPicker)]="color"\r\n       [(cpToggle)]="toggle"\r\n       [style.background]="color"\r\n       [cpIgnoredElements]="[ignoredButton, ignoredInput]"/&gt;\r\n\r\n&lt;button (click)="toggle=!toggle;lastColor=color"  \r\n         #ignoredButton&gt;&lt;/button&gt;    \r\n            </pre>            \r\n        </div>\r\n    </div>\r\n       \r\n    <hr>\r\n    <div class="row">         \r\n        <div class="col-md-5">\r\n            <input [(colorPicker)]="color13" \r\n                [style.background]="color13" \r\n                [cpAlphaChannel]="\'disabled\'"\r\n                [value]="color13"/>\r\n            <br>\r\n            <input [(colorPicker)]="color14" \r\n                [style.background]="color14" \r\n                [cpAlphaChannel]="\'hex8\'"\r\n                [cpOutputFormat]="\'rgba\'"\r\n                [value]="color14"/>\r\n            <br>\r\n            <input [colorPicker]="color15" \r\n                (colorPickerChange)="rgbaText=onChangeColorHex8($event);color15=$event"\r\n                [style.background]="rgbaText" \r\n                [cpAlphaChannel]="\'hex8\'"   \r\n                [cpOutputFormat]="\'hex\'"\r\n                [value]="color15"/>\r\n        </div>   \r\n        <div class="col-md-7">  \r\n            <p>Change alpha channel behaviour:</p>\r\n            <pre>\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [cpAlphaChannel]="\'disabled\'"\r\n       [value]="color"/&gt;\r\n\r\n&lt;input [(colorPicker)]="color" \r\n       [style.background]="color" \r\n       [cpAlphaChannel]="\'hex8\'"\r\n       [cpOutputFormat]="\'rgba\'"\r\n       [value]="color"/&gt;\r\n\r\n&lt;input [colorPicker]="color" \r\n       (colorPickerChange)="rgbaText=onChangeColorHex8($event);color=$event"\r\n       [style.background]="rgbaText" \r\n       [cpAlphaChannel]="\'hex8\'"    \r\n       [value]="color"/&gt;\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n\r\n        <hr>\r\n    <div class="row" style="height: 320px">         \r\n        \r\n        <div class="col-md-3">\r\n            <span [(colorPicker)]="arrayColors[selectedColor]"     \r\n                [cpDialogDisplay]="\'inline\'"\r\n                [style.background]="arrayColors[selectedColor]"\r\n                [cpCancelButtonClass]= "\'btn btn-primary btn-xs\'"\r\n                [cpCancelButton]="true"\r\n                [cpToggle]="true">\r\n            </span>             \r\n        </div>\r\n        \r\n        <div class="col-md-2">\r\n            \r\n            <div class="array-colors-element"\r\n                    [style.background]="arrayColors[\'color\']"\r\n                    (click)="selectedColor=\'color\'"></div>\r\n\r\n            <div class="array-colors-element"\r\n                    [style.background]="arrayColors[\'color2\']"\r\n                    (click)="selectedColor=\'color2\'"></div>\r\n            \r\n            <div class="array-colors-element"\r\n                    [style.background]="arrayColors[\'color3\']"\r\n                    (click)="selectedColor=\'color3\'"></div>\r\n            \r\n            <div class="array-colors-element"\r\n                    [style.background]="arrayColors[\'color4\']"\r\n                    (click)="selectedColor=\'color4\'"></div>\r\n            \r\n            <div class="array-colors-element"\r\n                    [style.background]="arrayColors[\'color5\']"\r\n                    (click)="selectedColor=\'color5\'"></div>\r\n                        \r\n        </div>                \r\n\r\n        <div class="col-md-7">  \r\n            <p>Show the dialog permanently: </p>\r\n            <pre>\r\n&lt;span [(colorPicker)]="arrayColors[selectedColor]"     \r\n      [cpType]="\'fixed\'"\r\n      [style.background]="arrayColors[selectedColor]"\r\n      [cpToggle]="true"&gt;&lt;/span&gt;\r\n\r\n&lt;div [style.background]="arrayColors[\'color\']"\r\n     (click)="selectedColor=\'color\'"&gt;&lt;/div&gt;\r\n\r\n&lt;div [style.background]="arrayColors[\'color2\']"\r\n     (click)="selectedColor=\'color2\'"&gt;&lt;/div&gt;\r\n\r\n...\r\n            </pre>            \r\n        </div>\r\n    </div>\r\n        \r\n    <hr>\r\n    <br>\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <table class="table">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Options</th>\r\n                        <th>Values (default values in bold)</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>cpOutputFormat</td>\r\n                        <td>\r\n                            <b>\'hex\'</b>, \'rgba\', \'hsla\'\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpPosition</td>\r\n                        <td>\r\n                            <b>\'right\'</b>, \'left\', \'top\', \'bottom\'\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpPositionOffset</td>\r\n                        <td>                            \r\n                            <b>\'0%\'</b><br>\r\n                            Dialog offset (percent) relative to the element that contains the directive.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpPositionRelativeToArrow</td>\r\n                        <td>                            \r\n                            <b>false</b>, true <br>\r\n                            Dialog position is calculated relative to the dialog (false) or relative to the dialog arrow (true).\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpWidth</td>\r\n                        <td>                            \r\n                            <b>\'230px\'</b><br>\r\n                            Use this option to set color picker dialog width (pixels).\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpHeight</td>\r\n                        <td>                            \r\n                            <b>\'auto\'</b><br>\r\n                            Use this option to force color picker dialog height (pixels).\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpSaveClickOutside</td>\r\n                        <td>                            \r\n                            <b>true</b>, false<br>\r\n                            If true the initial color is restored when user clicks outside.\r\n                        </td>\r\n                    </tr>                                    \r\n                    <tr>\r\n                        <td>cpOKButton</td>\r\n                        <td>                            \r\n                            <b>false</b>, true<br>  \r\n                            Shows the Ok button. Saves the selected color.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpOKButtonText</td>\r\n                        <td>\r\n                            <b>\'OK\'</b>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpOKButtonClass</td>\r\n                        <td>                            \r\n                            Class to customize the OK button.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpCancelButton</td>\r\n                        <td>                             \r\n                            <b>false</b>, true<br>\r\n                            Shows the Cancel button. Cancel the selected color.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpCancelButtonText</td>\r\n                        <td>\r\n                            <b>\'Cancel\'</b>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpCancelButtonClass</td>\r\n                        <td>                            \r\n                            Class to customize the Cancel button.\r\n                        </td>\r\n                    </tr>    \r\n                    <tr>\r\n                        <td>cpFallbackColor</td>\r\n                        <td>\r\n                            <b>\'#fff\'</b><br>\r\n                            Is used when the color is not well-formed or not defined.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpPresetLabel</td>\r\n                        <td>\r\n                            <b>\'Preset colors\'</b><br>\r\n                            Label for preset colors if any provided used.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpPresetColors</td>\r\n                        <td>\r\n                            <b>[]</b><br>\r\n                            Array of preset colors to show in the color picker dialog.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpToggle</td>\r\n                        <td>\r\n                            <b>false</b>, true<br>\r\n                            Input/ouput to open/close the color picker.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpIgnoredElements</td>\r\n                        <td>\r\n                            <b>[]</b><br>\r\n                            Array of HTML elements that will be ignored by the color picker when they are clicked.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpDialogDisplay</td>\r\n                        <td>\r\n                            <b>\'popup\'</b>, \'inline\'<br>\r\n                            popup: dialog is showed when user clicks in the directive.<br>\r\n                            inline: dialog is showed permanently. You can show/hide the dialog with cpToggle.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>cpAlphaChannel</td>\r\n                        <td>\r\n                            <b>\'hex6\'</b>, \'hex8\', \'disabled\'<br>\r\n                            hex6: alpha channel is not allowed in hexadecimal values.<br>\r\n                            hex8: alpha channel is allowed in hexadecimal values.<br>\r\n                            disabled: alpha channel disabled.<br>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <footer class="footer">&copy; Alberto Pujante 2016 | <a href="https://github.com/Alberplz/angular2-color-picker">Angular2 Color Picker</a></footer>\r\n    <br>\r\n\r\n</div>'},35:function(r,n){r.exports="#changeme{\n    font-size:30px;\n    font-weight: bolder;\n    cursor: pointer;\n}\n.cmyk{\n    margin-left: 11px;\n}\n.cmyk div{\n    height: 72px;\n    width: 72px;\n    line-height: 72px;\n    text-align: center;\n    float:left; \n}\n.cmyk span{\n    font-weight: bolder;\n    text-shadow: 1px 1px 2px #bbb;\n}    \n\n#color-comparator button{ \n    height: 26px;\n    width: 26px;\n    display: block;\n    float:left;\n    border:none;\n    margin:0;\n    padding:0;\n    border: 2px solid #888;\n}\n\n#color-comparator > input{ \n    height: 26px;\n    width: 182px;\n    display: block;\n    float:left;\n    border:none;\n    margin:0;\n    padding:0;\n}\n\n.array-colors-element{\n    width: 100px;\n    height: 25px;\n    margin-bottom: 15px;\n}\n"}});
//# sourceMappingURL=app.cd516d9a368a91553c89.js.map