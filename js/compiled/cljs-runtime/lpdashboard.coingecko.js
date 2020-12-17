goog.provide('lpdashboard.coingecko');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.coingecko._LT_token_prices = (function lpdashboard$coingecko$_LT_token_prices(addresses){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_53882){
var state_val_53883 = (state_53882[(1)]);
if((state_val_53883 === (1))){
var inst_53862 = (state_53882[(7)]);
var inst_53861 = (state_53882[(8)]);
var inst_53858 = (state_53882[(9)]);
var inst_53858__$1 = ["https://api.coingecko.com/","api/v3/simple/token_price/ethereum?","vs_currencies=usd%2Ceth&include_last_updated_at=true","&contract_addresses="].join('');
var inst_53859 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",addresses);
var inst_53860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_53859);
var inst_53861__$1 = goog.string.urlEncode(inst_53860);
var inst_53862__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53858__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53861__$1)].join('');
var inst_53863 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_53864 = [false];
var inst_53865 = cljs.core.PersistentHashMap.fromArrays(inst_53863,inst_53864);
var inst_53866 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_53862__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53865], 0));
var state_53882__$1 = (function (){var statearr_53884 = state_53882;
(statearr_53884[(7)] = inst_53862__$1);

(statearr_53884[(8)] = inst_53861__$1);

(statearr_53884[(9)] = inst_53858__$1);

return statearr_53884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53882__$1,(2),inst_53866);
} else {
if((state_val_53883 === (2))){
var inst_53862 = (state_53882[(7)]);
var inst_53861 = (state_53882[(8)]);
var inst_53858 = (state_53882[(9)]);
var inst_53868 = (state_53882[(2)]);
var inst_53869 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_53868);
var inst_53870 = (function (){var base_url = inst_53858;
var addy_args = inst_53861;
var full_url = inst_53862;
var data = inst_53869;
return (function (p1__53855_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53855_SHARP_,new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137));
});
})();
var inst_53871 = lpdashboard.utils.update_values(inst_53869,inst_53870);
var inst_53872 = (function (){var base_url = inst_53858;
var addy_args = inst_53861;
var full_url = inst_53862;
var data = inst_53869;
var data_sans_ts = inst_53871;
return (function (p1__53856_SHARP_){
return lpdashboard.utils.update_values(p1__53856_SHARP_,(function (n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}));
});
})();
var inst_53873 = lpdashboard.utils.update_values(inst_53871,inst_53872);
var inst_53874 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(inst_53869,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53873], 0));
var inst_53875 = cljs.core.keys(inst_53874);
var inst_53876 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,inst_53875);
var inst_53877 = (function (){var base_url = inst_53858;
var addy_args = inst_53861;
var full_url = inst_53862;
var data = inst_53869;
var data_sans_ts = inst_53871;
var data_SINGLEQUOTE_ = inst_53874;
return (function (p1__53857_SHARP_){
return clojure.set.rename_keys(p1__53857_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"usd","usd",2103592073),"usd",new cljs.core.Keyword(null,"eth","eth",1381694970),"eth"], null));
});
})();
var inst_53878 = cljs.core.vals(inst_53874);
var inst_53879 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_53877,inst_53878);
var inst_53880 = cljs.core.zipmap(inst_53876,inst_53879);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53882__$1,inst_53880);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__ = null;
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____0 = (function (){
var statearr_53885 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53885[(0)] = lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__);

(statearr_53885[(1)] = (1));

return statearr_53885;
});
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____1 = (function (state_53882){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_53882);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e53886){var ex__38753__auto__ = e53886;
var statearr_53887_53910 = state_53882;
(statearr_53887_53910[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_53882[(4)]))){
var statearr_53888_53911 = state_53882;
(statearr_53888_53911[(1)] = cljs.core.first((state_53882[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53912 = state_53882;
state_53882 = G__53912;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__ = function(state_53882){
switch(arguments.length){
case 0:
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____1.call(this,state_53882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____0;
lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto____1;
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_53889 = f__38842__auto__();
(statearr_53889[(6)] = c__38841__auto__);

return statearr_53889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.coingecko._LT_historic_token_prices = (function lpdashboard$coingecko$_LT_historic_token_prices(address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_53902){
var state_val_53903 = (state_53902[(1)]);
if((state_val_53903 === (1))){
var inst_53891 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_53892 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53891], 0));
var inst_53893 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_53894 = [false];
var inst_53895 = cljs.core.PersistentHashMap.fromArrays(inst_53893,inst_53894);
var inst_53896 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_53891,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53895], 0));
var state_53902__$1 = (function (){var statearr_53904 = state_53902;
(statearr_53904[(7)] = inst_53892);

return statearr_53904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53902__$1,(2),inst_53896);
} else {
if((state_val_53903 === (2))){
var inst_53898 = (state_53902[(2)]);
var inst_53899 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_53898);
var inst_53900 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_53899);
var state_53902__$1 = state_53902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53902__$1,inst_53900);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__ = null;
var lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____0 = (function (){
var statearr_53905 = [null,null,null,null,null,null,null,null];
(statearr_53905[(0)] = lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__);

(statearr_53905[(1)] = (1));

return statearr_53905;
});
var lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____1 = (function (state_53902){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_53902);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e53906){var ex__38753__auto__ = e53906;
var statearr_53907_53913 = state_53902;
(statearr_53907_53913[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_53902[(4)]))){
var statearr_53908_53914 = state_53902;
(statearr_53908_53914[(1)] = cljs.core.first((state_53902[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53915 = state_53902;
state_53902 = G__53915;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__ = function(state_53902){
switch(arguments.length){
case 0:
return lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____1.call(this,state_53902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____0;
lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto____1;
return lpdashboard$coingecko$_LT_historic_token_prices_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_53909 = f__38842__auto__();
(statearr_53909[(6)] = c__38841__auto__);

return statearr_53909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});

//# sourceMappingURL=lpdashboard.coingecko.js.map
