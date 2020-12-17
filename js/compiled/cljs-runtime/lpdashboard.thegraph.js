goog.provide('lpdashboard.thegraph');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.thegraph.uni_subgraph_url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
lpdashboard.thegraph.snapshot_query_string = (function lpdashboard$thegraph$snapshot_query_string(user_address){
return ["{\n      liquidityPositionSnapshots(orderBy: timestamp,\n                                 where: {user: \"",clojure.string.lower_case(user_address),"\"}\n                                 first: 1000) {\n      block,\n      timestamp,\n      pair {\n          id,\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance,\n    liquidityTokenTotalSupply,\n    token0PriceUSD,\n    token1PriceUSD,\n    reserve0,\n    reserve1,\n    reserveUSD\n    }\n   }"].join('');
});
lpdashboard.thegraph.some_pair = "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455";
lpdashboard.thegraph.positions_query_string = (function lpdashboard$thegraph$positions_query_string(user,pairs){
return ["{\n      liquidityPositions( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78627_SHARP_){
return ["\"",clojure.string.lower_case(p1__78627_SHARP_),"-",clojure.string.lower_case(user),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance\n    }\n   }"].join('');
});
lpdashboard.thegraph.pairs_query_string = (function lpdashboard$thegraph$pairs_query_string(pairs){
return ["{\n      pairs( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78628_SHARP_){
return ["\"",clojure.string.lower_case(p1__78628_SHARP_),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n()\n          }\n     }\n\n    }\n   "].join('');
});
lpdashboard.thegraph.mints_query_string = (function lpdashboard$thegraph$mints_query_string(address){
return ["{\n      mints(where: {to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"\"}) {\n          id,\n          to,\n          timestamp,\n          liquidity,\n          amount0,\n          amount1,\n          pair {\n          id,\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n          transaction {\n             id,\n             blockNumber,\n             timestamp\n          }\n\n       }\n     }\n   "].join('');
});
lpdashboard.thegraph.pair_days_query_string = (function lpdashboard$thegraph$pair_days_query_string(pair_address){
return ["{\n      pairDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {pairAddress: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pair_address),"\"}\n                   first: 1000) {\n         id\n         date,\n         pairAddress,\n         token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         reserve0,\n         reserve1,\n         totalSupply,\n         reserveUSD,\n         dailyVolumeToken0,\n         dailyVolumeToken1,\n         dailyVolumeUSD,\n         dailyTxns\n       }\n     }\n   "].join('');
});
lpdashboard.thegraph.token_days_query_string = (function lpdashboard$thegraph$token_days_query_string(token_address){
return ["{\n      tokenDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {token: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_address),"\"}\n                   first: 1000) {\n         id\n         date,\n         token {id},\n         priceUSD\n       }\n     }\n   "].join('');
});
lpdashboard.thegraph._LT_user_lps = (function lpdashboard$thegraph$_LT_user_lps(user_address,pair_addresses){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78654){
var state_val_78655 = (state_78654[(1)]);
if((state_val_78655 === (1))){
var inst_78630 = cljs.core.clj__GT_js(pair_addresses);
var inst_78631 = console.log(inst_78630);
var inst_78632 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78633 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78634 = lpdashboard.thegraph.positions_query_string(user_address,pair_addresses);
var inst_78635 = [inst_78634];
var inst_78636 = cljs.core.PersistentHashMap.fromArrays(inst_78633,inst_78635);
var inst_78637 = cljs.core.clj__GT_js(inst_78636);
var inst_78638 = JSON.stringify(inst_78637);
var inst_78639 = [false,inst_78638];
var inst_78640 = cljs.core.PersistentHashMap.fromArrays(inst_78632,inst_78639);
var inst_78641 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78640], 0));
var state_78654__$1 = (function (){var statearr_78660 = state_78654;
(statearr_78660[(7)] = inst_78631);

return statearr_78660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78654__$1,(2),inst_78641);
} else {
if((state_val_78655 === (2))){
var inst_78631 = (state_78654[(7)]);
var inst_78643 = (state_78654[(2)]);
var inst_78644 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78643);
var inst_78645 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_78644);
var inst_78646 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_78645);
var inst_78647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78648 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_78649 = (new cljs.core.PersistentVector(null,1,(5),inst_78647,inst_78648,null));
var inst_78650 = (function (){var _ = inst_78631;
var data = inst_78643;
var positions = inst_78646;
var keys_numerical_vals = inst_78649;
return (function (p1__78629_SHARP_){
return lpdashboard.utils.pu(p1__78629_SHARP_,(0));
});
})();
var inst_78651 = (function (){var _ = inst_78631;
var data = inst_78643;
var positions = inst_78646;
var keys_numerical_vals = inst_78649;
var num_parse_fn = inst_78650;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair));
var ts = num_parse_fn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var pair_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pair,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834),ts], 0));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"pair","pair",-447516312),pair_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_78652 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78651,inst_78646);
var state_78654__$1 = state_78654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78654__$1,inst_78652);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____0 = (function (){
var statearr_78665 = [null,null,null,null,null,null,null,null];
(statearr_78665[(0)] = lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__);

(statearr_78665[(1)] = (1));

return statearr_78665;
});
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____1 = (function (state_78654){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78654);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78666){var ex__38743__auto__ = e78666;
var statearr_78669_78787 = state_78654;
(statearr_78669_78787[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78654[(4)]))){
var statearr_78670_78788 = state_78654;
(statearr_78670_78788[(1)] = cljs.core.first((state_78654[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78789 = state_78654;
state_78654 = G__78789;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__ = function(state_78654){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____1.call(this,state_78654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78674 = f__38832__auto__();
(statearr_78674[(6)] = c__38831__auto__);

return statearr_78674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});
lpdashboard.thegraph._LT_user_lp_snapshots = (function lpdashboard$thegraph$_LT_user_lp_snapshots(user_address){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78695){
var state_val_78696 = (state_78695[(1)]);
if((state_val_78696 === (1))){
var inst_78676 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78677 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78678 = lpdashboard.thegraph.snapshot_query_string(user_address);
var inst_78679 = [inst_78678];
var inst_78680 = cljs.core.PersistentHashMap.fromArrays(inst_78677,inst_78679);
var inst_78681 = cljs.core.clj__GT_js(inst_78680);
var inst_78682 = JSON.stringify(inst_78681);
var inst_78683 = [false,inst_78682];
var inst_78684 = cljs.core.PersistentHashMap.fromArrays(inst_78676,inst_78683);
var inst_78685 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78684], 0));
var state_78695__$1 = state_78695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78695__$1,(2),inst_78685);
} else {
if((state_val_78696 === (2))){
var inst_78687 = (state_78695[(2)]);
var inst_78688 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78687);
var inst_78689 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_78688);
var inst_78690 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_78689);
var inst_78691 = (function (){var data = inst_78687;
var positions = inst_78690;
return (function (p1__78675_SHARP_){
return lpdashboard.utils.pu(p1__78675_SHARP_,(0));
});
})();
var inst_78692 = (function (){var data = inst_78687;
var positions = inst_78690;
var num_parse_fn = inst_78691;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(p));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(p));
var lts = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(p));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var rusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(p));
var t0pusd = num_parse_fn(new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558).cljs$core$IFn$_invoke$arity$1(p));
var t1pusd = num_parse_fn(new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814).cljs$core$IFn$_invoke$arity$1(p));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb,new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934),lts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),rusd,new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558),t0pusd,new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814),t1pusd], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_78693 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78692,inst_78690);
var state_78695__$1 = state_78695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78695__$1,inst_78693);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____0 = (function (){
var statearr_78698 = [null,null,null,null,null,null,null];
(statearr_78698[(0)] = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__);

(statearr_78698[(1)] = (1));

return statearr_78698;
});
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____1 = (function (state_78695){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78695);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78699){var ex__38743__auto__ = e78699;
var statearr_78700_78790 = state_78695;
(statearr_78700_78790[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78695[(4)]))){
var statearr_78701_78791 = state_78695;
(statearr_78701_78791[(1)] = cljs.core.first((state_78695[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78792 = state_78695;
state_78695 = G__78792;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__ = function(state_78695){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____1.call(this,state_78695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78702 = f__38832__auto__();
(statearr_78702[(6)] = c__38831__auto__);

return statearr_78702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});
lpdashboard.thegraph._LT_pairs_info = (function lpdashboard$thegraph$_LT_pairs_info(pair_addresses){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78717){
var state_val_78718 = (state_78717[(1)]);
if((state_val_78718 === (1))){
var inst_78703 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78704 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78705 = lpdashboard.thegraph.pairs_query_string(pair_addresses);
var inst_78706 = [inst_78705];
var inst_78707 = cljs.core.PersistentHashMap.fromArrays(inst_78704,inst_78706);
var inst_78708 = cljs.core.clj__GT_js(inst_78707);
var inst_78709 = JSON.stringify(inst_78708);
var inst_78710 = [false,inst_78709];
var inst_78711 = cljs.core.PersistentHashMap.fromArrays(inst_78703,inst_78710);
var inst_78712 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78711], 0));
var state_78717__$1 = state_78717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78717__$1,(2),inst_78712);
} else {
if((state_val_78718 === (2))){
var inst_78714 = (state_78717[(2)]);
var inst_78715 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78714);
var state_78717__$1 = state_78717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78717__$1,inst_78715);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____0 = (function (){
var statearr_78719 = [null,null,null,null,null,null,null];
(statearr_78719[(0)] = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__);

(statearr_78719[(1)] = (1));

return statearr_78719;
});
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____1 = (function (state_78717){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78717);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78720){var ex__38743__auto__ = e78720;
var statearr_78721_78819 = state_78717;
(statearr_78721_78819[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78717[(4)]))){
var statearr_78722_78820 = state_78717;
(statearr_78722_78820[(1)] = cljs.core.first((state_78717[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78821 = state_78717;
state_78717 = G__78821;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__ = function(state_78717){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____1.call(this,state_78717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78723 = f__38832__auto__();
(statearr_78723[(6)] = c__38831__auto__);

return statearr_78723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});
lpdashboard.thegraph._LT_user_mints = (function lpdashboard$thegraph$_LT_user_mints(user_addresses){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78738){
var state_val_78739 = (state_78738[(1)]);
if((state_val_78739 === (1))){
var inst_78724 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78725 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78726 = lpdashboard.thegraph.mints_query_string(user_addresses);
var inst_78727 = [inst_78726];
var inst_78728 = cljs.core.PersistentHashMap.fromArrays(inst_78725,inst_78727);
var inst_78729 = cljs.core.clj__GT_js(inst_78728);
var inst_78730 = JSON.stringify(inst_78729);
var inst_78731 = [false,inst_78730];
var inst_78732 = cljs.core.PersistentHashMap.fromArrays(inst_78724,inst_78731);
var inst_78733 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78732], 0));
var state_78738__$1 = state_78738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78738__$1,(2),inst_78733);
} else {
if((state_val_78739 === (2))){
var inst_78735 = (state_78738[(2)]);
var inst_78736 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78735);
var state_78738__$1 = state_78738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78738__$1,inst_78736);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____0 = (function (){
var statearr_78740 = [null,null,null,null,null,null,null];
(statearr_78740[(0)] = lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__);

(statearr_78740[(1)] = (1));

return statearr_78740;
});
var lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____1 = (function (state_78738){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78738);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78741){var ex__38743__auto__ = e78741;
var statearr_78742_78829 = state_78738;
(statearr_78742_78829[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78738[(4)]))){
var statearr_78743_78830 = state_78738;
(statearr_78743_78830[(1)] = cljs.core.first((state_78738[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78831 = state_78738;
state_78738 = G__78831;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__ = function(state_78738){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____1.call(this,state_78738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_user_mints_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78744 = f__38832__auto__();
(statearr_78744[(6)] = c__38831__auto__);

return statearr_78744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});
lpdashboard.thegraph._LT_pair_days = (function lpdashboard$thegraph$_LT_pair_days(pair_addresses){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78759){
var state_val_78760 = (state_78759[(1)]);
if((state_val_78760 === (1))){
var inst_78745 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78746 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78747 = lpdashboard.thegraph.pair_days_query_string(pair_addresses);
var inst_78748 = [inst_78747];
var inst_78749 = cljs.core.PersistentHashMap.fromArrays(inst_78746,inst_78748);
var inst_78750 = cljs.core.clj__GT_js(inst_78749);
var inst_78751 = JSON.stringify(inst_78750);
var inst_78752 = [false,inst_78751];
var inst_78753 = cljs.core.PersistentHashMap.fromArrays(inst_78745,inst_78752);
var inst_78754 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78753], 0));
var state_78759__$1 = state_78759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78759__$1,(2),inst_78754);
} else {
if((state_val_78760 === (2))){
var inst_78756 = (state_78759[(2)]);
var inst_78757 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78756);
var state_78759__$1 = state_78759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78759__$1,inst_78757);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____0 = (function (){
var statearr_78761 = [null,null,null,null,null,null,null];
(statearr_78761[(0)] = lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__);

(statearr_78761[(1)] = (1));

return statearr_78761;
});
var lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____1 = (function (state_78759){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78759);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78762){var ex__38743__auto__ = e78762;
var statearr_78763_78837 = state_78759;
(statearr_78763_78837[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78759[(4)]))){
var statearr_78764_78838 = state_78759;
(statearr_78764_78838[(1)] = cljs.core.first((state_78759[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78839 = state_78759;
state_78759 = G__78839;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__ = function(state_78759){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____1.call(this,state_78759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_pair_days_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78765 = f__38832__auto__();
(statearr_78765[(6)] = c__38831__auto__);

return statearr_78765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});
lpdashboard.thegraph._LT_token_days = (function lpdashboard$thegraph$_LT_token_days(token_addresses){
var c__38831__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38832__auto__ = (function (){var switch__38739__auto__ = (function (state_78780){
var state_val_78781 = (state_78780[(1)]);
if((state_val_78781 === (1))){
var inst_78766 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_78767 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_78768 = lpdashboard.thegraph.token_days_query_string(token_addresses);
var inst_78769 = [inst_78768];
var inst_78770 = cljs.core.PersistentHashMap.fromArrays(inst_78767,inst_78769);
var inst_78771 = cljs.core.clj__GT_js(inst_78770);
var inst_78772 = JSON.stringify(inst_78771);
var inst_78773 = [false,inst_78772];
var inst_78774 = cljs.core.PersistentHashMap.fromArrays(inst_78766,inst_78773);
var inst_78775 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78774], 0));
var state_78780__$1 = state_78780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78780__$1,(2),inst_78775);
} else {
if((state_val_78781 === (2))){
var inst_78777 = (state_78780[(2)]);
var inst_78778 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_78777);
var state_78780__$1 = state_78780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78780__$1,inst_78778);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__ = null;
var lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____0 = (function (){
var statearr_78782 = [null,null,null,null,null,null,null];
(statearr_78782[(0)] = lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__);

(statearr_78782[(1)] = (1));

return statearr_78782;
});
var lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____1 = (function (state_78780){
while(true){
var ret_value__38741__auto__ = (function (){try{while(true){
var result__38742__auto__ = switch__38739__auto__(state_78780);
if(cljs.core.keyword_identical_QMARK_(result__38742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38742__auto__;
}
break;
}
}catch (e78783){var ex__38743__auto__ = e78783;
var statearr_78784_78847 = state_78780;
(statearr_78784_78847[(2)] = ex__38743__auto__);


if(cljs.core.seq((state_78780[(4)]))){
var statearr_78785_78848 = state_78780;
(statearr_78785_78848[(1)] = cljs.core.first((state_78780[(4)])));

} else {
throw ex__38743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78849 = state_78780;
state_78780 = G__78849;
continue;
} else {
return ret_value__38741__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__ = function(state_78780){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____1.call(this,state_78780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____0;
lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto____1;
return lpdashboard$thegraph$_LT_token_days_$_state_machine__38740__auto__;
})()
})();
var state__38833__auto__ = (function (){var statearr_78786 = f__38832__auto__();
(statearr_78786[(6)] = c__38831__auto__);

return statearr_78786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38833__auto__);
}));

return c__38831__auto__;
});

//# sourceMappingURL=lpdashboard.thegraph.js.map
