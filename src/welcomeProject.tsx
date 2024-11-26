const welcomeProject: string = `{
	"tldrawFileFormatVersion": 1,
	"schema": {
		"schemaVersion": 2,
		"sequences": {
			"com.tldraw.store": 4,
			"com.tldraw.asset": 1,
			"com.tldraw.camera": 1,
			"com.tldraw.document": 2,
			"com.tldraw.instance": 25,
			"com.tldraw.instance_page_state": 5,
			"com.tldraw.page": 1,
			"com.tldraw.instance_presence": 5,
			"com.tldraw.pointer": 1,
			"com.tldraw.shape": 4,
			"com.tldraw.asset.bookmark": 2,
			"com.tldraw.asset.image": 5,
			"com.tldraw.asset.video": 5,
			"com.tldraw.shape.group": 0,
			"com.tldraw.shape.text": 2,
			"com.tldraw.shape.bookmark": 2,
			"com.tldraw.shape.draw": 2,
			"com.tldraw.shape.geo": 9,
			"com.tldraw.shape.note": 8,
			"com.tldraw.shape.line": 5,
			"com.tldraw.shape.frame": 0,
			"com.tldraw.shape.arrow": 5,
			"com.tldraw.shape.highlight": 1,
			"com.tldraw.shape.embed": 4,
			"com.tldraw.shape.image": 4,
			"com.tldraw.shape.video": 2,
			"com.tldraw.binding.arrow": 0
		}
	},
	"records": [
		{
			"gridSize": 10,
			"name": "",
			"meta": {},
			"id": "document:document",
			"typeName": "document"
		},
		{
			"meta": {},
			"id": "page:page",
			"name": "Welcome",
			"index": "a1",
			"typeName": "page"
		},
		{
			"x": -6.948396116652269,
			"y": 181,
			"z": 1,
			"meta": {},
			"id": "camera:page:page",
			"typeName": "camera"
		},
		{
			"editingShapeId": null,
			"croppingShapeId": null,
			"selectedShapeIds": [],
			"hoveredShapeId": null,
			"erasingShapeIds": [],
			"hintingShapeIds": [],
			"focusedGroupId": null,
			"meta": {},
			"id": "instance_page_state:page:page",
			"pageId": "page:page",
			"typeName": "instance_page_state"
		},
		{
			"followingUserId": null,
			"opacityForNextShape": 1,
			"stylesForNextShape": {
				"tldraw:size": "s",
				"tldraw:color": "red",
				"tldraw:font": "draw",
				"tldraw:dash": "dashed",
				"tldraw:geo": "ellipse",
				"tldraw:fill": "none"
			},
			"brush": null,
			"scribbles": [],
			"cursor": {
				"type": "default",
				"rotation": 0
			},
			"isFocusMode": false,
			"exportBackground": true,
			"isDebugMode": false,
			"isToolLocked": false,
			"screenBounds": {
				"x": 0,
				"y": 0,
				"w": 900,
				"h": 650
			},
			"insets": [
				false,
				false,
				true,
				false
			],
			"zoomBrush": null,
			"isGridMode": false,
			"isPenMode": false,
			"chatMessage": "",
			"isChatting": false,
			"highlightedUserIds": [],
			"isFocused": true,
			"devicePixelRatio": 1,
			"isCoarsePointer": false,
			"isHoveringCanvas": false,
			"openMenus": [],
			"isChangingStyle": false,
			"isReadonly": false,
			"meta": {},
			"duplicateProps": null,
			"id": "instance:instance",
			"currentPageId": "page:page",
			"typeName": "instance"
		},
		{
			"id": "pointer:pointer",
			"typeName": "pointer",
			"x": 40.94839611665227,
			"y": -141,
			"lastActivityTimestamp": 1732569249858,
			"meta": {}
		},
		{
			"x": 378,
			"y": 25.796875,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:hAZUn3FCLa1QR3cuiYLO8",
			"type": "text",
			"props": {
				"color": "light-blue",
				"size": "l",
				"w": 337,
				"text": "TauriLocalDraw",
				"font": "draw",
				"textAlign": "start",
				"autoSize": false,
				"scale": 1
			},
			"parentId": "page:page",
			"index": "a1",
			"typeName": "shape"
		},
		{
			"x": 274.94839611665225,
			"y": -19,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:7MIuSgjOmfOREzSxcsn4Z",
			"type": "arrow",
			"props": {
				"dash": "dashed",
				"size": "s",
				"fill": "none",
				"color": "yellow",
				"labelColor": "black",
				"bend": -41.33257634959833,
				"start": {
					"x": 61.94405500856169,
					"y": 133.8515625
				},
				"end": {
					"x": -240.99999999999997,
					"y": -115
				},
				"arrowheadStart": "none",
				"arrowheadEnd": "arrow",
				"text": "Save and open projects locally",
				"labelPosition": 0.5372421134461168,
				"font": "draw",
				"scale": 1
			},
			"parentId": "page:page",
			"index": "a1bhz",
			"typeName": "shape"
		},
		{
			"x": 704.9483961166522,
			"y": 253,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:ub-V2iVUGmS1JcmOCNmaq",
			"type": "arrow",
			"props": {
				"dash": "dashed",
				"size": "s",
				"fill": "none",
				"color": "yellow",
				"labelColor": "black",
				"bend": 69.42210688101875,
				"start": {
					"x": -212,
					"y": -175
				},
				"end": {
					"x": 93,
					"y": 190
				},
				"arrowheadStart": "none",
				"arrowheadEnd": "arrow",
				"text": "Local/offline derivative of tldraw.com",
				"labelPosition": 0.5228663082655612,
				"font": "draw",
				"scale": 1
			},
			"parentId": "page:page",
			"index": "a5C6W",
			"typeName": "shape"
		},
		{
			"x": 0,
			"y": 0,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:CDfuWPrFbUW5DZAeyh5eg",
			"type": "text",
			"props": {
				"color": "black",
				"size": "s",
				"w": 293.328125,
				"text": "Start by making a New Project:",
				"font": "draw",
				"textAlign": "start",
				"autoSize": true,
				"scale": 1
			},
			"parentId": "shape:Ns-k5UjMG8WduetW3hC5_",
			"index": "a1",
			"typeName": "shape"
		},
		{
			"id": "asset:-250389426",
			"type": "image",
			"typeName": "asset",
			"props": {
				"name": "tldrawFile",
				"src": "data:image/png;base64,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",
				"w": 266,
				"h": 116,
				"fileSize": 7833,
				"mimeType": "image/png",
				"isAnimated": false
			},
			"meta": {}
		},
		{
			"x": 0,
			"y": 38.1484375,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:w7l2mnKT8jVEXpZMDdyqa",
			"type": "image",
			"props": {
				"w": 307.2758620689655,
				"h": 134,
				"assetId": "asset:-250389426",
				"playing": true,
				"url": "",
				"crop": null,
				"flipX": false,
				"flipY": false
			},
			"parentId": "shape:Ns-k5UjMG8WduetW3hC5_",
			"index": "a28ny",
			"typeName": "shape"
		},
		{
			"x": 131.99141344866513,
			"y": 69.15914774728918,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:4UV1YRzwhcNXUlvSYxezk",
			"type": "geo",
			"props": {
				"w": 145.00858655133484,
				"h": 48.97857950542163,
				"geo": "ellipse",
				"color": "light-blue",
				"labelColor": "black",
				"fill": "none",
				"dash": "dashed",
				"size": "s",
				"font": "draw",
				"text": "",
				"align": "middle",
				"verticalAlign": "middle",
				"growY": 0,
				"url": "",
				"scale": 1
			},
			"parentId": "shape:Ns-k5UjMG8WduetW3hC5_",
			"index": "a31kA",
			"typeName": "shape"
		},
		{
			"x": 80.94839611665225,
			"y": 157.8515625,
			"rotation": 0,
			"isLocked": false,
			"opacity": 1,
			"meta": {},
			"id": "shape:Ns-k5UjMG8WduetW3hC5_",
			"type": "group",
			"parentId": "page:page",
			"index": "aA1pu",
			"props": {},
			"typeName": "shape"
		},
		{
			"meta": {},
			"id": "binding:LP23cQejoWcbx5TYn3PQp",
			"type": "arrow",
			"fromId": "shape:7MIuSgjOmfOREzSxcsn4Z",
			"toId": "shape:hAZUn3FCLa1QR3cuiYLO8",
			"props": {
				"isPrecise": true,
				"isExact": false,
				"normalizedAnchor": {
					"x": 0.017485018175709015,
					"y": 0.5567524115755627
				},
				"terminal": "start"
			},
			"typeName": "binding"
		},
		{
			"meta": {},
			"id": "binding:0PX2krTop7Vqy98KfvoJc",
			"type": "arrow",
			"fromId": "shape:ub-V2iVUGmS1JcmOCNmaq",
			"toId": "shape:hAZUn3FCLa1QR3cuiYLO8",
			"props": {
				"isPrecise": true,
				"isExact": false,
				"normalizedAnchor": {
					"x": 0.43011393506425,
					"y": 0.8890675241157556
				},
				"terminal": "start"
			},
			"typeName": "binding"
		}
	]
}`;

export default welcomeProject;