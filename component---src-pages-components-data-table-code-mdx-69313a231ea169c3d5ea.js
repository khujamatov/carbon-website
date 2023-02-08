"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[74593],{28399:function(e,a,t){t.d(a,{Z:function(){return P}});var n=t(67294),o=t(88650),l=t.n(o),r=t(1597),s=t(80304),c=t(94656),d=t(75900),i=t.n(d);var b=e=>{let{title:a,theme:t,tabs:o=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var p=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:c}=t||o,d=`${l}/edit/${c}${s}/src/pages${a}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},m=t(56328),h=t(51721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,h.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,o=t.split("/").filter(Boolean).slice(-1)[0],s=a.map((e=>{const a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(`${o}/?(#.*)?$`),d=t.replace(c,a);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},a}(n.Component);var T=u,g=t(17680),w=t(75387),y=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var P=e=>{let{pageContext:a,children:t,location:o,Title:d}=e;const{frontmatter:i={},relativePagePath:h,titleType:u}=a,{tabs:y,title:P,theme:C,description:x,keywords:v,date:R}=i,{interiorTheme:D}=(0,w.Z)(),{site:{pathPrefix:A}}=(0,r.useStaticQuery)("2456312558"),f=A?o.pathname.replace(A,""):o.pathname,B=y?f.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",E=C||D;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:E,pageTitle:P,pageDescription:x,pageKeywords:v,titleType:u},n.createElement(b,{title:d?n.createElement(d,null):P,label:"label",tabs:y,theme:E}),y&&n.createElement(T,{title:P,slug:f,tabs:y,currentTab:B}),n.createElement(g.Z,{padded:!0},t,n.createElement(p,{relativePagePath:h}),n.createElement(k,{date:R})),n.createElement(m.Z,{pageContext:a,location:o,slug:f,tabs:y,currentTab:B}),n.createElement(s.Z,null))}},60669:function(e,a,t){var n;t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return v}});var o=t(45987),l=t(67294),r=t(64983),s=t(28399),c=t(90890),d=t(48799),i=t(12136),b=t(36873);const p=["components"],m={},h=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=h("PageDescription"),T=h("Row"),g=h("Column"),w=h("ResourceCard"),y=h("MdxIcon"),k=h("ComponentDemo"),P=h("ComponentVariant"),C={_frontmatter:m},x=s.Z;function v(e){let{components:a}=e,s=(0,o.Z)(e,p);return(0,r.kt)(x,Object.assign({},C,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(u,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Preview the data table component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,r.kt)("h2",null,"Documentation"),(0,r.kt)(T,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(w,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-datatable-basic--default",mdxType:"ResourceCard"},(0,r.kt)(y,{name:"react",mdxType:"MdxIcon"}))),(0,r.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(w,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-data-table--basic",mdxType:"ResourceCard"},(0,r.kt)(y,{name:"angular",mdxType:"MdxIcon"}))),(0,r.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(w,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--minimal",mdxType:"ResourceCard"},(0,r.kt)(y,{name:"vue",mdxType:"MdxIcon"}))),(0,r.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(w,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-data-table--default",mdxType:"ResourceCard"},(0,r.kt)(y,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Live demo"),(0,r.kt)(k,{components:[{id:"default-table",label:"Default"},{id:"with-selection",label:"With selection"},{id:"with-expansion",label:"With expansion"},{id:"with-batch-actions",label:"With batch actions"}],scope:{rowData:c.p,headerData:c.h,React:n||(n=t.t(l,2)),TrashCan:d.ZN,Save:i.vc,Download:b.UW},mdxType:"ComponentDemo"},(0,r.kt)(P,{id:"default-table",knobs:{DataTable:["isSortable"],Table:["size","useZebraStyles"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datatable--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--minimal","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-data-table--default"},mdxType:"ComponentVariant"},'<DataTable rows={rowData} headers={headerData}>\n  {({ rows, headers, getHeaderProps, getTableProps }) => (\n    <TableContainer title="DataTable">\n      <Table {...getTableProps()}>\n        <TableHead>\n          <TableRow>\n            {headers.map((header) => (\n              <TableHeader {...getHeaderProps({ header })}>\n                {header.header}\n              </TableHeader>\n            ))}\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {rows.map((row) => (\n            <TableRow key={row.id}>\n              {row.cells.map((cell) => (\n                <TableCell key={cell.id}>{cell.value}</TableCell>\n              ))}\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </TableContainer>\n  )}\n</DataTable>'),(0,r.kt)(P,{id:"with-selection",knobs:{DataTable:["isSortable"],Table:["size","useZebraStyles"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datatable-selection--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-data-table--default"},mdxType:"ComponentVariant"},'<DataTable rows={rowData} headers={headerData}>\n  {({\n    rows,\n    headers,\n    getHeaderProps,\n    getSelectionProps,\n    getRowProps,\n    getTableProps,\n  }) => (\n    <TableContainer title="DataTable with selection">\n      <Table {...getTableProps()}>\n        <TableHead>\n          <TableRow>\n            <TableSelectAll {...getSelectionProps()} />\n            {headers.map((header) => (\n              <TableHeader {...getHeaderProps({ header })}>\n                {header.header}\n              </TableHeader>\n            ))}\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {rows.map((row) => (\n            <TableRow {...getRowProps({ row })}>\n              <TableSelectRow {...getSelectionProps({ row })} />\n              {row.cells.map((cell) => (\n                <TableCell key={cell.id}>{cell.value}</TableCell>\n              ))}\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </TableContainer>\n  )}\n</DataTable>'),(0,r.kt)(P,{id:"with-expansion",knobs:{DataTable:["isSortable"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datatable-expansion--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--with-expansion",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--slotted-expanding-data","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-data-table--expandable"},mdxType:"ComponentVariant"},'<DataTable\n  rows={rowData}\n  headers={headerData}>\n    {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (\n      <TableContainer title="DataTable with expansion">\n        <Table {...getTableProps()}>\n          <TableHead>\n            <TableRow>\n              <TableExpandHeader />\n              {headers.map(header => (\n                <TableHeader {...getHeaderProps({ header })}>\n                  {header.header}\n                </TableHeader>\n              ))}\n            </TableRow>\n          </TableHead>\n          <TableBody>\n            {rows.map(row => (\n              <React.Fragment key={row.id}>\n                <TableExpandRow {...getRowProps({ row })}>\n                  {row.cells.map(cell => (\n                    <TableCell key={cell.id}>{cell.value}</TableCell>\n                  ))}\n                </TableExpandRow>\n                {row.isExpanded && (\n                  <TableExpandedRow colSpan={headers.length + 1}>\n                    <p>Aux squad rules</p>\n                  </TableExpandedRow>\n                )}\n              </React.Fragment>\n            ))}\n          </TableBody>\n        </Table>\n      </TableContainer>\n    )}\n  </DataTable>'),(0,r.kt)(P,{id:"with-batch-actions",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-datatable-batch-actions--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--with-toolbar",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-data-table--default"},mdxType:"ComponentVariant"},"<DataTable rows={rowData} headers={headerData}>\n  {({\n    rows,\n    headers,\n    getHeaderProps,\n    getRowProps,\n    getSelectionProps,\n    getBatchActionProps,\n    onInputChange,\n    selectedRows,\n  }) => (\n    <TableContainer title=\"DataTable with batch actions\">\n      <TableToolbar>\n        <TableBatchActions {...getBatchActionProps()}>\n          <TableBatchAction\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n            renderIcon={TrashCan}\n            onClick={() => console.log('clicked')}\n          >\n            Delete\n          </TableBatchAction>\n          <TableBatchAction\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n            renderIcon={Save}\n            onClick={() => console.log('clicked')}\n          >\n            Save\n          </TableBatchAction>\n          <TableBatchAction\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n            renderIcon={Download}\n            onClick={() => console.log('clicked')}\n          >\n            Download\n          </TableBatchAction>\n        </TableBatchActions>\n        <TableToolbarContent>\n          <TableToolbarSearch\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}\n            onChange={onInputChange}\n          />\n          <TableToolbarMenu\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}\n          >\n            <TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>\n              Action 1\n            </TableToolbarAction>\n            <TableToolbarAction onClick={() => alert('Alert 2')}>\n              Action 2\n            </TableToolbarAction>\n            <TableToolbarAction onClick={() => alert('Alert 3')}>\n              Action 3\n            </TableToolbarAction>\n          </TableToolbarMenu>\n          <Button\n            tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}\n            onClick={() => console.log('clicked')}\n            size=\"small\"\n            kind=\"primary\"\n          >\n            Add new\n          </Button>\n        </TableToolbarContent>\n      </TableToolbar>\n      <Table>\n        <TableHead>\n          <TableRow>\n            <TableSelectAll {...getSelectionProps()} />\n            {headers.map((header) => (\n              <TableHeader {...getHeaderProps({ header })}>\n                {header.header}\n              </TableHeader>\n            ))}\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {rows.map((row) => (\n            <TableRow {...getRowProps({ row })}>\n              <TableSelectRow {...getSelectionProps({ row })} />\n              {row.cells.map((cell) => (\n                <TableCell key={cell.id}>{cell.value}</TableCell>\n              ))}\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </TableContainer>\n  )}\n</DataTable>")),(0,r.kt)("h2",null,"Sample data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const headerData = [\n  {\n    header: 'Name',\n    key: 'name',\n  },\n  {\n    header: 'Protocol',\n    key: 'protocol',\n  },\n  {\n    header: 'Port',\n    key: 'port',\n  },\n  {\n    header: 'Rule',\n    key: 'rule',\n  },\n  {\n    header: 'Attached Groups',\n    key: 'attached_groups',\n  },\n  {\n    header: 'Status',\n    key: 'status',\n  },\n];\n\nconst rowData = [\n  {\n    attached_groups: 'Kevins VM Groups',\n    id: 'a',\n    name: 'Load Balancer 3',\n    port: 3000,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Disabled',\n  },\n  {\n    attached_groups: 'Maureens VM Groups',\n    id: 'b',\n    name: 'Load Balancer 1',\n    port: 443,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Starting',\n  },\n  {\n    attached_groups: 'Andrews VM Groups',\n    id: 'c',\n    name: 'Load Balancer 2',\n    port: 80,\n    protocol: 'HTTP',\n    rule: 'DNS delegation',\n    status: 'Active',\n  },\n  {\n    attached_groups: 'Marcs VM Groups',\n    id: 'd',\n    name: 'Load Balancer 6',\n    port: 3000,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Disabled',\n  },\n  {\n    attached_groups: 'Mels VM Groups',\n    id: 'e',\n    name: 'Load Balancer 4',\n    port: 443,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Starting',\n  },\n  {\n    attached_groups: 'Ronjas VM Groups',\n    id: 'f',\n    name: 'Load Balancer 5',\n    port: 80,\n    protocol: 'HTTP',\n    rule: 'DNS delegation',\n    status: 'Active',\n  },\n];\n")))}v.isMDXComponent=!0}}]);