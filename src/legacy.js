(function ($, window) {

    var iris = window.iris;

    //@deprecated
    iris.net = {};

    //@deprecated
    iris.util = {};

    //@deprecated
    iris.config.Load = iris.config;
    
    //@deprecated
    iris.config.Env = iris.env;
    
    //@deprecated
    iris.global.Load = iris.addGlobal;  // TODO iris.global
    
    //@deprecated
    iris.global.Data = iris.global;
    
    //@deprecated
    iris.local.Load = iris.addLocal;  // TODO iris.local
    
    //@deprecated
    iris.local.Data = iris.local;
    
    //@deprecated
    iris.lang.Load = iris.addLang; // TODO iris.lang
    
    //@deprecated
    iris.lang.LoadFrom = iris.loadLang;
    
    //@deprecated
    iris.lang.Get = iris.lang;
    
    //@deprecated
    iris.lang.Locale = iris.locale;
    
    //@deprecated
    iris.L = iris.l;
    
    //@deprecated
    iris.D = iris.d;
    
    //@deprecated
    iris.W = iris.w;
    
    //@deprecated
    iris.E = iris.e;
    
    //@deprecated
    iris.event.BEFORE_NAVIGATION = iris.BEFORE_NAVIGATION;
    
    //@deprecated
    iris.event.Subscribe = iris.on;
    
    //@deprecated
    iris.event.Notify = iris.notify;
    
    //@deprecated
    iris.event.Remove = iris.off;
    
    //@deprecated
    iris.net.BaseUri = iris.baseUri;
    
    //@deprecated
    iris.net.Ajax = iris.ajax;
    
    //@deprecated
    iris.net.CacheVersion = iris.cacheVersion;
    
    //@deprecated
    iris.Screen = iris.screen;

    //@deprecated
    iris.UI =  iris.ui;
    
    //@deprecated
    iris.screen.WelcomeScreen = iris.welcome;
    
    //@deprecated
    iris.screen.Destroy = iris.destroyScreen;
    
    //@deprecated
    function _HashToJq(p_hash, p_$obj, p_filter){
        var dom = p_$obj.get(0);
        if ( p_filter ){
            var filter;
            for ( var f=0, F=p_filter.length; f<F; f++ ){
                filter = p_hash[p_filter[f]];
                if ( filter ) {
                    dom.setAttribute(p_filter[f], filter);
                }
            }
        }
        else {
            for ( var label in p_hash){
                if ( p_hash.hasOwnProperty(label) ) {
                    dom.setAttribute(label, p_hash[label]);
                }
            }
        }
        return p_$obj;
    }

    //@deprecated
    function _JqToHash(p_$obj) {
        var hash = {};
        var attrs = p_$obj.get(0).attributes;
        var label;
        for( var f=0, F=attrs.length; f<F; f++ ) {
            label = attrs[f].name;
            if ( label.indexOf("data-") === 0 ){
                label = label.substr(5);
            }
            hash[label] = attrs[f].value;
        }
        return hash;
    }

    //@deprecated
    iris.ui.JqToHash = _JqToHash;
    
    //@deprecated
    iris.ui.HashToJq = _HashToJq;

    //@deprecated
    iris.Include = iris.include;
    
    //@deprecated
    iris.util.DateFormat = iris.date;
    
    //@deprecated
    iris.util.Currency = iris.currency;

    //@deprecated
    function _Deserialize (p_$form, p_data) {
        var element, tag, value;
        for ( var name in p_data ) {
            if ( p_data.hasOwnProperty(name) ) {
                element = p_$form.find('[name="' + name + '"]');
                
                if ( element.length > 0 ) {
                    tag = element[0].tagName.toLowerCase();
                    value = p_data[name];
                    switch (tag) {
                    case "select":
                    case"textarea":
                        $(element).val(value);
                        break;
                    case "input":
                        switch (tag) {
                        case "checkbox":
                            if (value) {
                                element.attr("checked", "checked"); 
                            }
                            break;
                        case "radio":
                            element.filter('[value="' + value + '"]').attr("checked", "checked");
                            break;
                        default:
                            element.val(value);
                        }
                    }
                }
            }
        }
    }
    //@deprecated
    iris.util.Deserialize = _Deserialize;

    //@deprecated
    function _Serialize (p_$form) {
        var json = {};
        $.map(p_$form.serializeArray(), function(p_obj){
            json[ p_obj.name ] = p_obj.value;
        });
        return json;
    }
    //@deprecated
    iris.util.Serialize = _Serialize;
    
    //@deprecated
    iris.Goto = iris.goto;
    
    //@deprecated
    iris.AddOn = iris.addOn;
    
    //@deprecated
    iris.ApplyAddOn = iris.applyAddOn;
    
    //@deprecated
    iris.Regional = iris.regional;


})(jQuery, window);