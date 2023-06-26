"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "googleapis"
const external_googleapis_namespaceObject = require("googleapis");
;// CONCATENATED MODULE: ./key.json
const key_namespaceObject = JSON.parse('{"Bq":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqL1pBGrjivM5b\\nfLgP7aqGuZWIbckjDB0sFemx24UgTi9W23HF0P/UsVLyn6hGYrOdKLSPrU+2KTi+\\n3+S4sqU0BOQgGU0KnEsGSKVPN8HQhwiBIHbxk653v1bAt52c0/a8YOr/1azUsK1k\\n9WoilLl385IMC+jIDXTMzkaFUxQgO7mx5RyAvXetV3LxdD7p9GhUTxgum2apN0Lq\\nKzbxV9REBtrJG4qogjQrYLhNjKJxcc1TDYRI6DHVBmRr4DtBfaODR4aU0CPPpTML\\nuCSGHiBNsCY4abukhFXCfusVAUkHCvtYPFfb3IrqQpDySlTD0mAev/Mcs/JoeJSO\\n0AfAY0elAgMBAAECggEAGTG++VdxTJ4Yv/71o8EN94XqcHhfNfC3srvTcy8Kw3ml\\n3ieoYH/RBjDi8PdRmJZF0e1Ef7Ca7XNsh3HO9DqZS19mAONim8xKG1hKxfBZtErS\\nv2b0D56zxm5EsbcPXdqapj7xs/8To6OJBAjjF5VTNB8gN0DmFPUIUSsKqzf6PP1Q\\nmIjTaGnNe98AGW51Y1G8MNcSnWChzvJlB8mWTLd0YXp58bGXSr4TvD4yHBcLy2zc\\no/NniuoWf8NgFovERde1P+4M/I6f2JcP2Zv37fTDC8gjXh3A3Q0ZkYGH1dNVcXxQ\\nd7ix6/OY6KV9Ndjup00IBdYBT30v2r8vOX+WixmKgQKBgQD1XI0QztDObawZFMa+\\n505HXa4Rti3A51tEoBiDrDLzaQ4fRtpsRD/i4v9QBuouPY9eLYuMyKMiBfMp4/co\\nnodXXdxXK6F5kxItgCLdvpAPn3tkm9AOje6OCY0dnN6pdOUwe7fAmDn0y5shLagj\\nWNdXA6vVU3oh9Ecr2SK4tCjiqwKBgQD0Vr6hucWGL7lwmYjxnbHD63kCPgXh/xev\\nfjbJsqK1WROfLpFZZKUh2iA1XGC3HU0IraOhlVFnXdIrQorC/VjZCWnxDxpE5Dbt\\nUKxDtUdZFZggqJDOMlm0BWtES2KBL+fBOejvyQzqTGmk/xXUdZgbZeXE5Y1+QOll\\n4IQPh/b+7wKBgQCpvT8xs4GsbR6zszXS932lzV8QjbGVU/hFv2N2I/iTf8fvRzrv\\nzz9LHLJ3kHENUDUQd/2khWCltuwDvNtNVG5YuGwoOdzZmC7pH03/jUdoJ3JbpZcH\\nmpS/2kevhsha/q1XHx99s1HU0c4d49H/sgQ3BCkpyTgiqTVbVjm5AZmPRQKBgQDp\\nPllSBwWgt7Qc4ePRSgjlDsaANnblKt8QXrqsRgN+fB74CLsli6b7Lr8qURneE3Fz\\nBFa8q85+jxhOxYGy66fB33OrcxBPjU9FsYoQRF9skemb224H+Babe8TO9+t7iSCB\\n2uca52CV1QXQRNUw8GSYWuhA0iUEzbA/2VgXf2JwLwKBgCbSei2qMYCdE30nbuvm\\ngdalmpcjJHCvNWkBPuPwM6b4TMXdWE+AvGbjMx/eHQxGR/yEms92raoPC89EuP2d\\nqDzuhSY6h2ZnSwgt+jqjZJqACuMae+wtCYrGjqAPEcexmIKniiN6Fj5qmjTT0ti6\\n5AFrKX3MCmBrtm4wYqtubQuB\\n-----END PRIVATE KEY-----\\n","yR":"goglesheets@bandbindex.iam.gserviceaccount.com"}');
;// CONCATENATED MODULE: ./pages/api/sheet.js


function handler(req, res) {
    try {
        const client = new external_googleapis_namespaceObject.google.auth.JWT(key_namespaceObject.yR, null, key_namespaceObject.Bq, [
            "https://www.googleapis.com/auth/spreadsheets"
        ]);
        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({
                    error: true
                }));
            }
            const gsapi = external_googleapis_namespaceObject.google.sheets({
                version: "v4",
                auth: client
            });
            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: "1RpbnMhYiwQS86Drkw4mpD-9i42ZhraG9lgYZzt-GqsY",
                range: "Wallet!A2:B6"
            };
            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({
                error: false,
                data: data.data.values[1]
            }));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({
            error: true,
            message: e.message
        }));
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(514));
module.exports = __webpack_exports__;

})();