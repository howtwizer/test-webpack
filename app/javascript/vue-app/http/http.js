import {serialize} from './serializers';

const HTTP = {
    install(Vue, options){
        Vue.prototype.$http = function (url, type, data){
            return new Promise(function (resolve, reject){
                let serializedData = serialize(data);
                const requestOptions = {
                    url,
                    type,
                    data   : serializedData,
                    success: function (response, xhStatusText /* xhr */){
                        resolve(response, xhStatusText);
                    },
                    error  : function (response, xhrStatusText /* xhr */){
                        reject(response, xhrStatusText);
                    }
                };

                Rails.ajax(requestOptions);
            });

        };
    }
};

export default HTTP;