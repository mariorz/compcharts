goog.provide('lpdashboard.core');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.core.debug = true;
if(lpdashboard.core.debug === false){
(cljs.core._STAR_print_length_STAR_ = (10));

(cljs.core._STAR_print_level_STAR_ = (10));

(console.log = (function (){
return null;
}));

(console.error = (function (){
return null;
}));

(console.warn = (function (){
return null;
}));
} else {
}
lpdashboard.core.address0 = "0x0000000000000000000000000000000000000000";
lpdashboard.core.provider = lpdashboard.ethereum.provider;
lpdashboard.core.state_example = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),"some-address",new cljs.core.Keyword(null,"token-info","token-info",-589167623),new cljs.core.PersistentArrayMap(null, 3, ["eth",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"ETH",new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"name","name",1843675177),"Ether",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",100.0,"eth",(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",101.1,"eth",(1)], null)], null)], null),"0x3",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"COMP",new cljs.core.Keyword(null,"address","address",559499426),"0x33",new cljs.core.Keyword(null,"name","name",1843675177),"Compound",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null),"0x2",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MTA",new cljs.core.Keyword(null,"address","address",559499426),"0x21",new cljs.core.Keyword(null,"name","name",1843675177),"meta",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null)], null),new cljs.core.Keyword(null,"lps","lps",2143562451),new cljs.core.PersistentArrayMap(null, 1, ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["token0-address","token1-address"], null)], null),new cljs.core.Keyword(null,"unknown-destinations","unknown-destinations",1396541565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address1",new cljs.core.Keyword(null,"reason","reason",-2070751759),"lp matching failed",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address2",new cljs.core.Keyword(null,"reason","reason",-2070751759),"could not identify contract",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"txs-in","txs-in",-215562674),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"deposits","deposits",-1544951296),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"burns","burns",1858509067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(2),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),(1223324),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(100),new cljs.core.Keyword(null,"reserves","reserves",-1935017122),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(25),"token1-address",(40)], null)], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(10),new cljs.core.Keyword(null,"staked","staked",-1857531165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),1.01,new cljs.core.Keyword(null,"stakings","stakings",872334993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"txhash","txhash",149174990),"0x343",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(2),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1)], null)], null),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-address","token-address",872304132),"z",new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"example",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"x",new cljs.core.Keyword(null,"lp-address","lp-address",-1398247764),"y",new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"reward-token-symbol","reward-token-symbol",-1647197588),"p",new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),(1),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),"z"], null);
lpdashboard.core.instruction = "";
if((typeof lpdashboard !== 'undefined') && (typeof lpdashboard.core !== 'undefined') && (typeof lpdashboard.core.app_state !== 'undefined')){
} else {
lpdashboard.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282),null,new cljs.core.Keyword(null,"pool-pnl-all","pool-pnl-all",1661313006),null,new cljs.core.Keyword(null,"rewards-all","rewards-all",-319230276),null], null));
}
lpdashboard.core.zap_out_address = "0x343e3a490c9251dc0eaa81da146ba6abe6c78b2d";
lpdashboard.core.zap_out_address_old = "0xcfa897e2c4e0a64eaa9ca41f607820a09134353a";
lpdashboard.core.proxys_out = cljs.core.PersistentHashSet.createAsIfByAssoc([lpdashboard.core.zap_out_address,lpdashboard.core.zap_out_address_old]);
lpdashboard.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
lpdashboard.core.signed_qty = (function lpdashboard$core$signed_qty(n){
var s = n.toFormat((2));
if((n >= (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pos"], null),s," USD"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"neg"], null),s," USD"], null);
}
});
lpdashboard.core.shorten_name = (function lpdashboard$core$shorten_name(s){
if((s.length > (20))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(6)),"..",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(s.length - (6)))].join('');
} else {
return s;
}
});
lpdashboard.core.render_totals = (function lpdashboard$core$render_totals(account,state,lp_positions,currency){
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.separator_str], null)], 0));
var all_totals = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(state) : lpdashboard.core.compute_totals.call(null,state));
var open_totals = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$2(state,true) : lpdashboard.core.compute_totals.call(null,state,true));
var total_pnl_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(all_totals),currency);
var rewards_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(all_totals),currency).toFormat((2));
var gas_cost_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(all_totals),currency).toFormat((2));
var pool_pnl_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(all_totals),currency);
var total_pnl_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(open_totals),currency);
var rewards_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(open_totals),currency).toFormat((2));
var gas_cost_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(open_totals),currency).toFormat((2));
var pool_pnl_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(open_totals),currency);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.app_state,cljs.core.into,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"total-pnl-open","total-pnl-open",-1894188983),new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282),new cljs.core.Keyword(null,"gas-costs-all","gas-costs-all",1116723690),new cljs.core.Keyword(null,"full-state","full-state",576263053),new cljs.core.Keyword(null,"pool-pnl-all","pool-pnl-all",1661313006),new cljs.core.Keyword(null,"rewards-open","rewards-open",-661438673),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"gas-costs-open","gas-costs-open",89451604),new cljs.core.Keyword(null,"pool-pnl-open","pool-pnl-open",-593840453),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437),new cljs.core.Keyword(null,"rewards-all","rewards-all",-319230276)],[total_pnl_open,total_pnl_all,gas_cost_all,state,pool_pnl_all,rewards_open,account,gas_cost_open,pool_pnl_open,lp_positions,rewards_all]));
});
lpdashboard.core.render_loading = (function lpdashboard$core$render_loading(account){
return cljs.core.reset_BANG_(lpdashboard.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),lpdashboard.core.shorten_name(account),new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core.PersistentVector.EMPTY], null));
});
lpdashboard.core.render_account = (function lpdashboard$core$render_account(account,connected){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78453){
var state_val_78454 = (state_78453[(1)]);
if((state_val_78454 === (1))){
var state_78453__$1 = state_78453;
if(cljs.core.truth_(connected)){
var statearr_78459_80679 = state_78453__$1;
(statearr_78459_80679[(1)] = (2));

} else {
var statearr_78460_80680 = state_78453__$1;
(statearr_78460_80680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78454 === (2))){
var inst_78431 = lpdashboard.core.render_loading(account);
var state_78453__$1 = state_78453;
var statearr_78461_80681 = state_78453__$1;
(statearr_78461_80681[(2)] = inst_78431);

(statearr_78461_80681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78454 === (3))){
var inst_78433 = lpdashboard.core.render_loading("");
var state_78453__$1 = state_78453;
var statearr_78463_80682 = state_78453__$1;
(statearr_78463_80682[(2)] = inst_78433);

(statearr_78463_80682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78454 === (4))){
var inst_78435 = (state_78453[(2)]);
var inst_78436 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_78453__$1 = (function (){var statearr_78466 = state_78453;
(statearr_78466[(7)] = inst_78435);

return statearr_78466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78453__$1,(5),inst_78436);
} else {
if((state_val_78454 === (5))){
var inst_78438 = (state_78453[(2)]);
var inst_78439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78440 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78441 = (new cljs.core.PersistentVector(null,1,(5),inst_78439,inst_78440,null));
var inst_78442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78443 = ["Computing account PNL ..."];
var inst_78444 = (new cljs.core.PersistentVector(null,1,(5),inst_78442,inst_78443,null));
var inst_78445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78441,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78444], 0));
var inst_78446 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_78438) : lpdashboard.core.compute_totals.call(null,inst_78438));
var inst_78447 = (function (){var _ = inst_78445;
var account_state = inst_78438;
var totals = inst_78446;
return (function (p1__78429_SHARP_){
var G__78467 = p1__78429_SHARP_;
var G__78468 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__78467,G__78468) : lpdashboard.core.lp_position_map.call(null,G__78467,G__78468));
});
})();
var inst_78448 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_78438);
var inst_78449 = cljs.core.vals(inst_78448);
var inst_78450 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78447,inst_78449);
var inst_78451 = lpdashboard.core.render_totals(account,inst_78438,inst_78450,"USD");
var state_78453__$1 = state_78453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78453__$1,inst_78451);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__38750__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__38750__auto____0 = (function (){
var statearr_78469 = [null,null,null,null,null,null,null,null];
(statearr_78469[(0)] = lpdashboard$core$render_account_$_state_machine__38750__auto__);

(statearr_78469[(1)] = (1));

return statearr_78469;
});
var lpdashboard$core$render_account_$_state_machine__38750__auto____1 = (function (state_78453){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78453);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78472){var ex__38753__auto__ = e78472;
var statearr_78473_80683 = state_78453;
(statearr_78473_80683[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78453[(4)]))){
var statearr_78475_80684 = state_78453;
(statearr_78475_80684[(1)] = cljs.core.first((state_78453[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80685 = state_78453;
state_78453 = G__80685;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__38750__auto__ = function(state_78453){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__38750__auto____1.call(this,state_78453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__38750__auto____0;
lpdashboard$core$render_account_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__38750__auto____1;
return lpdashboard$core$render_account_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78477 = f__38842__auto__();
(statearr_78477[(6)] = c__38841__auto__);

return statearr_78477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.render_tx_link = (function lpdashboard$core$render_tx_link(tx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx)].join('')], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(tx,(0),(6))], null)," "], null);
});
lpdashboard.core.render_address_link = (function lpdashboard$core$render_address_link(tx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/address/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx)].join('')], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(tx,(0),(6))], null)," "], null);
});
lpdashboard.core.token_qty = (function lpdashboard$core$token_qty(p__78481){
var vec__78482 = p__78481;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78482,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78482,(1),null);
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}catch (e78485){if((e78485 instanceof Error)){
var err = e78485;
return null;
} else {
throw e78485;

}
}});
lpdashboard.core.open_staking_addresses = (function lpdashboard$core$open_staking_addresses(lp){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78486_SHARP_){
return bignumber.core._GT_(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(p1__78486_SHARP_),(new module$node_modules$bignumber_DOT_js$bignumber("0")));
}),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp))))));
});
lpdashboard.core.closed_staking_addresses = (function lpdashboard$core$closed_staking_addresses(lp){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78491_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(p1__78491_SHARP_))) && (cljs.core.not(bignumber.core._GT_(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(p1__78491_SHARP_),(new module$node_modules$bignumber_DOT_js$bignumber("0"))))));
}),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp))))));
});
lpdashboard.core.unidentified_destinations = (function lpdashboard$core$unidentified_destinations(lp){
var posopen = lpdashboard.core.open_staking_addresses(lp);
var posclosed = lpdashboard.core.closed_staking_addresses(lp);
var dests = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(lp))));
var known = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(posopen,posclosed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(lpdashboard.core.proxys_out)], 0))));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([known], 0));
return cljs.core.vec(cljs.core.first(clojure.data.diff(dests,known)));
});
lpdashboard.core.render_lp_pos = (function lpdashboard$core$render_lp_pos(lp_pos,lp){
var snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp));
var stakes = new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot);
var farms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),stakes);
var rewards = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stakes], 0));
var claimed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards], 0));
var claim_txs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),claimed));
var pair_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos));
var lp_tokens = new cljs.core.Keyword(null,"lp-tokens","lp-tokens",-1036932744).cljs$core$IFn$_invoke$arity$1(lp_pos);
var open_staking = lpdashboard.core.open_staking_addresses(lp);
var closed_staking = lpdashboard.core.closed_staking_addresses(lp);
var unknown_dests = lpdashboard.core.unidentified_destinations(lp);
var unclaimed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"earned","earned",71634193).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reward-breakdown","reward-breakdown",-697241610).cljs$core$IFn$_invoke$arity$1(lp_pos)));
return new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-title"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-pair"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),pair_name], null)], null),((cljs.core.not(new cljs.core.Keyword(null,"account-matches","account-matches",1477813622).cljs$core$IFn$_invoke$arity$1(lp_pos)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-matches"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null),"LP tokens not fully located "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),bignumber.core.abs(new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(lp_tokens)).toFormat((18))," minted LP tokens are not being held by the account or an identifiable staking contract"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-tpnl"].join('')], null),"Total PnL: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-ppnl"].join('')], null),"Pool PnL: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-gc"].join('')], null),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))," USD"], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-sr"].join('')], null),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))," USD"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-current"].join('')], null),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-invested"].join('')], null),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-w"].join('')], null),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-d"].join('')], null),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"diffs","diffs",-1720136241).cljs$core$IFn$_invoke$arity$1(lp_pos)))," (",new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(lp_tokens).toFormat((18))," LP Tokens)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-tminted"].join('')], null),"LP tokens minted: ",new cljs.core.Keyword(null,"minted","minted",-582929155).cljs$core$IFn$_invoke$arity$1(lp_tokens).toFormat((18))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-tburned"].join('')], null),"LP tokens burned: ",new cljs.core.Keyword(null,"burned","burned",-477072138).cljs$core$IFn$_invoke$arity$1(lp_tokens).toFormat((18))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-tcurrent"].join('')], null),"LP tokens (on balance): ",new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_tokens).toFormat((18))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-m"].join('')], null),"Mints: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp))], null),((((0) < cljs.core.count(new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-b"].join('')], null),"Burns: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))], null):null),((((0) < cljs.core.count(new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(lp))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-txs-out"].join('')], null),"LP transfers out: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,new cljs.core.Keyword(null,"txhash","txhash",149174990)),new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(lp))], null):null),(((!(cljs.core.empty_QMARK_(unknown_dests))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-unknown-dests"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null),"Unidentified LP token recipients: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_address_link,unknown_dests)], null):null),((((0) < cljs.core.count(claim_txs)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-cr"].join('')], null),"Claimed Rewards: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,new cljs.core.Keyword(null,"claimed","claimed",-1569508946).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reward-breakdown","reward-breakdown",-697241610).cljs$core$IFn$_invoke$arity$1(lp_pos))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,claim_txs)], null):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" 0.00 ",cljs.core.first(unclaimed)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-ur"].join('')], null),"Unclaimed rewards: ",unclaimed], null):null),(((!(cljs.core.empty_QMARK_(open_staking))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-open-stakes"].join('')], null),"LPs tokens currently staked at: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_address_link,open_staking)], null):null),(((!(cljs.core.empty_QMARK_(closed_staking))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-closed-stakes"].join('')], null),"LPs tokens previously staked at: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_address_link,closed_staking)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[pair_name,"-p"].join('')], null),"Prices: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_qty,cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(lp_pos)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,"usd");
}),cljs.core.vals(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(lp_pos)))))], null),((lpdashboard.core.debug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFriskView,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp","lp",1154143014),lp,new cljs.core.Keyword(null,"lp-pos","lp-pos",-118332569),lp_pos], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.separator_str], null)], null);
});
lpdashboard.core.web3_connect = (function lpdashboard$core$web3_connect(){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78531){
var state_val_78532 = (state_78531[(1)]);
if((state_val_78532 === (7))){
var inst_78513 = (state_78531[(7)]);
var inst_78520 = (function(){throw inst_78513})();
var state_78531__$1 = state_78531;
var statearr_78533_80686 = state_78531__$1;
(statearr_78533_80686[(2)] = inst_78520);

(statearr_78533_80686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (1))){
var state_78531__$1 = state_78531;
var statearr_78534_80687 = state_78531__$1;
(statearr_78534_80687[(2)] = null);

(statearr_78534_80687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (4))){
var inst_78502 = (state_78531[(2)]);
var inst_78503 = console.log("Could not enable web3 in browser",inst_78502);
var state_78531__$1 = state_78531;
var statearr_78535_80688 = state_78531__$1;
(statearr_78535_80688[(2)] = inst_78503);

(statearr_78535_80688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (6))){
var inst_78513 = (state_78531[(7)]);
var inst_78513__$1 = (state_78531[(2)]);
var inst_78514 = (inst_78513__$1 instanceof cljs.core.ExceptionInfo);
var inst_78515 = cljs.core.ex_data(inst_78513__$1);
var inst_78516 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78515);
var inst_78517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78516,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78518 = ((inst_78514) && (inst_78517));
var state_78531__$1 = (function (){var statearr_78536 = state_78531;
(statearr_78536[(7)] = inst_78513__$1);

return statearr_78536;
})();
if(cljs.core.truth_(inst_78518)){
var statearr_78537_80689 = state_78531__$1;
(statearr_78537_80689[(1)] = (7));

} else {
var statearr_78538_80690 = state_78531__$1;
(statearr_78538_80690[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (3))){
var inst_78529 = (state_78531[(2)]);
var state_78531__$1 = state_78531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78531__$1,inst_78529);
} else {
if((state_val_78532 === (2))){
var _ = (function (){var statearr_78542 = state_78531;
(statearr_78542[(4)] = cljs.core.cons((5),(state_78531[(4)])));

return statearr_78542;
})();
var inst_78509 = window.ethereum;
var inst_78510 = inst_78509.enable();
var inst_78511 = cljs.core.async.interop.p__GT_c(inst_78510);
var state_78531__$1 = state_78531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78531__$1,(6),inst_78511);
} else {
if((state_val_78532 === (9))){
var inst_78523 = (state_78531[(2)]);
var inst_78524 = cljs.core.first(inst_78523);
var inst_78525 = console.log("connected-account",inst_78524);
var inst_78526 = lpdashboard.core.render_account(inst_78524,true);
var _ = (function (){var statearr_78544 = state_78531;
(statearr_78544[(4)] = cljs.core.rest((state_78531[(4)])));

return statearr_78544;
})();
var state_78531__$1 = (function (){var statearr_78545 = state_78531;
(statearr_78545[(8)] = inst_78525);

return statearr_78545;
})();
var statearr_78546_80691 = state_78531__$1;
(statearr_78546_80691[(2)] = inst_78526);

(statearr_78546_80691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (5))){
var _ = (function (){var statearr_78547 = state_78531;
(statearr_78547[(4)] = cljs.core.rest((state_78531[(4)])));

return statearr_78547;
})();
var state_78531__$1 = state_78531;
var ex78540 = (state_78531__$1[(2)]);
var statearr_78548_80692 = state_78531__$1;
(statearr_78548_80692[(5)] = ex78540);


if((ex78540 instanceof Error)){
var statearr_78549_80693 = state_78531__$1;
(statearr_78549_80693[(1)] = (4));

(statearr_78549_80693[(5)] = null);

} else {
throw ex78540;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78532 === (8))){
var inst_78513 = (state_78531[(7)]);
var state_78531__$1 = state_78531;
var statearr_78550_80694 = state_78531__$1;
(statearr_78550_80694[(2)] = inst_78513);

(statearr_78550_80694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$web3_connect_$_state_machine__38750__auto__ = null;
var lpdashboard$core$web3_connect_$_state_machine__38750__auto____0 = (function (){
var statearr_78554 = [null,null,null,null,null,null,null,null,null];
(statearr_78554[(0)] = lpdashboard$core$web3_connect_$_state_machine__38750__auto__);

(statearr_78554[(1)] = (1));

return statearr_78554;
});
var lpdashboard$core$web3_connect_$_state_machine__38750__auto____1 = (function (state_78531){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78531);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78555){var ex__38753__auto__ = e78555;
var statearr_78556_80695 = state_78531;
(statearr_78556_80695[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78531[(4)]))){
var statearr_78557_80696 = state_78531;
(statearr_78557_80696[(1)] = cljs.core.first((state_78531[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80697 = state_78531;
state_78531 = G__80697;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__38750__auto__ = function(state_78531){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__38750__auto____1.call(this,state_78531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__38750__auto____0;
lpdashboard$core$web3_connect_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__38750__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78558 = f__38842__auto__();
(statearr_78558[(6)] = c__38841__auto__);

return statearr_78558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.connecting_component = (function lpdashboard$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"class","class",-2030961996),"connect",new cljs.core.Keyword(null,"on-click","on-click",1632826543),lpdashboard.core.web3_connect], null)], null)], null);
});
lpdashboard.core.fetch_external_account = (function lpdashboard$core$fetch_external_account(account){
lpdashboard.utils.set_query_string_BANG_(account);

return lpdashboard.core.render_account(account,false);
});
lpdashboard.core.submit_component = (function lpdashboard$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lpdashboard.core.fetch_external_account(cljs.core.deref(value));
})], null)], null);
});
lpdashboard.core.atom_input = (function lpdashboard$core$atom_input(value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),"44",new cljs.core.Keyword(null,"place-holder","place-holder",-718244967),"Enter address",new cljs.core.Keyword(null,"default-value","default-value",232220170),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,""))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1)):null),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.key,"Enter")){
return lpdashboard.core.fetch_external_account(cljs.core.deref(value));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (t){
return cljs.core.reset_BANG_(value,t.target.value);
})], null)], null),lpdashboard.core.submit_component(value)], null);
});
lpdashboard.core.shared_state = (function lpdashboard$core$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("foo");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The value is now: ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.atom_input,val], null)], null)], null);
});
});
var input_80698 = lpdashboard.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
lpdashboard.core.app_main = (function lpdashboard$core$app_main(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"connect"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))?(cljs.core.truth_(lpdashboard.core.provider)?lpdashboard.core.connecting_component():null):new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"REVERT.FINANCE",(((lpdashboard.core.provider == null))?" Requires Web3":null)], null),((lpdashboard.core.debug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFriskShell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"account-state","account-state",880001992),cljs.core.deref(lpdashboard.core.app_state)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((lpdashboard.core.provider == null))))?input_80698:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"45%",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"ACCOUNT"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL from LP positions: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,new cljs.core.Keyword(null,"pool-pnl-all","pool-pnl-all",1661313006).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",new cljs.core.Keyword(null,"gas-costs-all","gas-costs-all",1116723690).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))," USD"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards from staking: ",new cljs.core.Keyword(null,"rewards-all","rewards-all",-319230276).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))," USD"], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl-open","total-pnl-open",-1894188983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"45%",new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"FROM OPEN LP POSITIONS"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,new cljs.core.Keyword(null,"total-pnl-open","total-pnl-open",-1894188983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL from pools: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.signed_qty,new cljs.core.Keyword(null,"pool-pnl-open","pool-pnl-open",-593840453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",new cljs.core.Keyword(null,"gas-costs-open","gas-costs-open",89451604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))," USD"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards from staking: ",new cljs.core.Keyword(null,"rewards-open","rewards-open",-661438673).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))," USD"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null),(((!((new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"OPEN LP POSITIONS"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78565_SHARP_){
return lpdashboard.core.render_lp_pos(p1__78565_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__78565_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78566_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__78566_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"CLOSED LP POSITIONS"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78567_SHARP_){
return lpdashboard.core.render_lp_pos(p1__78567_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__78567_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78568_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__78568_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.play_data = (function lpdashboard$core$play_data(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80699 = arguments.length;
var i__4737__auto___80700 = (0);
while(true){
if((i__4737__auto___80700 < len__4736__auto___80699)){
args__4742__auto__.push((arguments[i__4737__auto___80700]));

var G__80701 = (i__4737__auto___80700 + (1));
i__4737__auto___80700 = G__80701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return lpdashboard.core.play_data.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(lpdashboard.core.play_data.cljs$core$IFn$_invoke$arity$variadic = (function (names){
var iter__4529__auto__ = (function lpdashboard$core$iter__78576(s__78577){
return (new cljs.core.LazySeq(null,(function (){
var s__78577__$1 = s__78577;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__78577__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__78577__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function lpdashboard$core$iter__78576_$_iter__78578(s__78579){
return (new cljs.core.LazySeq(null,((function (s__78577__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__78579__$1 = s__78579;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__78579__$1);
if(temp__5735__auto____$1){
var s__78579__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78579__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__78579__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__78581 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__78580 = (0);
while(true){
if((i__78580 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__78580);
cljs.core.chunk_append(b__78581,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),i,new cljs.core.Keyword(null,"item","item",249373802),n,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(Math.pow((i * cljs.core.count(n)),0.8) + cljs.core.rand_int(cljs.core.count(n)))], null));

var G__80702 = (i__78580 + (1));
i__78580 = G__80702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78581),lpdashboard$core$iter__78576_$_iter__78578(cljs.core.chunk_rest(s__78579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78581),null);
}
} else {
var i = cljs.core.first(s__78579__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),i,new cljs.core.Keyword(null,"item","item",249373802),n,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(Math.pow((i * cljs.core.count(n)),0.8) + cljs.core.rand_int(cljs.core.count(n)))], null),lpdashboard$core$iter__78576_$_iter__78578(cljs.core.rest(s__78579__$2)));
}
} else {
return null;
}
break;
}
});})(s__78577__$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__78577__$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,lpdashboard$core$iter__78576(cljs.core.rest(s__78577__$1)));
} else {
var G__80703 = cljs.core.rest(s__78577__$1);
s__78577__$1 = G__80703;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(names);
}));

(lpdashboard.core.play_data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lpdashboard.core.play_data.cljs$lang$applyTo = (function (seq78575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq78575));
}));

lpdashboard.core.line_plot = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),lpdashboard.core.play_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["monkey","slipper","broom"], 0))], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"time",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"quantity",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"item",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"line"], null);
lpdashboard.core.start = (function lpdashboard$core$start(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.app_main], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,cljs.core.clj__GT_js(lpdashboard.core.line_plot)], null)], null),document.getElementById("app"));

if((((!(lpdashboard.core.debug))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,"")))){
return lpdashboard.core.render_account(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1)),false);
} else {
return null;
}
});
lpdashboard.core.init = (function lpdashboard$core$init(){
return lpdashboard.core.start();
});
goog.exportSymbol('lpdashboard.core.init', lpdashboard.core.init);
lpdashboard.core.stop = (function lpdashboard$core$stop(){
return console.log("stop");
});
lpdashboard.core._LT_staking_rewards_earned = (function lpdashboard$core$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78622){
var state_val_78623 = (state_78622[(1)]);
if((state_val_78623 === (7))){
var inst_78604 = (state_78622[(7)]);
var inst_78604__$1 = (state_78622[(2)]);
var inst_78605 = (inst_78604__$1 instanceof cljs.core.ExceptionInfo);
var inst_78607 = cljs.core.ex_data(inst_78604__$1);
var inst_78608 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78607);
var inst_78609 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78608,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78610 = ((inst_78605) && (inst_78609));
var state_78622__$1 = (function (){var statearr_78625 = state_78622;
(statearr_78625[(7)] = inst_78604__$1);

return statearr_78625;
})();
if(cljs.core.truth_(inst_78610)){
var statearr_78626_80704 = state_78622__$1;
(statearr_78626_80704[(1)] = (8));

} else {
var statearr_78627_80705 = state_78622__$1;
(statearr_78627_80705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (1))){
var state_78622__$1 = state_78622;
var statearr_78628_80706 = state_78622__$1;
(statearr_78628_80706[(2)] = null);

(statearr_78628_80706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (4))){
var inst_78589 = (state_78622[(2)]);
var inst_78590 = console.log("err <staking-rewards-earned:",staking_address,rewards_address,user_address);
var inst_78591 = (new module$node_modules$bignumber_DOT_js$bignumber((0)));
var state_78622__$1 = (function (){var statearr_78629 = state_78622;
(statearr_78629[(8)] = inst_78590);

(statearr_78629[(9)] = inst_78589);

return statearr_78629;
})();
var statearr_78630_80707 = state_78622__$1;
(statearr_78630_80707[(2)] = inst_78591);

(statearr_78630_80707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (6))){
var inst_78597 = (state_78622[(10)]);
var inst_78600 = (state_78622[(2)]);
var inst_78601 = inst_78597.earned(user_address);
var inst_78602 = cljs.core.async.interop.p__GT_c(inst_78601);
var state_78622__$1 = (function (){var statearr_78631 = state_78622;
(statearr_78631[(11)] = inst_78600);

return statearr_78631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78622__$1,(7),inst_78602);
} else {
if((state_val_78623 === (3))){
var inst_78619 = (state_78622[(2)]);
var state_78622__$1 = state_78622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78622__$1,inst_78619);
} else {
if((state_val_78623 === (2))){
var _ = (function (){var statearr_78633 = state_78622;
(statearr_78633[(4)] = cljs.core.cons((5),(state_78622[(4)])));

return statearr_78633;
})();
var inst_78597 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_78598 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_78622__$1 = (function (){var statearr_78634 = state_78622;
(statearr_78634[(10)] = inst_78597);

return statearr_78634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78622__$1,(6),inst_78598);
} else {
if((state_val_78623 === (9))){
var inst_78604 = (state_78622[(7)]);
var state_78622__$1 = state_78622;
var statearr_78637_80708 = state_78622__$1;
(statearr_78637_80708[(2)] = inst_78604);

(statearr_78637_80708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (5))){
var _ = (function (){var statearr_78639 = state_78622;
(statearr_78639[(4)] = cljs.core.rest((state_78622[(4)])));

return statearr_78639;
})();
var state_78622__$1 = state_78622;
var ex78632 = (state_78622__$1[(2)]);
var statearr_78640_80709 = state_78622__$1;
(statearr_78640_80709[(5)] = ex78632);


if((ex78632 instanceof Error)){
var statearr_78641_80710 = state_78622__$1;
(statearr_78641_80710[(1)] = (4));

(statearr_78641_80710[(5)] = null);

} else {
throw ex78632;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (10))){
var inst_78600 = (state_78622[(11)]);
var inst_78615 = (state_78622[(2)]);
var inst_78616 = lpdashboard.utils.ebn__GT_bn(inst_78615,inst_78600);
var _ = (function (){var statearr_78643 = state_78622;
(statearr_78643[(4)] = cljs.core.rest((state_78622[(4)])));

return statearr_78643;
})();
var state_78622__$1 = state_78622;
var statearr_78644_80711 = state_78622__$1;
(statearr_78644_80711[(2)] = inst_78616);

(statearr_78644_80711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78623 === (8))){
var inst_78604 = (state_78622[(7)]);
var inst_78612 = (function(){throw inst_78604})();
var state_78622__$1 = state_78622;
var statearr_78645_80712 = state_78622__$1;
(statearr_78645_80712[(2)] = inst_78612);

(statearr_78645_80712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____0 = (function (){
var statearr_78646 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78646[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__);

(statearr_78646[(1)] = (1));

return statearr_78646;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____1 = (function (state_78622){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78622);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78647){var ex__38753__auto__ = e78647;
var statearr_78648_80713 = state_78622;
(statearr_78648_80713[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78622[(4)]))){
var statearr_78649_80714 = state_78622;
(statearr_78649_80714[(1)] = cljs.core.first((state_78622[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80715 = state_78622;
state_78622 = G__80715;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__ = function(state_78622){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____1.call(this,state_78622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78650 = f__38842__auto__();
(statearr_78650[(6)] = c__38841__auto__);

return statearr_78650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78797){
var state_val_78799 = (state_78797[(1)]);
if((state_val_78799 === (7))){
var inst_78656 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78803 = state_78797;
(statearr_78803[(7)] = inst_78656);

return statearr_78803;
})();
var statearr_78804_80716 = state_78797__$1;
(statearr_78804_80716[(2)] = null);

(statearr_78804_80716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (20))){
var _ = (function (){var statearr_78805 = state_78797;
(statearr_78805[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78805;
})();
var state_78797__$1 = state_78797;
var ex78800 = (state_78797__$1[(2)]);
var statearr_78806_80717 = state_78797__$1;
(statearr_78806_80717[(5)] = ex78800);


if((ex78800 instanceof Error)){
var statearr_78807_80718 = state_78797__$1;
(statearr_78807_80718[(1)] = (19));

(statearr_78807_80718[(5)] = null);

} else {
throw ex78800;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (27))){
var inst_78693 = (state_78797[(8)]);
var inst_78701 = (function(){throw inst_78693})();
var state_78797__$1 = state_78797;
var statearr_78808_80719 = state_78797__$1;
(statearr_78808_80719[(2)] = inst_78701);

(statearr_78808_80719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (1))){
var state_78797__$1 = state_78797;
var statearr_78811_80720 = state_78797__$1;
(statearr_78811_80720[(2)] = null);

(statearr_78811_80720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (24))){
var inst_78681 = (state_78797[(2)]);
var _ = (function (){var statearr_78813 = state_78797;
(statearr_78813[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78813;
})();
var state_78797__$1 = state_78797;
var statearr_78815_80721 = state_78797__$1;
(statearr_78815_80721[(2)] = inst_78681);

(statearr_78815_80721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (39))){
var inst_78748 = (state_78797[(2)]);
var _ = (function (){var statearr_78816 = state_78797;
(statearr_78816[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78816;
})();
var state_78797__$1 = state_78797;
var statearr_78817_80722 = state_78797__$1;
(statearr_78817_80722[(2)] = inst_78748);

(statearr_78817_80722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (46))){
var inst_78782 = (state_78797[(9)]);
var inst_78782__$1 = (state_78797[(2)]);
var inst_78783 = (inst_78782__$1 instanceof cljs.core.ExceptionInfo);
var inst_78784 = cljs.core.ex_data(inst_78782__$1);
var inst_78785 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78784);
var inst_78786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78785,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78787 = ((inst_78783) && (inst_78786));
var state_78797__$1 = (function (){var statearr_78818 = state_78797;
(statearr_78818[(9)] = inst_78782__$1);

return statearr_78818;
})();
if(cljs.core.truth_(inst_78787)){
var statearr_78819_80723 = state_78797__$1;
(statearr_78819_80723[(1)] = (47));

} else {
var statearr_78820_80724 = state_78797__$1;
(statearr_78820_80724[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (4))){
var inst_78655 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78822 = state_78797;
(statearr_78822[(10)] = inst_78655);

return statearr_78822;
})();
var statearr_78824_80725 = state_78797__$1;
(statearr_78824_80725[(2)] = null);

(statearr_78824_80725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (15))){
var inst_78707 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
var statearr_78826_80726 = state_78797__$1;
(statearr_78826_80726[(2)] = inst_78707);

(statearr_78826_80726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (48))){
var inst_78782 = (state_78797[(9)]);
var state_78797__$1 = state_78797;
var statearr_78827_80727 = state_78797__$1;
(statearr_78827_80727[(2)] = inst_78782);

(statearr_78827_80727[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (21))){
var inst_78669 = (state_78797[(11)]);
var inst_78669__$1 = (state_78797[(2)]);
var inst_78671 = (inst_78669__$1 instanceof cljs.core.ExceptionInfo);
var inst_78672 = cljs.core.ex_data(inst_78669__$1);
var inst_78673 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78672);
var inst_78674 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78673,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78675 = ((inst_78671) && (inst_78674));
var state_78797__$1 = (function (){var statearr_78828 = state_78797;
(statearr_78828[(11)] = inst_78669__$1);

return statearr_78828;
})();
if(cljs.core.truth_(inst_78675)){
var statearr_78829_80728 = state_78797__$1;
(statearr_78829_80728[(1)] = (22));

} else {
var statearr_78832_80729 = state_78797__$1;
(statearr_78832_80729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (31))){
var inst_78716 = (state_78797[(12)]);
var inst_78716__$1 = (state_78797[(2)]);
var inst_78717 = (inst_78716__$1 instanceof cljs.core.ExceptionInfo);
var inst_78718 = cljs.core.ex_data(inst_78716__$1);
var inst_78719 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78718);
var inst_78720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78719,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78721 = ((inst_78717) && (inst_78720));
var state_78797__$1 = (function (){var statearr_78835 = state_78797;
(statearr_78835[(12)] = inst_78716__$1);

return statearr_78835;
})();
if(cljs.core.truth_(inst_78721)){
var statearr_78836_80730 = state_78797__$1;
(statearr_78836_80730[(1)] = (32));

} else {
var statearr_78837_80731 = state_78797__$1;
(statearr_78837_80731[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (32))){
var inst_78716 = (state_78797[(12)]);
var inst_78723 = (function(){throw inst_78716})();
var state_78797__$1 = state_78797;
var statearr_78838_80732 = state_78797__$1;
(statearr_78838_80732[(2)] = inst_78723);

(statearr_78838_80732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (40))){
var _ = (function (){var statearr_78839 = state_78797;
(statearr_78839[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78839;
})();
var state_78797__$1 = state_78797;
var ex78834 = (state_78797__$1[(2)]);
var statearr_78840_80733 = state_78797__$1;
(statearr_78840_80733[(5)] = ex78834);


if((ex78834 instanceof Error)){
var statearr_78841_80734 = state_78797__$1;
(statearr_78841_80734[(1)] = (7));

(statearr_78841_80734[(5)] = null);

} else {
throw ex78834;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (33))){
var inst_78716 = (state_78797[(12)]);
var state_78797__$1 = state_78797;
var statearr_78842_80735 = state_78797__$1;
(statearr_78842_80735[(2)] = inst_78716);

(statearr_78842_80735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (13))){
var inst_78658 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78845 = state_78797;
(statearr_78845[(13)] = inst_78658);

return statearr_78845;
})();
var statearr_78847_80736 = state_78797__$1;
(statearr_78847_80736[(2)] = null);

(statearr_78847_80736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (22))){
var inst_78669 = (state_78797[(11)]);
var inst_78678 = (function(){throw inst_78669})();
var state_78797__$1 = state_78797;
var statearr_78849_80737 = state_78797__$1;
(statearr_78849_80737[(2)] = inst_78678);

(statearr_78849_80737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (36))){
var inst_78738 = (state_78797[(14)]);
var inst_78738__$1 = (state_78797[(2)]);
var inst_78739 = (inst_78738__$1 instanceof cljs.core.ExceptionInfo);
var inst_78740 = cljs.core.ex_data(inst_78738__$1);
var inst_78741 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78740);
var inst_78742 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78741,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78743 = ((inst_78739) && (inst_78742));
var state_78797__$1 = (function (){var statearr_78850 = state_78797;
(statearr_78850[(14)] = inst_78738__$1);

return statearr_78850;
})();
if(cljs.core.truth_(inst_78743)){
var statearr_78851_80738 = state_78797__$1;
(statearr_78851_80738[(1)] = (37));

} else {
var statearr_78852_80739 = state_78797__$1;
(statearr_78852_80739[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (41))){
var inst_78760 = (state_78797[(15)]);
var inst_78760__$1 = (state_78797[(2)]);
var inst_78761 = (inst_78760__$1 instanceof cljs.core.ExceptionInfo);
var inst_78762 = cljs.core.ex_data(inst_78760__$1);
var inst_78763 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78762);
var inst_78764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78763,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78765 = ((inst_78761) && (inst_78764));
var state_78797__$1 = (function (){var statearr_78856 = state_78797;
(statearr_78856[(15)] = inst_78760__$1);

return statearr_78856;
})();
if(cljs.core.truth_(inst_78765)){
var statearr_78857_80740 = state_78797__$1;
(statearr_78857_80740[(1)] = (42));

} else {
var statearr_78858_80741 = state_78797__$1;
(statearr_78858_80741[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (43))){
var inst_78760 = (state_78797[(15)]);
var state_78797__$1 = state_78797;
var statearr_78859_80742 = state_78797__$1;
(statearr_78859_80742[(2)] = inst_78760);

(statearr_78859_80742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (29))){
var inst_78704 = (state_78797[(2)]);
var _ = (function (){var statearr_78861 = state_78797;
(statearr_78861[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78861;
})();
var state_78797__$1 = state_78797;
var statearr_78862_80743 = state_78797__$1;
(statearr_78862_80743[(2)] = inst_78704);

(statearr_78862_80743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (44))){
var inst_78770 = (state_78797[(2)]);
var _ = (function (){var statearr_78863 = state_78797;
(statearr_78863[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78863;
})();
var state_78797__$1 = state_78797;
var statearr_78864_80744 = state_78797__$1;
(statearr_78864_80744[(2)] = inst_78770);

(statearr_78864_80744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (6))){
var inst_78773 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
var statearr_78866_80745 = state_78797__$1;
(statearr_78866_80745[(2)] = inst_78773);

(statearr_78866_80745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (28))){
var inst_78693 = (state_78797[(8)]);
var state_78797__$1 = state_78797;
var statearr_78869_80746 = state_78797__$1;
(statearr_78869_80746[(2)] = inst_78693);

(statearr_78869_80746[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (25))){
var _ = (function (){var statearr_78871 = state_78797;
(statearr_78871[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78871;
})();
var state_78797__$1 = state_78797;
var ex78865 = (state_78797__$1[(2)]);
var statearr_78872_80747 = state_78797__$1;
(statearr_78872_80747[(5)] = ex78865);


if((ex78865 instanceof Error)){
var statearr_78873_80748 = state_78797__$1;
(statearr_78873_80748[(1)] = (16));

(statearr_78873_80748[(5)] = null);

} else {
throw ex78865;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (34))){
var inst_78726 = (state_78797[(2)]);
var _ = (function (){var statearr_78875 = state_78797;
(statearr_78875[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78875;
})();
var state_78797__$1 = state_78797;
var statearr_78876_80749 = state_78797__$1;
(statearr_78876_80749[(2)] = inst_78726);

(statearr_78876_80749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (17))){
var _ = (function (){var statearr_78877 = state_78797;
(statearr_78877[(4)] = cljs.core.cons((20),(state_78797[(4)])));

return statearr_78877;
})();
var inst_78666 = staking_contract.cream();
var inst_78667 = cljs.core.async.interop.p__GT_c(inst_78666);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(21),inst_78667);
} else {
if((state_val_78799 === (3))){
var inst_78795 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78797__$1,inst_78795);
} else {
if((state_val_78799 === (12))){
var inst_78729 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
var statearr_78880_80750 = state_78797__$1;
(statearr_78880_80750[(2)] = inst_78729);

(statearr_78880_80750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (2))){
var _ = (function (){var statearr_78882 = state_78797;
(statearr_78882[(4)] = cljs.core.cons((45),(state_78797[(4)])));

return statearr_78882;
})();
var inst_78779 = staking_contract.rewardsToken();
var inst_78780 = cljs.core.async.interop.p__GT_c(inst_78779);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(46),inst_78780);
} else {
if((state_val_78799 === (23))){
var inst_78669 = (state_78797[(11)]);
var state_78797__$1 = state_78797;
var statearr_78885_80751 = state_78797__$1;
(statearr_78885_80751[(2)] = inst_78669);

(statearr_78885_80751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (47))){
var inst_78782 = (state_78797[(9)]);
var inst_78789 = (function(){throw inst_78782})();
var state_78797__$1 = state_78797;
var statearr_78886_80752 = state_78797__$1;
(statearr_78886_80752[(2)] = inst_78789);

(statearr_78886_80752[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (35))){
var _ = (function (){var statearr_78887 = state_78797;
(statearr_78887[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78887;
})();
var state_78797__$1 = state_78797;
var ex78884 = (state_78797__$1[(2)]);
var statearr_78888_80753 = state_78797__$1;
(statearr_78888_80753[(5)] = ex78884);


if((ex78884 instanceof Error)){
var statearr_78890_80754 = state_78797__$1;
(statearr_78890_80754[(1)] = (10));

(statearr_78890_80754[(5)] = null);

} else {
throw ex78884;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (19))){
var inst_78660 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78892 = state_78797;
(statearr_78892[(16)] = inst_78660);

return statearr_78892;
})();
var statearr_78894_80755 = state_78797__$1;
(statearr_78894_80755[(2)] = null);

(statearr_78894_80755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (11))){
var _ = (function (){var statearr_78895 = state_78797;
(statearr_78895[(4)] = cljs.core.cons((30),(state_78797[(4)])));

return statearr_78895;
})();
var inst_78713 = staking_contract.sashimi();
var inst_78714 = cljs.core.async.interop.p__GT_c(inst_78713);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(31),inst_78714);
} else {
if((state_val_78799 === (9))){
var inst_78751 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
var statearr_78897_80756 = state_78797__$1;
(statearr_78897_80756[(2)] = inst_78751);

(statearr_78897_80756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (5))){
var _ = (function (){var statearr_78899 = state_78797;
(statearr_78899[(4)] = cljs.core.cons((40),(state_78797[(4)])));

return statearr_78899;
})();
var inst_78757 = staking_contract.sushi();
var inst_78758 = cljs.core.async.interop.p__GT_c(inst_78757);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(41),inst_78758);
} else {
if((state_val_78799 === (14))){
var _ = (function (){var statearr_78900 = state_78797;
(statearr_78900[(4)] = cljs.core.cons((25),(state_78797[(4)])));

return statearr_78900;
})();
var inst_78690 = staking_contract.token();
var inst_78691 = cljs.core.async.interop.p__GT_c(inst_78690);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(26),inst_78691);
} else {
if((state_val_78799 === (45))){
var _ = (function (){var statearr_78903 = state_78797;
(statearr_78903[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78903;
})();
var state_78797__$1 = state_78797;
var ex78898 = (state_78797__$1[(2)]);
var statearr_78905_80757 = state_78797__$1;
(statearr_78905_80757[(5)] = ex78898);


if((ex78898 instanceof Error)){
var statearr_78906_80758 = state_78797__$1;
(statearr_78906_80758[(1)] = (4));

(statearr_78906_80758[(5)] = null);

} else {
throw ex78898;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (26))){
var inst_78693 = (state_78797[(8)]);
var inst_78693__$1 = (state_78797[(2)]);
var inst_78695 = (inst_78693__$1 instanceof cljs.core.ExceptionInfo);
var inst_78696 = cljs.core.ex_data(inst_78693__$1);
var inst_78697 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78696);
var inst_78698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78697,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78699 = ((inst_78695) && (inst_78698));
var state_78797__$1 = (function (){var statearr_78907 = state_78797;
(statearr_78907[(8)] = inst_78693__$1);

return statearr_78907;
})();
if(cljs.core.truth_(inst_78699)){
var statearr_78908_80759 = state_78797__$1;
(statearr_78908_80759[(1)] = (27));

} else {
var statearr_78909_80760 = state_78797__$1;
(statearr_78909_80760[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (16))){
var inst_78659 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78911 = state_78797;
(statearr_78911[(17)] = inst_78659);

return statearr_78911;
})();
var statearr_78912_80761 = state_78797__$1;
(statearr_78912_80761[(2)] = null);

(statearr_78912_80761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (38))){
var inst_78738 = (state_78797[(14)]);
var state_78797__$1 = state_78797;
var statearr_78913_80762 = state_78797__$1;
(statearr_78913_80762[(2)] = inst_78738);

(statearr_78913_80762[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (30))){
var _ = (function (){var statearr_78914 = state_78797;
(statearr_78914[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78914;
})();
var state_78797__$1 = state_78797;
var ex78910 = (state_78797__$1[(2)]);
var statearr_78915_80763 = state_78797__$1;
(statearr_78915_80763[(5)] = ex78910);


if((ex78910 instanceof Error)){
var statearr_78916_80764 = state_78797__$1;
(statearr_78916_80764[(1)] = (13));

(statearr_78916_80764[(5)] = null);

} else {
throw ex78910;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (10))){
var inst_78657 = (state_78797[(2)]);
var state_78797__$1 = (function (){var statearr_78917 = state_78797;
(statearr_78917[(18)] = inst_78657);

return statearr_78917;
})();
var statearr_78918_80765 = state_78797__$1;
(statearr_78918_80765[(2)] = null);

(statearr_78918_80765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (18))){
var inst_78684 = (state_78797[(2)]);
var state_78797__$1 = state_78797;
var statearr_78919_80766 = state_78797__$1;
(statearr_78919_80766[(2)] = inst_78684);

(statearr_78919_80766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (42))){
var inst_78760 = (state_78797[(15)]);
var inst_78767 = (function(){throw inst_78760})();
var state_78797__$1 = state_78797;
var statearr_78920_80767 = state_78797__$1;
(statearr_78920_80767[(2)] = inst_78767);

(statearr_78920_80767[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (37))){
var inst_78738 = (state_78797[(14)]);
var inst_78745 = (function(){throw inst_78738})();
var state_78797__$1 = state_78797;
var statearr_78921_80768 = state_78797__$1;
(statearr_78921_80768[(2)] = inst_78745);

(statearr_78921_80768[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78799 === (8))){
var _ = (function (){var statearr_78922 = state_78797;
(statearr_78922[(4)] = cljs.core.cons((35),(state_78797[(4)])));

return statearr_78922;
})();
var inst_78735 = staking_contract.yam();
var inst_78736 = cljs.core.async.interop.p__GT_c(inst_78735);
var state_78797__$1 = state_78797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78797__$1,(36),inst_78736);
} else {
if((state_val_78799 === (49))){
var inst_78792 = (state_78797[(2)]);
var _ = (function (){var statearr_78923 = state_78797;
(statearr_78923[(4)] = cljs.core.rest((state_78797[(4)])));

return statearr_78923;
})();
var state_78797__$1 = state_78797;
var statearr_78924_80769 = state_78797__$1;
(statearr_78924_80769[(2)] = inst_78792);

(statearr_78924_80769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____0 = (function (){
var statearr_78925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78925[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__);

(statearr_78925[(1)] = (1));

return statearr_78925;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____1 = (function (state_78797){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78797);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78926){var ex__38753__auto__ = e78926;
var statearr_78927_80770 = state_78797;
(statearr_78927_80770[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78797[(4)]))){
var statearr_78928_80771 = state_78797;
(statearr_78928_80771[(1)] = cljs.core.first((state_78797[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80772 = state_78797;
state_78797 = G__80772;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__ = function(state_78797){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____1.call(this,state_78797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78931 = f__38842__auto__();
(statearr_78931[(6)] = c__38841__auto__);

return statearr_78931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78971){
var state_val_78972 = (state_78971[(1)]);
if((state_val_78972 === (7))){
var inst_78956 = (state_78971[(7)]);
var inst_78956__$1 = (state_78971[(2)]);
var inst_78957 = (inst_78956__$1 instanceof cljs.core.ExceptionInfo);
var inst_78958 = cljs.core.ex_data(inst_78956__$1);
var inst_78959 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78958);
var inst_78960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78959,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78961 = ((inst_78957) && (inst_78960));
var state_78971__$1 = (function (){var statearr_78975 = state_78971;
(statearr_78975[(7)] = inst_78956__$1);

return statearr_78975;
})();
if(cljs.core.truth_(inst_78961)){
var statearr_78976_80773 = state_78971__$1;
(statearr_78976_80773[(1)] = (8));

} else {
var statearr_78977_80774 = state_78971__$1;
(statearr_78977_80774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78972 === (1))){
var inst_78934 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_78935 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_78971__$1 = (function (){var statearr_78978 = state_78971;
(statearr_78978[(8)] = inst_78934);

return statearr_78978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78971__$1,(2),inst_78935);
} else {
if((state_val_78972 === (4))){
var inst_78941 = (state_78971[(9)]);
var inst_78948 = (function(){throw inst_78941})();
var state_78971__$1 = state_78971;
var statearr_78979_80775 = state_78971__$1;
(statearr_78979_80775[(2)] = inst_78948);

(statearr_78979_80775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78972 === (6))){
var inst_78937 = (state_78971[(10)]);
var inst_78934 = (state_78971[(8)]);
var inst_78951 = (state_78971[(2)]);
var inst_78952 = lpdashboard.utils.ebn__GT_bn(inst_78951,inst_78937);
var inst_78953 = inst_78934.totalSupply();
var inst_78954 = cljs.core.async.interop.p__GT_c(inst_78953);
var state_78971__$1 = (function (){var statearr_78982 = state_78971;
(statearr_78982[(11)] = inst_78952);

return statearr_78982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78971__$1,(7),inst_78954);
} else {
if((state_val_78972 === (3))){
var inst_78941 = (state_78971[(9)]);
var inst_78941__$1 = (state_78971[(2)]);
var inst_78942 = (inst_78941__$1 instanceof cljs.core.ExceptionInfo);
var inst_78943 = cljs.core.ex_data(inst_78941__$1);
var inst_78944 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78943);
var inst_78945 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78944,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78946 = ((inst_78942) && (inst_78945));
var state_78971__$1 = (function (){var statearr_78983 = state_78971;
(statearr_78983[(9)] = inst_78941__$1);

return statearr_78983;
})();
if(cljs.core.truth_(inst_78946)){
var statearr_78984_80776 = state_78971__$1;
(statearr_78984_80776[(1)] = (4));

} else {
var statearr_78985_80777 = state_78971__$1;
(statearr_78985_80777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78972 === (2))){
var inst_78934 = (state_78971[(8)]);
var inst_78937 = (state_78971[(2)]);
var inst_78938 = inst_78934.balanceOf(user_address);
var inst_78939 = cljs.core.async.interop.p__GT_c(inst_78938);
var state_78971__$1 = (function (){var statearr_78986 = state_78971;
(statearr_78986[(10)] = inst_78937);

return statearr_78986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78971__$1,(3),inst_78939);
} else {
if((state_val_78972 === (9))){
var inst_78956 = (state_78971[(7)]);
var state_78971__$1 = state_78971;
var statearr_78987_80778 = state_78971__$1;
(statearr_78987_80778[(2)] = inst_78956);

(statearr_78987_80778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78972 === (5))){
var inst_78941 = (state_78971[(9)]);
var state_78971__$1 = state_78971;
var statearr_78988_80779 = state_78971__$1;
(statearr_78988_80779[(2)] = inst_78941);

(statearr_78988_80779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78972 === (10))){
var inst_78937 = (state_78971[(10)]);
var inst_78952 = (state_78971[(11)]);
var inst_78966 = (state_78971[(2)]);
var inst_78967 = lpdashboard.utils.ebn__GT_bn(inst_78966,inst_78937);
var inst_78968 = bignumber.core._SLASH_(inst_78952,inst_78967);
var state_78971__$1 = state_78971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78971__$1,inst_78968);
} else {
if((state_val_78972 === (8))){
var inst_78956 = (state_78971[(7)]);
var inst_78963 = (function(){throw inst_78956})();
var state_78971__$1 = state_78971;
var statearr_78990_80780 = state_78971__$1;
(statearr_78990_80780[(2)] = inst_78963);

(statearr_78990_80780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____0 = (function (){
var statearr_78991 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78991[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__);

(statearr_78991[(1)] = (1));

return statearr_78991;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____1 = (function (state_78971){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78971);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78995){var ex__38753__auto__ = e78995;
var statearr_78996_80781 = state_78971;
(statearr_78996_80781[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78971[(4)]))){
var statearr_78997_80782 = state_78971;
(statearr_78997_80782[(1)] = cljs.core.first((state_78971[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80783 = state_78971;
state_78971 = G__80783;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__ = function(state_78971){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____1.call(this,state_78971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78998 = f__38842__auto__();
(statearr_78998[(6)] = c__38841__auto__);

return statearr_78998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_sr_staked_lps = (function lpdashboard$core$_LT_sr_staked_lps(staking_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79020){
var state_val_79021 = (state_79020[(1)]);
if((state_val_79021 === (1))){
var inst_78999 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_79000 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_79020__$1 = (function (){var statearr_79024 = state_79020;
(statearr_79024[(7)] = inst_78999);

return statearr_79024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79020__$1,(2),inst_79000);
} else {
if((state_val_79021 === (2))){
var inst_78999 = (state_79020[(7)]);
var inst_79002 = (state_79020[(2)]);
var inst_79003 = inst_78999.balanceOf(user_address);
var inst_79004 = cljs.core.async.interop.p__GT_c(inst_79003);
var state_79020__$1 = (function (){var statearr_79025 = state_79020;
(statearr_79025[(8)] = inst_79002);

return statearr_79025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79020__$1,(3),inst_79004);
} else {
if((state_val_79021 === (3))){
var inst_79006 = (state_79020[(9)]);
var inst_79006__$1 = (state_79020[(2)]);
var inst_79007 = (inst_79006__$1 instanceof cljs.core.ExceptionInfo);
var inst_79008 = cljs.core.ex_data(inst_79006__$1);
var inst_79009 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79008);
var inst_79010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79009,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79011 = ((inst_79007) && (inst_79010));
var state_79020__$1 = (function (){var statearr_79027 = state_79020;
(statearr_79027[(9)] = inst_79006__$1);

return statearr_79027;
})();
if(cljs.core.truth_(inst_79011)){
var statearr_79028_80784 = state_79020__$1;
(statearr_79028_80784[(1)] = (4));

} else {
var statearr_79029_80785 = state_79020__$1;
(statearr_79029_80785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79021 === (4))){
var inst_79006 = (state_79020[(9)]);
var inst_79013 = (function(){throw inst_79006})();
var state_79020__$1 = state_79020;
var statearr_79031_80786 = state_79020__$1;
(statearr_79031_80786[(2)] = inst_79013);

(statearr_79031_80786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79021 === (5))){
var inst_79006 = (state_79020[(9)]);
var state_79020__$1 = state_79020;
var statearr_79032_80787 = state_79020__$1;
(statearr_79032_80787[(2)] = inst_79006);

(statearr_79032_80787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79021 === (6))){
var inst_79002 = (state_79020[(8)]);
var inst_79016 = (state_79020[(2)]);
var inst_79017 = lpdashboard.utils.ebn__GT_bn(inst_79016,inst_79002);
var state_79020__$1 = state_79020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79020__$1,inst_79017);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____0 = (function (){
var statearr_79033 = [null,null,null,null,null,null,null,null,null,null];
(statearr_79033[(0)] = lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__);

(statearr_79033[(1)] = (1));

return statearr_79033;
});
var lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____1 = (function (state_79020){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79020);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79036){var ex__38753__auto__ = e79036;
var statearr_79037_80788 = state_79020;
(statearr_79037_80788[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79020[(4)]))){
var statearr_79039_80789 = state_79020;
(statearr_79039_80789[(1)] = cljs.core.first((state_79020[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80790 = state_79020;
state_79020 = G__80790;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__ = function(state_79020){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____1.call(this,state_79020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_sr_staked_lps_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79041 = f__38842__auto__();
(statearr_79041[(6)] = c__38841__auto__);

return statearr_79041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79076){
var state_val_79077 = (state_79076[(1)]);
if((state_val_79077 === (7))){
var inst_79063 = (state_79076[(7)]);
var inst_79070 = (function(){throw inst_79063})();
var state_79076__$1 = state_79076;
var statearr_79081_80791 = state_79076__$1;
(statearr_79081_80791[(2)] = inst_79070);

(statearr_79081_80791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79077 === (1))){
var inst_79045 = (state_79076[(8)]);
var inst_79045__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_79046 = inst_79045__$1.decimals();
var inst_79047 = cljs.core.async.interop.p__GT_c(inst_79046);
var state_79076__$1 = (function (){var statearr_79082 = state_79076;
(statearr_79082[(8)] = inst_79045__$1);

return statearr_79082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79076__$1,(2),inst_79047);
} else {
if((state_val_79077 === (4))){
var inst_79049 = (state_79076[(9)]);
var state_79076__$1 = state_79076;
var statearr_79085_80792 = state_79076__$1;
(statearr_79085_80792[(2)] = inst_79049);

(statearr_79085_80792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79077 === (6))){
var inst_79063 = (state_79076[(7)]);
var inst_79063__$1 = (state_79076[(2)]);
var inst_79064 = (inst_79063__$1 instanceof cljs.core.ExceptionInfo);
var inst_79065 = cljs.core.ex_data(inst_79063__$1);
var inst_79066 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79065);
var inst_79067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79066,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79068 = ((inst_79064) && (inst_79067));
var state_79076__$1 = (function (){var statearr_79087 = state_79076;
(statearr_79087[(7)] = inst_79063__$1);

return statearr_79087;
})();
if(cljs.core.truth_(inst_79068)){
var statearr_79088_80793 = state_79076__$1;
(statearr_79088_80793[(1)] = (7));

} else {
var statearr_79089_80794 = state_79076__$1;
(statearr_79089_80794[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79077 === (3))){
var inst_79049 = (state_79076[(9)]);
var inst_79056 = (function(){throw inst_79049})();
var state_79076__$1 = state_79076;
var statearr_79091_80795 = state_79076__$1;
(statearr_79091_80795[(2)] = inst_79056);

(statearr_79091_80795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79077 === (2))){
var inst_79049 = (state_79076[(9)]);
var inst_79049__$1 = (state_79076[(2)]);
var inst_79050 = (inst_79049__$1 instanceof cljs.core.ExceptionInfo);
var inst_79051 = cljs.core.ex_data(inst_79049__$1);
var inst_79052 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79051);
var inst_79053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79052,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79054 = ((inst_79050) && (inst_79053));
var state_79076__$1 = (function (){var statearr_79093 = state_79076;
(statearr_79093[(9)] = inst_79049__$1);

return statearr_79093;
})();
if(cljs.core.truth_(inst_79054)){
var statearr_79094_80796 = state_79076__$1;
(statearr_79094_80796[(1)] = (3));

} else {
var statearr_79095_80797 = state_79076__$1;
(statearr_79095_80797[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79077 === (9))){
var inst_79059 = (state_79076[(10)]);
var inst_79073 = (state_79076[(2)]);
var inst_79074 = lpdashboard.utils.ebn__GT_bn(inst_79073,inst_79059);
var state_79076__$1 = state_79076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79076__$1,inst_79074);
} else {
if((state_val_79077 === (5))){
var inst_79045 = (state_79076[(8)]);
var inst_79059 = (state_79076[(2)]);
var inst_79060 = inst_79045.balanceOf(staking_address);
var inst_79061 = cljs.core.async.interop.p__GT_c(inst_79060);
var state_79076__$1 = (function (){var statearr_79097 = state_79076;
(statearr_79097[(10)] = inst_79059);

return statearr_79097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79076__$1,(6),inst_79061);
} else {
if((state_val_79077 === (8))){
var inst_79063 = (state_79076[(7)]);
var state_79076__$1 = state_79076;
var statearr_79098_80798 = state_79076__$1;
(statearr_79098_80798[(2)] = inst_79063);

(statearr_79098_80798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____0 = (function (){
var statearr_79101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79101[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__);

(statearr_79101[(1)] = (1));

return statearr_79101;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____1 = (function (state_79076){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79076);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79102){var ex__38753__auto__ = e79102;
var statearr_79103_80799 = state_79076;
(statearr_79103_80799[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79076[(4)]))){
var statearr_79104_80800 = state_79076;
(statearr_79104_80800[(1)] = cljs.core.first((state_79076[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80801 = state_79076;
state_79076 = G__80801;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__ = function(state_79076){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____1.call(this,state_79076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79106 = f__38842__auto__();
(statearr_79106[(6)] = c__38841__auto__);

return statearr_79106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79131){
var state_val_79133 = (state_79131[(1)]);
if((state_val_79133 === (1))){
var inst_79110 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_79111 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_79131__$1 = (function (){var statearr_79135 = state_79131;
(statearr_79135[(7)] = inst_79110);

return statearr_79135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79131__$1,(2),inst_79111);
} else {
if((state_val_79133 === (2))){
var inst_79110 = (state_79131[(7)]);
var inst_79113 = (state_79131[(2)]);
var inst_79114 = inst_79110.totalSupply();
var inst_79115 = cljs.core.async.interop.p__GT_c(inst_79114);
var state_79131__$1 = (function (){var statearr_79136 = state_79131;
(statearr_79136[(8)] = inst_79113);

return statearr_79136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79131__$1,(3),inst_79115);
} else {
if((state_val_79133 === (3))){
var inst_79117 = (state_79131[(9)]);
var inst_79117__$1 = (state_79131[(2)]);
var inst_79118 = (inst_79117__$1 instanceof cljs.core.ExceptionInfo);
var inst_79119 = cljs.core.ex_data(inst_79117__$1);
var inst_79120 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79119);
var inst_79121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79120,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79122 = ((inst_79118) && (inst_79121));
var state_79131__$1 = (function (){var statearr_79137 = state_79131;
(statearr_79137[(9)] = inst_79117__$1);

return statearr_79137;
})();
if(cljs.core.truth_(inst_79122)){
var statearr_79138_80802 = state_79131__$1;
(statearr_79138_80802[(1)] = (4));

} else {
var statearr_79139_80803 = state_79131__$1;
(statearr_79139_80803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79133 === (4))){
var inst_79117 = (state_79131[(9)]);
var inst_79125 = (function(){throw inst_79117})();
var state_79131__$1 = state_79131;
var statearr_79140_80804 = state_79131__$1;
(statearr_79140_80804[(2)] = inst_79125);

(statearr_79140_80804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79133 === (5))){
var inst_79117 = (state_79131[(9)]);
var state_79131__$1 = state_79131;
var statearr_79141_80805 = state_79131__$1;
(statearr_79141_80805[(2)] = inst_79117);

(statearr_79141_80805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79133 === (6))){
var inst_79113 = (state_79131[(8)]);
var inst_79128 = (state_79131[(2)]);
var inst_79129 = lpdashboard.utils.ebn__GT_bn(inst_79128,inst_79113);
var state_79131__$1 = state_79131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79131__$1,inst_79129);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____0 = (function (){
var statearr_79142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_79142[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__);

(statearr_79142[(1)] = (1));

return statearr_79142;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____1 = (function (state_79131){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79131);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79143){var ex__38753__auto__ = e79143;
var statearr_79144_80806 = state_79131;
(statearr_79144_80806[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79131[(4)]))){
var statearr_79145_80807 = state_79131;
(statearr_79145_80807[(1)] = cljs.core.first((state_79131[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80808 = state_79131;
state_79131 = G__80808;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__ = function(state_79131){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____1.call(this,state_79131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79146 = f__38842__auto__();
(statearr_79146[(6)] = c__38841__auto__);

return statearr_79146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79183){
var state_val_79184 = (state_79183[(1)]);
if((state_val_79184 === (7))){
var inst_79169 = (state_79183[(7)]);
var inst_79176 = (function(){throw inst_79169})();
var state_79183__$1 = state_79183;
var statearr_79188_80809 = state_79183__$1;
(statearr_79188_80809[(2)] = inst_79176);

(statearr_79188_80809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79184 === (1))){
var inst_79151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79152 = lp_contract.token0();
var inst_79153 = cljs.core.async.interop.p__GT_c(inst_79152);
var state_79183__$1 = (function (){var statearr_79189 = state_79183;
(statearr_79189[(8)] = inst_79151);

return statearr_79189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79183__$1,(2),inst_79153);
} else {
if((state_val_79184 === (4))){
var inst_79155 = (state_79183[(9)]);
var state_79183__$1 = state_79183;
var statearr_79191_80810 = state_79183__$1;
(statearr_79191_80810[(2)] = inst_79155);

(statearr_79191_80810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79184 === (6))){
var inst_79169 = (state_79183[(7)]);
var inst_79169__$1 = (state_79183[(2)]);
var inst_79170 = (inst_79169__$1 instanceof cljs.core.ExceptionInfo);
var inst_79171 = cljs.core.ex_data(inst_79169__$1);
var inst_79172 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79171);
var inst_79173 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79172,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79174 = ((inst_79170) && (inst_79173));
var state_79183__$1 = (function (){var statearr_79192 = state_79183;
(statearr_79192[(7)] = inst_79169__$1);

return statearr_79192;
})();
if(cljs.core.truth_(inst_79174)){
var statearr_79194_80811 = state_79183__$1;
(statearr_79194_80811[(1)] = (7));

} else {
var statearr_79195_80812 = state_79183__$1;
(statearr_79195_80812[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79184 === (3))){
var inst_79155 = (state_79183[(9)]);
var inst_79162 = (function(){throw inst_79155})();
var state_79183__$1 = state_79183;
var statearr_79196_80813 = state_79183__$1;
(statearr_79196_80813[(2)] = inst_79162);

(statearr_79196_80813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79184 === (2))){
var inst_79155 = (state_79183[(9)]);
var inst_79155__$1 = (state_79183[(2)]);
var inst_79156 = (inst_79155__$1 instanceof cljs.core.ExceptionInfo);
var inst_79157 = cljs.core.ex_data(inst_79155__$1);
var inst_79158 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79157);
var inst_79159 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79158,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79160 = ((inst_79156) && (inst_79159));
var state_79183__$1 = (function (){var statearr_79200 = state_79183;
(statearr_79200[(9)] = inst_79155__$1);

return statearr_79200;
})();
if(cljs.core.truth_(inst_79160)){
var statearr_79201_80814 = state_79183__$1;
(statearr_79201_80814[(1)] = (3));

} else {
var statearr_79202_80815 = state_79183__$1;
(statearr_79202_80815[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79184 === (9))){
var inst_79151 = (state_79183[(8)]);
var inst_79165 = (state_79183[(10)]);
var inst_79179 = (state_79183[(2)]);
var inst_79180 = [inst_79165,inst_79179];
var inst_79181 = (new cljs.core.PersistentVector(null,2,(5),inst_79151,inst_79180,null));
var state_79183__$1 = state_79183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79183__$1,inst_79181);
} else {
if((state_val_79184 === (5))){
var inst_79165 = (state_79183[(2)]);
var inst_79166 = lp_contract.token1();
var inst_79167 = cljs.core.async.interop.p__GT_c(inst_79166);
var state_79183__$1 = (function (){var statearr_79205 = state_79183;
(statearr_79205[(10)] = inst_79165);

return statearr_79205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79183__$1,(6),inst_79167);
} else {
if((state_val_79184 === (8))){
var inst_79169 = (state_79183[(7)]);
var state_79183__$1 = state_79183;
var statearr_79206_80816 = state_79183__$1;
(statearr_79206_80816[(2)] = inst_79169);

(statearr_79206_80816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____0 = (function (){
var statearr_79207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79207[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__);

(statearr_79207[(1)] = (1));

return statearr_79207;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____1 = (function (state_79183){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79183);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79209){var ex__38753__auto__ = e79209;
var statearr_79210_80817 = state_79183;
(statearr_79210_80817[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79183[(4)]))){
var statearr_79211_80818 = state_79183;
(statearr_79211_80818[(1)] = cljs.core.first((state_79183[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80819 = state_79183;
state_79183 = G__80819;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__ = function(state_79183){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____1.call(this,state_79183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79214 = f__38842__auto__();
(statearr_79214[(6)] = c__38841__auto__);

return statearr_79214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79257){
var state_val_79258 = (state_79257[(1)]);
if((state_val_79258 === (7))){
var inst_79242 = (state_79257[(7)]);
var inst_79242__$1 = (state_79257[(2)]);
var inst_79244 = (inst_79242__$1 instanceof cljs.core.ExceptionInfo);
var inst_79245 = cljs.core.ex_data(inst_79242__$1);
var inst_79246 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79245);
var inst_79247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79246,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79248 = ((inst_79244) && (inst_79247));
var state_79257__$1 = (function (){var statearr_79262 = state_79257;
(statearr_79262[(7)] = inst_79242__$1);

return statearr_79262;
})();
if(cljs.core.truth_(inst_79248)){
var statearr_79263_80820 = state_79257__$1;
(statearr_79263_80820[(1)] = (8));

} else {
var statearr_79264_80821 = state_79257__$1;
(statearr_79264_80821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79258 === (1))){
var inst_79216 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_79257__$1 = state_79257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79257__$1,(2),inst_79216);
} else {
if((state_val_79258 === (4))){
var inst_79228 = (state_79257[(8)]);
var inst_79235 = (function(){throw inst_79228})();
var state_79257__$1 = state_79257;
var statearr_79267_80822 = state_79257__$1;
(statearr_79267_80822[(2)] = inst_79235);

(statearr_79267_80822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79258 === (6))){
var inst_79222 = (state_79257[(9)]);
var inst_79238 = (state_79257[(2)]);
var inst_79239 = inst_79222.symbol();
var inst_79240 = cljs.core.async.interop.p__GT_c(inst_79239);
var state_79257__$1 = (function (){var statearr_79269 = state_79257;
(statearr_79269[(10)] = inst_79238);

return statearr_79269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79257__$1,(7),inst_79240);
} else {
if((state_val_79258 === (3))){
var inst_79228 = (state_79257[(8)]);
var inst_79228__$1 = (state_79257[(2)]);
var inst_79229 = (inst_79228__$1 instanceof cljs.core.ExceptionInfo);
var inst_79230 = cljs.core.ex_data(inst_79228__$1);
var inst_79231 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79230);
var inst_79232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79231,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79233 = ((inst_79229) && (inst_79232));
var state_79257__$1 = (function (){var statearr_79272 = state_79257;
(statearr_79272[(8)] = inst_79228__$1);

return statearr_79272;
})();
if(cljs.core.truth_(inst_79233)){
var statearr_79274_80823 = state_79257__$1;
(statearr_79274_80823[(1)] = (4));

} else {
var statearr_79275_80824 = state_79257__$1;
(statearr_79275_80824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79258 === (2))){
var inst_79218 = (state_79257[(2)]);
var inst_79219 = cljs.core.first(inst_79218);
var inst_79220 = lpdashboard.ethereum.make_erc20(inst_79219);
var inst_79221 = cljs.core.second(inst_79218);
var inst_79222 = lpdashboard.ethereum.make_erc20(inst_79221);
var inst_79223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79225 = inst_79220.symbol();
var inst_79226 = cljs.core.async.interop.p__GT_c(inst_79225);
var state_79257__$1 = (function (){var statearr_79276 = state_79257;
(statearr_79276[(11)] = inst_79223);

(statearr_79276[(9)] = inst_79222);

return statearr_79276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79257__$1,(3),inst_79226);
} else {
if((state_val_79258 === (9))){
var inst_79242 = (state_79257[(7)]);
var state_79257__$1 = state_79257;
var statearr_79278_80825 = state_79257__$1;
(statearr_79278_80825[(2)] = inst_79242);

(statearr_79278_80825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79258 === (5))){
var inst_79228 = (state_79257[(8)]);
var state_79257__$1 = state_79257;
var statearr_79279_80826 = state_79257__$1;
(statearr_79279_80826[(2)] = inst_79228);

(statearr_79279_80826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79258 === (10))){
var inst_79238 = (state_79257[(10)]);
var inst_79223 = (state_79257[(11)]);
var inst_79253 = (state_79257[(2)]);
var inst_79254 = [inst_79238,inst_79253];
var inst_79255 = (new cljs.core.PersistentVector(null,2,(5),inst_79223,inst_79254,null));
var state_79257__$1 = state_79257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79257__$1,inst_79255);
} else {
if((state_val_79258 === (8))){
var inst_79242 = (state_79257[(7)]);
var inst_79250 = (function(){throw inst_79242})();
var state_79257__$1 = state_79257;
var statearr_79281_80827 = state_79257__$1;
(statearr_79281_80827[(2)] = inst_79250);

(statearr_79281_80827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____0 = (function (){
var statearr_79284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79284[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__);

(statearr_79284[(1)] = (1));

return statearr_79284;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____1 = (function (state_79257){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79257);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79286){var ex__38753__auto__ = e79286;
var statearr_79287_80828 = state_79257;
(statearr_79287_80828[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79257[(4)]))){
var statearr_79288_80829 = state_79257;
(statearr_79288_80829[(1)] = cljs.core.first((state_79257[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80830 = state_79257;
state_79257 = G__80830;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__ = function(state_79257){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____1.call(this,state_79257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79291 = f__38842__auto__();
(statearr_79291[(6)] = c__38841__auto__);

return statearr_79291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79353){
var state_val_79354 = (state_79353[(1)]);
if((state_val_79354 === (7))){
var inst_79311 = (state_79353[(7)]);
var inst_79319 = (function(){throw inst_79311})();
var state_79353__$1 = state_79353;
var statearr_79355_80831 = state_79353__$1;
(statearr_79355_80831[(2)] = inst_79319);

(statearr_79355_80831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (1))){
var inst_79293 = (state_79353[(8)]);
var inst_79293__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_79294 = inst_79293__$1.token0();
var inst_79295 = cljs.core.async.interop.p__GT_c(inst_79294);
var state_79353__$1 = (function (){var statearr_79356 = state_79353;
(statearr_79356[(8)] = inst_79293__$1);

return statearr_79356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79353__$1,(2),inst_79295);
} else {
if((state_val_79354 === (4))){
var inst_79297 = (state_79353[(9)]);
var state_79353__$1 = state_79353;
var statearr_79357_80832 = state_79353__$1;
(statearr_79357_80832[(2)] = inst_79297);

(statearr_79357_80832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (15))){
var inst_79326 = (state_79353[(10)]);
var inst_79329 = (state_79353[(11)]);
var inst_79344 = (state_79353[(2)]);
var inst_79345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79346 = cljs.core.first(inst_79344);
var inst_79347 = lpdashboard.utils.ebn__GT_bn(inst_79346,inst_79326);
var inst_79348 = cljs.core.second(inst_79344);
var inst_79349 = lpdashboard.utils.ebn__GT_bn(inst_79348,inst_79329);
var inst_79350 = [inst_79347,inst_79349];
var inst_79351 = (new cljs.core.PersistentVector(null,2,(5),inst_79345,inst_79350,null));
var state_79353__$1 = state_79353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79353__$1,inst_79351);
} else {
if((state_val_79354 === (13))){
var inst_79333 = (state_79353[(12)]);
var inst_79341 = (function(){throw inst_79333})();
var state_79353__$1 = state_79353;
var statearr_79358_80833 = state_79353__$1;
(statearr_79358_80833[(2)] = inst_79341);

(statearr_79358_80833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (6))){
var inst_79311 = (state_79353[(7)]);
var inst_79311__$1 = (state_79353[(2)]);
var inst_79313 = (inst_79311__$1 instanceof cljs.core.ExceptionInfo);
var inst_79314 = cljs.core.ex_data(inst_79311__$1);
var inst_79315 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79314);
var inst_79316 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79315,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79317 = ((inst_79313) && (inst_79316));
var state_79353__$1 = (function (){var statearr_79362 = state_79353;
(statearr_79362[(7)] = inst_79311__$1);

return statearr_79362;
})();
if(cljs.core.truth_(inst_79317)){
var statearr_79364_80834 = state_79353__$1;
(statearr_79364_80834[(1)] = (7));

} else {
var statearr_79365_80835 = state_79353__$1;
(statearr_79365_80835[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (3))){
var inst_79297 = (state_79353[(9)]);
var inst_79304 = (function(){throw inst_79297})();
var state_79353__$1 = state_79353;
var statearr_79366_80836 = state_79353__$1;
(statearr_79366_80836[(2)] = inst_79304);

(statearr_79366_80836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (12))){
var inst_79333 = (state_79353[(12)]);
var inst_79333__$1 = (state_79353[(2)]);
var inst_79335 = (inst_79333__$1 instanceof cljs.core.ExceptionInfo);
var inst_79336 = cljs.core.ex_data(inst_79333__$1);
var inst_79337 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79336);
var inst_79338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79337,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79339 = ((inst_79335) && (inst_79338));
var state_79353__$1 = (function (){var statearr_79369 = state_79353;
(statearr_79369[(12)] = inst_79333__$1);

return statearr_79369;
})();
if(cljs.core.truth_(inst_79339)){
var statearr_79370_80837 = state_79353__$1;
(statearr_79370_80837[(1)] = (13));

} else {
var statearr_79372_80838 = state_79353__$1;
(statearr_79372_80838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (2))){
var inst_79297 = (state_79353[(9)]);
var inst_79297__$1 = (state_79353[(2)]);
var inst_79298 = (inst_79297__$1 instanceof cljs.core.ExceptionInfo);
var inst_79299 = cljs.core.ex_data(inst_79297__$1);
var inst_79300 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79299);
var inst_79301 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79300,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79302 = ((inst_79298) && (inst_79301));
var state_79353__$1 = (function (){var statearr_79373 = state_79353;
(statearr_79373[(9)] = inst_79297__$1);

return statearr_79373;
})();
if(cljs.core.truth_(inst_79302)){
var statearr_79374_80839 = state_79353__$1;
(statearr_79374_80839[(1)] = (3));

} else {
var statearr_79375_80840 = state_79353__$1;
(statearr_79375_80840[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (11))){
var inst_79293 = (state_79353[(8)]);
var inst_79329 = (state_79353[(2)]);
var inst_79330 = inst_79293.getReserves();
var inst_79331 = cljs.core.async.interop.p__GT_c(inst_79330);
var state_79353__$1 = (function (){var statearr_79376 = state_79353;
(statearr_79376[(11)] = inst_79329);

return statearr_79376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79353__$1,(12),inst_79331);
} else {
if((state_val_79354 === (9))){
var inst_79307 = (state_79353[(13)]);
var inst_79322 = (state_79353[(2)]);
var inst_79324 = lpdashboard.ethereum._LT_token_decimals(inst_79307);
var state_79353__$1 = (function (){var statearr_79377 = state_79353;
(statearr_79377[(14)] = inst_79322);

return statearr_79377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79353__$1,(10),inst_79324);
} else {
if((state_val_79354 === (5))){
var inst_79293 = (state_79353[(8)]);
var inst_79307 = (state_79353[(2)]);
var inst_79308 = inst_79293.token1();
var inst_79309 = cljs.core.async.interop.p__GT_c(inst_79308);
var state_79353__$1 = (function (){var statearr_79380 = state_79353;
(statearr_79380[(13)] = inst_79307);

return statearr_79380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79353__$1,(6),inst_79309);
} else {
if((state_val_79354 === (14))){
var inst_79333 = (state_79353[(12)]);
var state_79353__$1 = state_79353;
var statearr_79382_80841 = state_79353__$1;
(statearr_79382_80841[(2)] = inst_79333);

(statearr_79382_80841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79354 === (10))){
var inst_79322 = (state_79353[(14)]);
var inst_79326 = (state_79353[(2)]);
var inst_79327 = lpdashboard.ethereum._LT_token_decimals(inst_79322);
var state_79353__$1 = (function (){var statearr_79384 = state_79353;
(statearr_79384[(10)] = inst_79326);

return statearr_79384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79353__$1,(11),inst_79327);
} else {
if((state_val_79354 === (8))){
var inst_79311 = (state_79353[(7)]);
var state_79353__$1 = state_79353;
var statearr_79385_80842 = state_79353__$1;
(statearr_79385_80842[(2)] = inst_79311);

(statearr_79385_80842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____0 = (function (){
var statearr_79386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79386[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__);

(statearr_79386[(1)] = (1));

return statearr_79386;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____1 = (function (state_79353){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79353);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79389){var ex__38753__auto__ = e79389;
var statearr_79390_80843 = state_79353;
(statearr_79390_80843[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79353[(4)]))){
var statearr_79392_80844 = state_79353;
(statearr_79392_80844[(1)] = cljs.core.first((state_79353[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80845 = state_79353;
state_79353 = G__80845;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__ = function(state_79353){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____1.call(this,state_79353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79394 = f__38842__auto__();
(statearr_79394[(6)] = c__38841__auto__);

return statearr_79394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.staked_lps = (function lpdashboard$core$staked_lps(staked_proportion,staked_balance){
return bignumber.core._STAR_(staked_proportion,staked_balance);
});
lpdashboard.core.proportion_reserves = (function lpdashboard$core$proportion_reserves(token_reserve,lp_proportion){
return bignumber.core._STAR_(token_reserve,lp_proportion);
});
lpdashboard.core.proportion_lps = (function lpdashboard$core$proportion_lps(lps,total_lps){
return bignumber.core._SLASH_(lps,total_lps);
});
lpdashboard.core.staked_positions = (function lpdashboard$core$staked_positions(lp_reserves,total_lps,lp_staked,lp_symbols){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635),lp_staked,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),lpdashboard.core.proportion_reserves(cljs.core.first(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),cljs.core.first(lp_symbols),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),lpdashboard.core.proportion_reserves(cljs.core.second(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),cljs.core.second(lp_symbols)], null);
});
lpdashboard.core._LT_make_sashimi_pool_index = (function lpdashboard$core$_LT_make_sashimi_pool_index(staking_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79427){
var state_val_79428 = (state_79427[(1)]);
if((state_val_79428 === (1))){
var inst_79400 = (state_79427[(7)]);
var inst_79400__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_79401 = inst_79400__$1.poolLength();
var inst_79402 = cljs.core.async.interop.p__GT_c(inst_79401);
var state_79427__$1 = (function (){var statearr_79430 = state_79427;
(statearr_79430[(7)] = inst_79400__$1);

return statearr_79430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79427__$1,(2),inst_79402);
} else {
if((state_val_79428 === (2))){
var inst_79404 = (state_79427[(8)]);
var inst_79404__$1 = (state_79427[(2)]);
var inst_79406 = (inst_79404__$1 instanceof cljs.core.ExceptionInfo);
var inst_79407 = cljs.core.ex_data(inst_79404__$1);
var inst_79408 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79407);
var inst_79409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79408,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79410 = ((inst_79406) && (inst_79409));
var state_79427__$1 = (function (){var statearr_79433 = state_79427;
(statearr_79433[(8)] = inst_79404__$1);

return statearr_79433;
})();
if(cljs.core.truth_(inst_79410)){
var statearr_79434_80846 = state_79427__$1;
(statearr_79434_80846[(1)] = (3));

} else {
var statearr_79435_80847 = state_79427__$1;
(statearr_79435_80847[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79428 === (3))){
var inst_79404 = (state_79427[(8)]);
var inst_79412 = (function(){throw inst_79404})();
var state_79427__$1 = state_79427;
var statearr_79437_80848 = state_79427__$1;
(statearr_79437_80848[(2)] = inst_79412);

(statearr_79437_80848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79428 === (4))){
var inst_79404 = (state_79427[(8)]);
var state_79427__$1 = state_79427;
var statearr_79439_80849 = state_79427__$1;
(statearr_79439_80849[(2)] = inst_79404);

(statearr_79439_80849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79428 === (5))){
var inst_79400 = (state_79427[(7)]);
var inst_79415 = (state_79427[(2)]);
var inst_79416 = cljs.core.identity(inst_79415);
var inst_79417 = (function (){var contract = inst_79400;
var many_pools = inst_79416;
return (function (p){
var c__38841__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79463){
var state_val_79464 = (state_79463[(1)]);
if((state_val_79464 === (1))){
var inst_79441 = contract.poolInfo(p);
var inst_79442 = cljs.core.async.interop.p__GT_c(inst_79441);
var state_79463__$1 = state_79463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79463__$1,(2),inst_79442);
} else {
if((state_val_79464 === (2))){
var inst_79444 = (state_79463[(7)]);
var inst_79444__$1 = (state_79463[(2)]);
var inst_79446 = (inst_79444__$1 instanceof cljs.core.ExceptionInfo);
var inst_79447 = cljs.core.ex_data(inst_79444__$1);
var inst_79448 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79447);
var inst_79449 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79448,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79450 = ((inst_79446) && (inst_79449));
var state_79463__$1 = (function (){var statearr_79465 = state_79463;
(statearr_79465[(7)] = inst_79444__$1);

return statearr_79465;
})();
if(cljs.core.truth_(inst_79450)){
var statearr_79466_80850 = state_79463__$1;
(statearr_79466_80850[(1)] = (3));

} else {
var statearr_79467_80851 = state_79463__$1;
(statearr_79467_80851[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79464 === (3))){
var inst_79444 = (state_79463[(7)]);
var inst_79452 = (function(){throw inst_79444})();
var state_79463__$1 = state_79463;
var statearr_79469_80852 = state_79463__$1;
(statearr_79469_80852[(2)] = inst_79452);

(statearr_79469_80852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79464 === (4))){
var inst_79444 = (state_79463[(7)]);
var state_79463__$1 = state_79463;
var statearr_79471_80853 = state_79463__$1;
(statearr_79471_80853[(2)] = inst_79444);

(statearr_79471_80853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79464 === (5))){
var inst_79455 = (state_79463[(2)]);
var inst_79457 = cljs.core.first(inst_79455);
var inst_79458 = clojure.string.lower_case(inst_79457);
var inst_79459 = [inst_79458];
var inst_79460 = [p];
var inst_79461 = cljs.core.PersistentHashMap.fromArrays(inst_79459,inst_79460);
var state_79463__$1 = state_79463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79463__$1,inst_79461);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0 = (function (){
var statearr_79474 = [null,null,null,null,null,null,null,null];
(statearr_79474[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__);

(statearr_79474[(1)] = (1));

return statearr_79474;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1 = (function (state_79463){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79463);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79475){var ex__38753__auto__ = e79475;
var statearr_79476_80854 = state_79463;
(statearr_79476_80854[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79463[(4)]))){
var statearr_79478_80855 = state_79463;
(statearr_79478_80855[(1)] = cljs.core.first((state_79463[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80856 = state_79463;
state_79463 = G__80856;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__ = function(state_79463){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1.call(this,state_79463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79481 = f__38842__auto__();
(statearr_79481[(6)] = c__38841__auto____$1);

return statearr_79481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto____$1;
});
})();
var inst_79418 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_79416);
var inst_79419 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_79417,inst_79418);
var inst_79420 = cljs.core.PersistentHashMap.EMPTY;
var inst_79421 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_79419);
var inst_79422 = cljs.core.async.reduce(cljs.core.merge,inst_79420,inst_79421);
var state_79427__$1 = state_79427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79427__$1,(6),inst_79422);
} else {
if((state_val_79428 === (6))){
var inst_79424 = (state_79427[(2)]);
var state_79427__$1 = state_79427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79427__$1,inst_79424);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0 = (function (){
var statearr_79482 = [null,null,null,null,null,null,null,null,null];
(statearr_79482[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__);

(statearr_79482[(1)] = (1));

return statearr_79482;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1 = (function (state_79427){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79427);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79483){var ex__38753__auto__ = e79483;
var statearr_79484_80857 = state_79427;
(statearr_79484_80857[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79427[(4)]))){
var statearr_79485_80858 = state_79427;
(statearr_79485_80858[(1)] = cljs.core.first((state_79427[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80859 = state_79427;
state_79427 = G__80859;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__ = function(state_79427){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1.call(this,state_79427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79489 = f__38842__auto__();
(statearr_79489[(6)] = c__38841__auto__);

return statearr_79489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.make_paid_rewards = (function lpdashboard$core$make_paid_rewards(parsed_transfer){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(parsed_transfer)], null);
});
lpdashboard.core._LT_staked_lp_positions_pjar = (function lpdashboard$core$_LT_staked_lp_positions_pjar(lp_address,staking_address,user_address){
try{var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79531){
var state_val_79532 = (state_79531[(1)]);
if((state_val_79532 === (7))){
var inst_79514 = (state_79531[(7)]);
var inst_79514__$1 = (state_79531[(2)]);
var inst_79515 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_79514__$1,user_address);
var state_79531__$1 = (function (){var statearr_79536 = state_79531;
(statearr_79536[(7)] = inst_79514__$1);

return statearr_79536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(8),inst_79515);
} else {
if((state_val_79532 === (1))){
var inst_79495 = lpdashboard.ethereum._LT_user_token_balance(user_address,staking_address);
var state_79531__$1 = state_79531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(2),inst_79495);
} else {
if((state_val_79532 === (4))){
var inst_79500 = (state_79531[(8)]);
var inst_79497 = (state_79531[(9)]);
var inst_79503 = (state_79531[(2)]);
var inst_79504 = bignumber.core._SLASH_(inst_79497,inst_79500);
var inst_79505 = bignumber.core._STAR_(inst_79504,inst_79503);
var inst_79506 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_79531__$1 = (function (){var statearr_79538 = state_79531;
(statearr_79538[(10)] = inst_79505);

return statearr_79538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(5),inst_79506);
} else {
if((state_val_79532 === (6))){
var inst_79511 = (state_79531[(2)]);
var inst_79512 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_79531__$1 = (function (){var statearr_79539 = state_79531;
(statearr_79539[(11)] = inst_79511);

return statearr_79539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(7),inst_79512);
} else {
if((state_val_79532 === (3))){
var inst_79500 = (state_79531[(2)]);
var inst_79501 = lpdashboard.ethereum._LT_pickle_jar_balance(staking_address);
var state_79531__$1 = (function (){var statearr_79542 = state_79531;
(statearr_79542[(8)] = inst_79500);

return statearr_79542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(4),inst_79501);
} else {
if((state_val_79532 === (2))){
var inst_79497 = (state_79531[(2)]);
var inst_79498 = lpdashboard.ethereum._LT_token_total_supply(staking_address);
var state_79531__$1 = (function (){var statearr_79544 = state_79531;
(statearr_79544[(9)] = inst_79497);

return statearr_79544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(3),inst_79498);
} else {
if((state_val_79532 === (9))){
var inst_79520 = (state_79531[(2)]);
var inst_79521 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_79520);
var inst_79522 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_79531__$1 = (function (){var statearr_79545 = state_79531;
(statearr_79545[(12)] = inst_79521);

return statearr_79545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(10),inst_79522);
} else {
if((state_val_79532 === (5))){
var inst_79508 = (state_79531[(2)]);
var inst_79509 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_79531__$1 = (function (){var statearr_79546 = state_79531;
(statearr_79546[(13)] = inst_79508);

return statearr_79546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(6),inst_79509);
} else {
if((state_val_79532 === (10))){
var inst_79517 = (state_79531[(14)]);
var inst_79521 = (state_79531[(12)]);
var inst_79508 = (state_79531[(13)]);
var inst_79514 = (state_79531[(7)]);
var inst_79505 = (state_79531[(10)]);
var inst_79511 = (state_79531[(11)]);
var inst_79524 = (state_79531[(2)]);
var inst_79525 = lpdashboard.core.staked_positions(inst_79524,inst_79508,inst_79505,inst_79511);
var inst_79526 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_79527 = [inst_79517,inst_79514,inst_79521];
var inst_79528 = cljs.core.PersistentHashMap.fromArrays(inst_79526,inst_79527);
var inst_79529 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_79525,inst_79528);
var state_79531__$1 = state_79531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79531__$1,inst_79529);
} else {
if((state_val_79532 === (8))){
var inst_79514 = (state_79531[(7)]);
var inst_79517 = (state_79531[(2)]);
var inst_79518 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_79514,staking_address,user_address);
var state_79531__$1 = (function (){var statearr_79550 = state_79531;
(statearr_79550[(14)] = inst_79517);

return statearr_79550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79531__$1,(9),inst_79518);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____0 = (function (){
var statearr_79552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79552[(0)] = lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__);

(statearr_79552[(1)] = (1));

return statearr_79552;
});
var lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____1 = (function (state_79531){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79531);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79553){var ex__38753__auto__ = e79553;
var statearr_79554_80860 = state_79531;
(statearr_79554_80860[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79531[(4)]))){
var statearr_79556_80861 = state_79531;
(statearr_79556_80861[(1)] = cljs.core.first((state_79531[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80862 = state_79531;
state_79531 = G__80862;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__ = function(state_79531){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____1.call(this,state_79531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_pjar_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79559 = f__38842__auto__();
(statearr_79559[(6)] = c__38841__auto__);

return statearr_79559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}catch (e79494){if((e79494 instanceof Error)){
var err = e79494;
return null;
} else {
throw e79494;

}
}});
lpdashboard.core.pickle_uni_jars = new cljs.core.PersistentArrayMap(null, 4, ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11","0xCffA068F1E44D98D3753966eBd58D4CFe3BB5162","0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc","0x53Bf2E62fA20e2b4522f05de3597890Ec1b352C6","0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852","0x09FC573c502037B149ba87782ACC81cF093EC6ef","0xbb2b8038a1640196fbe3e38816f3e67cba72d940","0xc80090AA05374d336875907372EE4ee636CBC562"], null);
lpdashboard.core._LT_staked_lp_positions_pjar_redirect = (function lpdashboard$core$_LT_staked_lp_positions_pjar_redirect(lp_address,staking_address,user_address){
try{var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79582){
var state_val_79583 = (state_79582[(1)]);
if((state_val_79583 === (1))){
var inst_79564 = lpdashboard.ethereum._LT_pickle_jar_balance(staking_address);
var state_79582__$1 = state_79582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79582__$1,(2),inst_79564);
} else {
if((state_val_79583 === (2))){
var inst_79566 = (state_79582[(2)]);
var inst_79567 = (new module$node_modules$bignumber_DOT_js$bignumber((0)));
var inst_79568 = bignumber.core._EQ_(inst_79566,inst_79567);
var state_79582__$1 = state_79582;
if(cljs.core.truth_(inst_79568)){
var statearr_79587_80863 = state_79582__$1;
(statearr_79587_80863[(1)] = (3));

} else {
var statearr_79588_80864 = state_79582__$1;
(statearr_79588_80864[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79583 === (3))){
var inst_79570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.pickle_uni_jars,lp_address);
var inst_79571 = lpdashboard.core._LT_staked_lp_positions_pjar(lp_address,inst_79570,user_address);
var state_79582__$1 = state_79582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79582__$1,(6),inst_79571);
} else {
if((state_val_79583 === (4))){
var inst_79575 = lpdashboard.core._LT_staked_lp_positions_pjar(lp_address,staking_address,user_address);
var state_79582__$1 = state_79582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79582__$1,(7),inst_79575);
} else {
if((state_val_79583 === (5))){
var inst_79579 = (state_79582[(2)]);
var state_79582__$1 = state_79582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79582__$1,inst_79579);
} else {
if((state_val_79583 === (6))){
var inst_79573 = (state_79582[(2)]);
var state_79582__$1 = state_79582;
var statearr_79589_80865 = state_79582__$1;
(statearr_79589_80865[(2)] = inst_79573);

(statearr_79589_80865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79583 === (7))){
var inst_79577 = (state_79582[(2)]);
var state_79582__$1 = state_79582;
var statearr_79590_80866 = state_79582__$1;
(statearr_79590_80866[(2)] = inst_79577);

(statearr_79590_80866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____0 = (function (){
var statearr_79591 = [null,null,null,null,null,null,null];
(statearr_79591[(0)] = lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__);

(statearr_79591[(1)] = (1));

return statearr_79591;
});
var lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____1 = (function (state_79582){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79582);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79592){var ex__38753__auto__ = e79592;
var statearr_79593_80867 = state_79582;
(statearr_79593_80867[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79582[(4)]))){
var statearr_79596_80868 = state_79582;
(statearr_79596_80868[(1)] = cljs.core.first((state_79582[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80869 = state_79582;
state_79582 = G__80869;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__ = function(state_79582){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____1.call(this,state_79582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_pjar_redirect_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79598 = f__38842__auto__();
(statearr_79598[(6)] = c__38841__auto__);

return statearr_79598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}catch (e79560){if((e79560 instanceof Error)){
var err = e79560;
return null;
} else {
throw e79560;

}
}});
lpdashboard.core._LT_staked_lp_positions_sr = (function lpdashboard$core$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
try{var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79637){
var state_val_79638 = (state_79637[(1)]);
if((state_val_79638 === (1))){
var inst_79601 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-positions-sr"], 0));
var inst_79602 = lpdashboard.core._LT_sr_staked_lps(staking_address,user_address);
var state_79637__$1 = (function (){var statearr_79639 = state_79637;
(statearr_79639[(7)] = inst_79601);

return statearr_79639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(2),inst_79602);
} else {
if((state_val_79638 === (2))){
var inst_79604 = (state_79637[(8)]);
var inst_79604__$1 = (state_79637[(2)]);
var inst_79605 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis-s",inst_79604__$1], 0));
var inst_79606 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_79637__$1 = (function (){var statearr_79640 = state_79637;
(statearr_79640[(9)] = inst_79605);

(statearr_79640[(8)] = inst_79604__$1);

return statearr_79640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(3),inst_79606);
} else {
if((state_val_79638 === (3))){
var inst_79608 = (state_79637[(10)]);
var inst_79608__$1 = (state_79637[(2)]);
var inst_79610 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tu",inst_79608__$1], 0));
var inst_79611 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_79637__$1 = (function (){var statearr_79641 = state_79637;
(statearr_79641[(10)] = inst_79608__$1);

(statearr_79641[(11)] = inst_79610);

return statearr_79641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(4),inst_79611);
} else {
if((state_val_79638 === (4))){
var inst_79613 = (state_79637[(2)]);
var inst_79614 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_79637__$1 = (function (){var statearr_79642 = state_79637;
(statearr_79642[(12)] = inst_79613);

return statearr_79642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(5),inst_79614);
} else {
if((state_val_79638 === (5))){
var inst_79616 = (state_79637[(13)]);
var inst_79616__$1 = (state_79637[(2)]);
var inst_79617 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewards-token",inst_79616__$1], 0));
var inst_79618 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_79616__$1,user_address);
var state_79637__$1 = (function (){var statearr_79643 = state_79637;
(statearr_79643[(14)] = inst_79617);

(statearr_79643[(13)] = inst_79616__$1);

return statearr_79643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(6),inst_79618);
} else {
if((state_val_79638 === (6))){
var inst_79620 = (state_79637[(15)]);
var inst_79616 = (state_79637[(13)]);
var inst_79620__$1 = (state_79637[(2)]);
var inst_79621 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewards-earned",inst_79620__$1], 0));
var inst_79622 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_79616,staking_address,user_address);
var state_79637__$1 = (function (){var statearr_79646 = state_79637;
(statearr_79646[(15)] = inst_79620__$1);

(statearr_79646[(16)] = inst_79621);

return statearr_79646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(7),inst_79622);
} else {
if((state_val_79638 === (7))){
var inst_79624 = (state_79637[(2)]);
var inst_79625 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reward-transfers",inst_79624], 0));
var inst_79626 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_79624);
var inst_79627 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_79637__$1 = (function (){var statearr_79648 = state_79637;
(statearr_79648[(17)] = inst_79625);

(statearr_79648[(18)] = inst_79626);

return statearr_79648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79637__$1,(8),inst_79627);
} else {
if((state_val_79638 === (8))){
var inst_79620 = (state_79637[(15)]);
var inst_79608 = (state_79637[(10)]);
var inst_79613 = (state_79637[(12)]);
var inst_79626 = (state_79637[(18)]);
var inst_79616 = (state_79637[(13)]);
var inst_79604 = (state_79637[(8)]);
var inst_79629 = (state_79637[(2)]);
var inst_79630 = lpdashboard.core.staked_positions(inst_79629,inst_79608,inst_79604,inst_79613);
var inst_79632 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_79633 = [inst_79620,inst_79616,inst_79626];
var inst_79634 = cljs.core.PersistentHashMap.fromArrays(inst_79632,inst_79633);
var inst_79635 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_79630,inst_79634);
var state_79637__$1 = state_79637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79637__$1,inst_79635);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____0 = (function (){
var statearr_79649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79649[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__);

(statearr_79649[(1)] = (1));

return statearr_79649;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____1 = (function (state_79637){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79637);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79651){var ex__38753__auto__ = e79651;
var statearr_79652_80870 = state_79637;
(statearr_79652_80870[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79637[(4)]))){
var statearr_79654_80871 = state_79637;
(statearr_79654_80871[(1)] = cljs.core.first((state_79637[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80872 = state_79637;
state_79637 = G__80872;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__ = function(state_79637){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____1.call(this,state_79637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79656 = f__38842__auto__();
(statearr_79656[(6)] = c__38841__auto__);

return statearr_79656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}catch (e79599){if((e79599 instanceof Error)){
var err = e79599;
return null;
} else {
throw e79599;

}
}});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79711){
var state_val_79712 = (state_79711[(1)]);
if((state_val_79712 === (7))){
var inst_79677 = (state_79711[(2)]);
var inst_79678 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_79711__$1 = (function (){var statearr_79713 = state_79711;
(statearr_79713[(7)] = inst_79677);

return statearr_79713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79711__$1,(8),inst_79678);
} else {
if((state_val_79712 === (1))){
var inst_79657 = (state_79711[(8)]);
var inst_79657__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_79658 = inst_79657__$1.lpBalance(user_address);
var inst_79659 = cljs.core.async.interop.p__GT_c(inst_79658);
var state_79711__$1 = (function (){var statearr_79714 = state_79711;
(statearr_79714[(8)] = inst_79657__$1);

return statearr_79714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79711__$1,(2),inst_79659);
} else {
if((state_val_79712 === (4))){
var inst_79661 = (state_79711[(9)]);
var state_79711__$1 = state_79711;
var statearr_79715_80873 = state_79711__$1;
(statearr_79715_80873[(2)] = inst_79661);

(statearr_79715_80873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (15))){
var inst_79709 = (state_79711[(2)]);
var state_79711__$1 = state_79711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79711__$1,inst_79709);
} else {
if((state_val_79712 === (13))){
var inst_79674 = (state_79711[(10)]);
var inst_79680 = (state_79711[(11)]);
var inst_79677 = (state_79711[(7)]);
var inst_79671 = (state_79711[(12)]);
var inst_79699 = lpdashboard.core.staked_positions(inst_79680,inst_79674,inst_79671,inst_79677);
var state_79711__$1 = state_79711;
var statearr_79716_80874 = state_79711__$1;
(statearr_79716_80874[(2)] = inst_79699);

(statearr_79716_80874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (6))){
var inst_79674 = (state_79711[(2)]);
var inst_79675 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_79711__$1 = (function (){var statearr_79717 = state_79711;
(statearr_79717[(10)] = inst_79674);

return statearr_79717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79711__$1,(7),inst_79675);
} else {
if((state_val_79712 === (3))){
var inst_79661 = (state_79711[(9)]);
var inst_79668 = (function(){throw inst_79661})();
var state_79711__$1 = state_79711;
var statearr_79718_80875 = state_79711__$1;
(statearr_79718_80875[(2)] = inst_79668);

(statearr_79718_80875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (12))){
var inst_79694 = (state_79711[(13)]);
var inst_79694__$1 = (state_79711[(2)]);
var inst_79695 = clojure.string.lower_case(inst_79694__$1);
var inst_79696 = clojure.string.lower_case(lp_address);
var inst_79697 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79695,inst_79696);
var state_79711__$1 = (function (){var statearr_79719 = state_79711;
(statearr_79719[(13)] = inst_79694__$1);

return statearr_79719;
})();
if(inst_79697){
var statearr_79720_80876 = state_79711__$1;
(statearr_79720_80876[(1)] = (13));

} else {
var statearr_79721_80877 = state_79711__$1;
(statearr_79721_80877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (2))){
var inst_79661 = (state_79711[(9)]);
var inst_79661__$1 = (state_79711[(2)]);
var inst_79662 = (inst_79661__$1 instanceof cljs.core.ExceptionInfo);
var inst_79663 = cljs.core.ex_data(inst_79661__$1);
var inst_79664 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79663);
var inst_79665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79664,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79666 = ((inst_79662) && (inst_79665));
var state_79711__$1 = (function (){var statearr_79722 = state_79711;
(statearr_79722[(9)] = inst_79661__$1);

return statearr_79722;
})();
if(cljs.core.truth_(inst_79666)){
var statearr_79723_80878 = state_79711__$1;
(statearr_79723_80878[(1)] = (3));

} else {
var statearr_79724_80879 = state_79711__$1;
(statearr_79724_80879[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (11))){
var inst_79684 = (state_79711[(14)]);
var state_79711__$1 = state_79711;
var statearr_79725_80880 = state_79711__$1;
(statearr_79725_80880[(2)] = inst_79684);

(statearr_79725_80880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (9))){
var inst_79684 = (state_79711[(14)]);
var inst_79684__$1 = (state_79711[(2)]);
var inst_79685 = (inst_79684__$1 instanceof cljs.core.ExceptionInfo);
var inst_79686 = cljs.core.ex_data(inst_79684__$1);
var inst_79687 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79686);
var inst_79688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79687,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79689 = ((inst_79685) && (inst_79688));
var state_79711__$1 = (function (){var statearr_79726 = state_79711;
(statearr_79726[(14)] = inst_79684__$1);

return statearr_79726;
})();
if(cljs.core.truth_(inst_79689)){
var statearr_79727_80881 = state_79711__$1;
(statearr_79727_80881[(1)] = (10));

} else {
var statearr_79728_80882 = state_79711__$1;
(statearr_79728_80882[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (5))){
var inst_79671 = (state_79711[(2)]);
var inst_79672 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_79711__$1 = (function (){var statearr_79729 = state_79711;
(statearr_79729[(12)] = inst_79671);

return statearr_79729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79711__$1,(6),inst_79672);
} else {
if((state_val_79712 === (14))){
var inst_79694 = (state_79711[(13)]);
var inst_79701 = console.log("lp addresses do not match:",staking_address,lp_address,inst_79694);
var inst_79702 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_79703 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79704 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79705 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79706 = [inst_79703,inst_79704,inst_79705];
var inst_79707 = cljs.core.PersistentHashMap.fromArrays(inst_79702,inst_79706);
var state_79711__$1 = (function (){var statearr_79730 = state_79711;
(statearr_79730[(15)] = inst_79701);

return statearr_79730;
})();
var statearr_79731_80883 = state_79711__$1;
(statearr_79731_80883[(2)] = inst_79707);

(statearr_79731_80883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (10))){
var inst_79684 = (state_79711[(14)]);
var inst_79691 = (function(){throw inst_79684})();
var state_79711__$1 = state_79711;
var statearr_79732_80884 = state_79711__$1;
(statearr_79732_80884[(2)] = inst_79691);

(statearr_79732_80884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79712 === (8))){
var inst_79657 = (state_79711[(8)]);
var inst_79680 = (state_79711[(2)]);
var inst_79681 = inst_79657.lp();
var inst_79682 = cljs.core.async.interop.p__GT_c(inst_79681);
var state_79711__$1 = (function (){var statearr_79733 = state_79711;
(statearr_79733[(11)] = inst_79680);

return statearr_79733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79711__$1,(9),inst_79682);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____0 = (function (){
var statearr_79734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79734[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__);

(statearr_79734[(1)] = (1));

return statearr_79734;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____1 = (function (state_79711){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79711);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79735){var ex__38753__auto__ = e79735;
var statearr_79736_80885 = state_79711;
(statearr_79736_80885[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79711[(4)]))){
var statearr_79737_80886 = state_79711;
(statearr_79737_80886[(1)] = cljs.core.first((state_79711[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80887 = state_79711;
state_79711 = G__80887;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__ = function(state_79711){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____1.call(this,state_79711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79738 = f__38842__auto__();
(statearr_79738[(6)] = c__38841__auto__);

return statearr_79738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_79823){
var state_val_79824 = (state_79823[(1)]);
if((state_val_79824 === (7))){
var inst_79768 = (state_79823[(7)]);
var inst_79768__$1 = (state_79823[(2)]);
var inst_79769 = (inst_79768__$1 instanceof cljs.core.ExceptionInfo);
var inst_79770 = cljs.core.ex_data(inst_79768__$1);
var inst_79771 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79770);
var inst_79772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79771,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79773 = ((inst_79769) && (inst_79772));
var state_79823__$1 = (function (){var statearr_79825 = state_79823;
(statearr_79825[(7)] = inst_79768__$1);

return statearr_79825;
})();
if(cljs.core.truth_(inst_79773)){
var statearr_79826_80888 = state_79823__$1;
(statearr_79826_80888[(1)] = (8));

} else {
var statearr_79827_80889 = state_79823__$1;
(statearr_79827_80889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (20))){
var inst_79763 = (state_79823[(8)]);
var inst_79794 = (state_79823[(9)]);
var inst_79813 = console.log("lp addresses do not match:",inst_79763,lp_address,inst_79794);
var inst_79814 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_79815 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79816 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79817 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79818 = [inst_79815,inst_79816,inst_79817];
var inst_79819 = cljs.core.PersistentHashMap.fromArrays(inst_79814,inst_79818);
var state_79823__$1 = (function (){var statearr_79828 = state_79823;
(statearr_79828[(10)] = inst_79813);

return statearr_79828;
})();
var statearr_79829_80890 = state_79823__$1;
(statearr_79829_80890[(2)] = inst_79819);

(statearr_79829_80890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (1))){
var inst_79739 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_79740 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_79823__$1 = (function (){var statearr_79830 = state_79823;
(statearr_79830[(11)] = inst_79739);

return statearr_79830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(2),inst_79740);
} else {
if((state_val_79824 === (4))){
var inst_79748 = (state_79823[(12)]);
var inst_79755 = (function(){throw inst_79748})();
var state_79823__$1 = state_79823;
var statearr_79831_80891 = state_79823__$1;
(statearr_79831_80891[(2)] = inst_79755);

(statearr_79831_80891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (15))){
var inst_79797 = (state_79823[(2)]);
var inst_79798 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_79823__$1 = (function (){var statearr_79832 = state_79823;
(statearr_79832[(13)] = inst_79797);

return statearr_79832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(16),inst_79798);
} else {
if((state_val_79824 === (21))){
var inst_79821 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79823__$1,inst_79821);
} else {
if((state_val_79824 === (13))){
var inst_79783 = (state_79823[(14)]);
var state_79823__$1 = state_79823;
var statearr_79833_80892 = state_79823__$1;
(statearr_79833_80892[(2)] = inst_79783);

(statearr_79833_80892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (6))){
var inst_79764 = (state_79823[(15)]);
var inst_79742 = (state_79823[(16)]);
var inst_79763 = (state_79823[(8)]);
var inst_79761 = (state_79823[(17)]);
var inst_79758 = (state_79823[(2)]);
var inst_79759 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_79758);
var inst_79760 = inst_79759.args;
var inst_79761__$1 = inst_79760.pid;
var inst_79762 = cljs.core.first(inst_79742);
var inst_79763__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_79762);
var inst_79764__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_79763__$1);
var inst_79765 = inst_79764__$1.userInfo(inst_79761__$1,user_address);
var inst_79766 = cljs.core.async.interop.p__GT_c(inst_79765);
var state_79823__$1 = (function (){var statearr_79834 = state_79823;
(statearr_79834[(15)] = inst_79764__$1);

(statearr_79834[(8)] = inst_79763__$1);

(statearr_79834[(17)] = inst_79761__$1);

return statearr_79834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(7),inst_79766);
} else {
if((state_val_79824 === (17))){
var inst_79803 = (state_79823[(2)]);
var inst_79804 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_79823__$1 = (function (){var statearr_79835 = state_79823;
(statearr_79835[(18)] = inst_79803);

return statearr_79835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(18),inst_79804);
} else {
if((state_val_79824 === (3))){
var inst_79748 = (state_79823[(12)]);
var inst_79748__$1 = (state_79823[(2)]);
var inst_79749 = (inst_79748__$1 instanceof cljs.core.ExceptionInfo);
var inst_79750 = cljs.core.ex_data(inst_79748__$1);
var inst_79751 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79750);
var inst_79752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79751,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79753 = ((inst_79749) && (inst_79752));
var state_79823__$1 = (function (){var statearr_79836 = state_79823;
(statearr_79836[(12)] = inst_79748__$1);

return statearr_79836;
})();
if(cljs.core.truth_(inst_79753)){
var statearr_79837_80893 = state_79823__$1;
(statearr_79837_80893[(1)] = (4));

} else {
var statearr_79838_80894 = state_79823__$1;
(statearr_79838_80894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (12))){
var inst_79783 = (state_79823[(14)]);
var inst_79790 = (function(){throw inst_79783})();
var state_79823__$1 = state_79823;
var statearr_79839_80895 = state_79823__$1;
(statearr_79839_80895[(2)] = inst_79790);

(statearr_79839_80895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (2))){
var inst_79742 = (state_79823[(16)]);
var inst_79742__$1 = (state_79823[(2)]);
var inst_79743 = cljs.core.first(inst_79742__$1);
var inst_79744 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_79743);
var inst_79745 = lpdashboard.core.provider.getTransaction(inst_79744);
var inst_79746 = cljs.core.async.interop.p__GT_c(inst_79745);
var state_79823__$1 = (function (){var statearr_79840 = state_79823;
(statearr_79840[(16)] = inst_79742__$1);

return statearr_79840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(3),inst_79746);
} else {
if((state_val_79824 === (19))){
var inst_79803 = (state_79823[(18)]);
var inst_79800 = (state_79823[(19)]);
var inst_79806 = (state_79823[(20)]);
var inst_79779 = (state_79823[(21)]);
var inst_79811 = lpdashboard.core.staked_positions(inst_79806,inst_79800,inst_79779,inst_79803);
var state_79823__$1 = state_79823;
var statearr_79841_80896 = state_79823__$1;
(statearr_79841_80896[(2)] = inst_79811);

(statearr_79841_80896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (11))){
var inst_79783 = (state_79823[(14)]);
var inst_79783__$1 = (state_79823[(2)]);
var inst_79784 = (inst_79783__$1 instanceof cljs.core.ExceptionInfo);
var inst_79785 = cljs.core.ex_data(inst_79783__$1);
var inst_79786 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79785);
var inst_79787 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79786,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79788 = ((inst_79784) && (inst_79787));
var state_79823__$1 = (function (){var statearr_79842 = state_79823;
(statearr_79842[(14)] = inst_79783__$1);

return statearr_79842;
})();
if(cljs.core.truth_(inst_79788)){
var statearr_79843_80897 = state_79823__$1;
(statearr_79843_80897[(1)] = (12));

} else {
var statearr_79844_80898 = state_79823__$1;
(statearr_79844_80898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (9))){
var inst_79768 = (state_79823[(7)]);
var state_79823__$1 = state_79823;
var statearr_79845_80899 = state_79823__$1;
(statearr_79845_80899[(2)] = inst_79768);

(statearr_79845_80899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (5))){
var inst_79748 = (state_79823[(12)]);
var state_79823__$1 = state_79823;
var statearr_79846_80900 = state_79823__$1;
(statearr_79846_80900[(2)] = inst_79748);

(statearr_79846_80900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (14))){
var inst_79793 = (state_79823[(2)]);
var inst_79794 = cljs.core.first(inst_79793);
var inst_79795 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_79823__$1 = (function (){var statearr_79847 = state_79823;
(statearr_79847[(9)] = inst_79794);

return statearr_79847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(15),inst_79795);
} else {
if((state_val_79824 === (16))){
var inst_79800 = (state_79823[(2)]);
var inst_79801 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_79823__$1 = (function (){var statearr_79848 = state_79823;
(statearr_79848[(19)] = inst_79800);

return statearr_79848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(17),inst_79801);
} else {
if((state_val_79824 === (10))){
var inst_79764 = (state_79823[(15)]);
var inst_79761 = (state_79823[(17)]);
var inst_79778 = (state_79823[(2)]);
var inst_79779 = cljs.core.first(inst_79778);
var inst_79780 = inst_79764.poolInfo(inst_79761);
var inst_79781 = cljs.core.async.interop.p__GT_c(inst_79780);
var state_79823__$1 = (function (){var statearr_79849 = state_79823;
(statearr_79849[(21)] = inst_79779);

return statearr_79849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79823__$1,(11),inst_79781);
} else {
if((state_val_79824 === (18))){
var inst_79794 = (state_79823[(9)]);
var inst_79806 = (state_79823[(2)]);
var inst_79807 = clojure.string.lower_case(inst_79794);
var inst_79808 = clojure.string.lower_case(lp_address);
var inst_79809 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79807,inst_79808);
var state_79823__$1 = (function (){var statearr_79850 = state_79823;
(statearr_79850[(20)] = inst_79806);

return statearr_79850;
})();
if(inst_79809){
var statearr_79851_80901 = state_79823__$1;
(statearr_79851_80901[(1)] = (19));

} else {
var statearr_79852_80902 = state_79823__$1;
(statearr_79852_80902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (8))){
var inst_79768 = (state_79823[(7)]);
var inst_79775 = (function(){throw inst_79768})();
var state_79823__$1 = state_79823;
var statearr_79853_80903 = state_79823__$1;
(statearr_79853_80903[(2)] = inst_79775);

(statearr_79853_80903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____0 = (function (){
var statearr_79854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79854[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__);

(statearr_79854[(1)] = (1));

return statearr_79854;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____1 = (function (state_79823){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_79823);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e79855){var ex__38753__auto__ = e79855;
var statearr_79856_80904 = state_79823;
(statearr_79856_80904[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_79823[(4)]))){
var statearr_79857_80905 = state_79823;
(statearr_79857_80905[(1)] = cljs.core.first((state_79823[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80906 = state_79823;
state_79823 = G__80906;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__ = function(state_79823){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____1.call(this,state_79823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_79858 = f__38842__auto__();
(statearr_79858[(6)] = c__38841__auto__);

return statearr_79858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staked_lp_positions_by_event = (function lpdashboard$core$_LT_staked_lp_positions_by_event(lp_destination,user_address){
var staking_address = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var lp_address = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var tx_hash = new cljs.core.Keyword(null,"txhash","txhash",149174990).cljs$core$IFn$_invoke$arity$1(lp_destination);
var sc = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,staking_address);
var sc_uni = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.uni_detector_abi,staking_address);
var cheff_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var deposit_filter = (sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Deposit.call(null,user_address));
var _ = (deposit_filter.fromBlock = (0));
var ___$1 = (deposit_filter.toBlock = "latest");
var staked_filter = (sc.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Staked.call(null,user_address));
var ___$2 = (staked_filter.fromBlock = (0));
var ___$3 = (staked_filter.toBlock = "latest");
var staked_filter2 = (sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc_uni.filters.Staked.call(null,user_address));
var ___$4 = (staked_filter2.fromBlock = (0));
var ___$5 = (staked_filter2.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80041){
var state_val_80042 = (state_80041[(1)]);
if((state_val_80042 === (7))){
var inst_79886 = (state_80041[(7)]);
var inst_79893 = (function(){throw inst_79886})();
var state_80041__$1 = state_80041;
var statearr_80043_80907 = state_80041__$1;
(statearr_80043_80907[(2)] = inst_79893);

(statearr_80043_80907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (20))){
var inst_80037 = (state_80041[(2)]);
var state_80041__$1 = state_80041;
var statearr_80044_80908 = state_80041__$1;
(statearr_80044_80908[(2)] = inst_80037);

(statearr_80044_80908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (27))){
var inst_79952 = (state_80041[(8)]);
var state_80041__$1 = state_80041;
var statearr_80045_80909 = state_80041__$1;
(statearr_80045_80909[(2)] = inst_79952);

(statearr_80045_80909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (1))){
var inst_79865 = (function (){return (function (p1__79859_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__79859_SHARP_.transactionHash);
});
})();
var inst_79866 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_79867 = cljs.core.async.interop.p__GT_c(inst_79866);
var state_80041__$1 = (function (){var statearr_80046 = state_80041;
(statearr_80046[(9)] = inst_79865);

return statearr_80046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(2),inst_79867);
} else {
if((state_val_80042 === (24))){
var inst_79932 = (state_80041[(10)]);
var inst_79947 = (state_80041[(11)]);
var inst_79946 = (state_80041[(2)]);
var inst_79947__$1 = cljs.core.first(inst_79946);
var inst_79948 = lpdashboard.utils.ebn__GT_bn(inst_79947__$1,(18));
var inst_79949 = cheff_contract.poolInfo(inst_79932);
var inst_79950 = cljs.core.async.interop.p__GT_c(inst_79949);
var state_80041__$1 = (function (){var statearr_80047 = state_80041;
(statearr_80047[(12)] = inst_79948);

(statearr_80047[(11)] = inst_79947__$1);

return statearr_80047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(25),inst_79950);
} else {
if((state_val_80042 === (39))){
var inst_80001 = (state_80041[(13)]);
var inst_79963 = (state_80041[(14)]);
var inst_79991 = (state_80041[(15)]);
var inst_79984 = (state_80041[(16)]);
var inst_79962 = (state_80041[(17)]);
var inst_79980 = (state_80041[(18)]);
var inst_79989 = (state_80041[(19)]);
var inst_79898 = (state_80041[(20)]);
var inst_79993 = (state_80041[(21)]);
var inst_79932 = (state_80041[(10)]);
var inst_79966 = (state_80041[(22)]);
var inst_79881 = (state_80041[(23)]);
var inst_79948 = (state_80041[(12)]);
var inst_79947 = (state_80041[(11)]);
var inst_79987 = (state_80041[(24)]);
var inst_79977 = (state_80041[(25)]);
var inst_79972 = (state_80041[(26)]);
var inst_79975 = (state_80041[(27)]);
var inst_79929 = (state_80041[(28)]);
var inst_79924 = (state_80041[(29)]);
var inst_79969 = (state_80041[(30)]);
var inst_80004 = (state_80041[(2)]);
var inst_80005 = cljs.core.identity(inst_80004);
var inst_80006 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sw:",inst_80005], 0));
var inst_80007 = (function (){var staking_pool_lp_address = inst_79963;
var lp_symbols = inst_79969;
var lp_transfers_in = inst_79987;
var rewards_token = inst_79975;
var pool_pid = inst_79932;
var deposit_data = inst_79929;
var lp_deposits = inst_79991;
var my_lps_staked_SINGLEQUOTE_ = inst_79948;
var my_lps_staked = inst_79947;
var all_staking_deposits = inst_79984;
var staked = inst_79881;
var total_pool_reserves = inst_79972;
var pids = inst_79993;
var ___$6 = inst_80006;
var pool_info = inst_79962;
var reward_transfers = inst_79980;
var staked2 = inst_79898;
var total_unis = inst_79966;
var lp_decimals = (18);
var lp_transfers_hashes = inst_79989;
var all_staking_withdrawals = inst_80004;
var pid = inst_80001;
var rewards_earned = inst_79977;
var deposit = inst_79924;
return (function (p1__79863_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__79863_SHARP_),pid);
});
})();
var inst_80008 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_80004,inst_79984);
var inst_80009 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_80007,inst_80008);
var inst_80010 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_80009);
var inst_80011 = cljs.core.set(inst_80010);
var inst_80012 = (function (){var staking_pool_lp_address = inst_79963;
var lp_symbols = inst_79969;
var lp_transfers_in = inst_79987;
var rewards_token = inst_79975;
var pool_pid = inst_79932;
var deposit_data = inst_79929;
var lp_deposits = inst_79991;
var my_lps_staked_SINGLEQUOTE_ = inst_79948;
var my_lps_staked = inst_79947;
var all_staking_deposits = inst_79984;
var staked = inst_79881;
var total_pool_reserves = inst_79972;
var pids = inst_79993;
var ___$6 = inst_80006;
var pool_info = inst_79962;
var reward_transfers = inst_79980;
var staked2 = inst_79898;
var total_unis = inst_79966;
var relevant_txids = inst_80011;
var lp_decimals = (18);
var lp_transfers_hashes = inst_79989;
var all_staking_withdrawals = inst_80004;
var pid = inst_80001;
var rewards_earned = inst_79977;
var deposit = inst_79924;
return (function (p1__79864_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__79864_SHARP_));
});
})();
var inst_80013 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_80012,inst_79980);
var inst_80014 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rel-reward-transfers",inst_80013], 0));
var inst_80015 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_80013);
var inst_80016 = clojure.string.lower_case(inst_79963);
var inst_80017 = clojure.string.lower_case(lp_address);
var inst_80018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80016,inst_80017);
var state_80041__$1 = (function (){var statearr_80048 = state_80041;
(statearr_80048[(31)] = inst_80014);

(statearr_80048[(32)] = inst_80015);

return statearr_80048;
})();
if(inst_80018){
var statearr_80049_80910 = state_80041__$1;
(statearr_80049_80910[(1)] = (40));

} else {
var statearr_80050_80911 = state_80041__$1;
(statearr_80050_80911[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (4))){
var inst_79869 = (state_80041[(33)]);
var state_80041__$1 = state_80041;
var statearr_80051_80912 = state_80041__$1;
(statearr_80051_80912[(2)] = inst_79869);

(statearr_80051_80912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (15))){
var inst_79912 = (state_80041[(34)]);
var inst_79919 = (function(){throw inst_79912})();
var state_80041__$1 = state_80041;
var statearr_80052_80913 = state_80041__$1;
(statearr_80052_80913[(2)] = inst_79919);

(statearr_80052_80913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (21))){
var inst_79936 = (state_80041[(35)]);
var inst_79936__$1 = (state_80041[(2)]);
var inst_79937 = (inst_79936__$1 instanceof cljs.core.ExceptionInfo);
var inst_79938 = cljs.core.ex_data(inst_79936__$1);
var inst_79939 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79938);
var inst_79940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79939,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79941 = ((inst_79937) && (inst_79940));
var state_80041__$1 = (function (){var statearr_80053 = state_80041;
(statearr_80053[(35)] = inst_79936__$1);

return statearr_80053;
})();
if(cljs.core.truth_(inst_79941)){
var statearr_80054_80914 = state_80041__$1;
(statearr_80054_80914[(1)] = (22));

} else {
var statearr_80055_80915 = state_80041__$1;
(statearr_80055_80915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (31))){
var inst_79972 = (state_80041[(2)]);
var inst_79973 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_80041__$1 = (function (){var statearr_80056 = state_80041;
(statearr_80056[(26)] = inst_79972);

return statearr_80056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(32),inst_79973);
} else {
if((state_val_80042 === (32))){
var inst_79975 = (state_80041[(27)]);
var inst_79975__$1 = (state_80041[(2)]);
var inst_79976 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewards-token:",inst_79975__$1], 0));
var inst_79977 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_79978 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_79975__$1,staking_address,user_address);
var state_80041__$1 = (function (){var statearr_80057 = state_80041;
(statearr_80057[(25)] = inst_79977);

(statearr_80057[(36)] = inst_79976);

(statearr_80057[(27)] = inst_79975__$1);

return statearr_80057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(33),inst_79978);
} else {
if((state_val_80042 === (40))){
var inst_80015 = (state_80041[(32)]);
var inst_79966 = (state_80041[(22)]);
var inst_79948 = (state_80041[(12)]);
var inst_79977 = (state_80041[(25)]);
var inst_79972 = (state_80041[(26)]);
var inst_79975 = (state_80041[(27)]);
var inst_79969 = (state_80041[(30)]);
var inst_80020 = lpdashboard.core.staked_positions(inst_79972,inst_79966,inst_79948,inst_79969);
var inst_80021 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_80022 = [inst_79977,inst_79975,inst_80015];
var inst_80023 = cljs.core.PersistentHashMap.fromArrays(inst_80021,inst_80022);
var inst_80024 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_80020,inst_80023);
var state_80041__$1 = state_80041;
var statearr_80058_80916 = state_80041__$1;
(statearr_80058_80916[(2)] = inst_80024);

(statearr_80058_80916[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (33))){
var inst_79980 = (state_80041[(18)]);
var inst_79980__$1 = (state_80041[(2)]);
var inst_79981 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reward transfers:",inst_79980__$1], 0));
var inst_79982 = lpdashboard.ethereum._LT_user_token_deposits(lpdashboard.core.provider,staking_address,user_address);
var state_80041__$1 = (function (){var statearr_80059 = state_80041;
(statearr_80059[(37)] = inst_79981);

(statearr_80059[(18)] = inst_79980__$1);

return statearr_80059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(34),inst_79982);
} else {
if((state_val_80042 === (13))){
var inst_79906 = (state_80041[(2)]);
var state_80041__$1 = state_80041;
var statearr_80060_80917 = state_80041__$1;
(statearr_80060_80917[(2)] = inst_79906);

(statearr_80060_80917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (22))){
var inst_79936 = (state_80041[(35)]);
var inst_79943 = (function(){throw inst_79936})();
var state_80041__$1 = state_80041;
var statearr_80061_80918 = state_80041__$1;
(statearr_80061_80918[(2)] = inst_79943);

(statearr_80061_80918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (36))){
var inst_79993 = (state_80041[(21)]);
var inst_79997 = cljs.core.first(inst_79993);
var state_80041__$1 = state_80041;
var statearr_80062_80919 = state_80041__$1;
(statearr_80062_80919[(2)] = inst_79997);

(statearr_80062_80919[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (41))){
var inst_79963 = (state_80041[(14)]);
var inst_80015 = (state_80041[(32)]);
var inst_79932 = (state_80041[(10)]);
var inst_79966 = (state_80041[(22)]);
var inst_79977 = (state_80041[(25)]);
var inst_79972 = (state_80041[(26)]);
var inst_79975 = (state_80041[(27)]);
var inst_79969 = (state_80041[(30)]);
var inst_80026 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_79932);
var inst_80027 = console.log("lp addresses do not match:",staking_address,lp_address,inst_79963,"pid",inst_80026);
var inst_80028 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_80029 = lpdashboard.core.staked_positions(inst_79972,inst_79966,inst_80028,inst_79969);
var inst_80030 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_80031 = [inst_79977,inst_79975,inst_80015];
var inst_80032 = cljs.core.PersistentHashMap.fromArrays(inst_80030,inst_80031);
var inst_80033 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_80029,inst_80032);
var state_80041__$1 = (function (){var statearr_80063 = state_80041;
(statearr_80063[(38)] = inst_80027);

return statearr_80063;
})();
var statearr_80064_80920 = state_80041__$1;
(statearr_80064_80920[(2)] = inst_80033);

(statearr_80064_80920[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (29))){
var inst_79966 = (state_80041[(2)]);
var inst_79967 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_80041__$1 = (function (){var statearr_80065 = state_80041;
(statearr_80065[(22)] = inst_79966);

return statearr_80065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(30),inst_79967);
} else {
if((state_val_80042 === (6))){
var inst_79886 = (state_80041[(7)]);
var inst_79886__$1 = (state_80041[(2)]);
var inst_79887 = (inst_79886__$1 instanceof cljs.core.ExceptionInfo);
var inst_79888 = cljs.core.ex_data(inst_79886__$1);
var inst_79889 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79888);
var inst_79890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79889,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79891 = ((inst_79887) && (inst_79890));
var state_80041__$1 = (function (){var statearr_80066 = state_80041;
(statearr_80066[(7)] = inst_79886__$1);

return statearr_80066;
})();
if(cljs.core.truth_(inst_79891)){
var statearr_80067_80921 = state_80041__$1;
(statearr_80067_80921[(1)] = (7));

} else {
var statearr_80068_80922 = state_80041__$1;
(statearr_80068_80922[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (28))){
var inst_79962 = (state_80041[(17)]);
var inst_79962__$1 = (state_80041[(2)]);
var inst_79963 = cljs.core.first(inst_79962__$1);
var inst_79964 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_80041__$1 = (function (){var statearr_80069 = state_80041;
(statearr_80069[(14)] = inst_79963);

(statearr_80069[(17)] = inst_79962__$1);

return statearr_80069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(29),inst_79964);
} else {
if((state_val_80042 === (25))){
var inst_79952 = (state_80041[(8)]);
var inst_79952__$1 = (state_80041[(2)]);
var inst_79953 = (inst_79952__$1 instanceof cljs.core.ExceptionInfo);
var inst_79954 = cljs.core.ex_data(inst_79952__$1);
var inst_79955 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79954);
var inst_79956 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79955,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79957 = ((inst_79953) && (inst_79956));
var state_80041__$1 = (function (){var statearr_80070 = state_80041;
(statearr_80070[(8)] = inst_79952__$1);

return statearr_80070;
})();
if(cljs.core.truth_(inst_79957)){
var statearr_80071_80923 = state_80041__$1;
(statearr_80071_80923[(1)] = (26));

} else {
var statearr_80072_80924 = state_80041__$1;
(statearr_80072_80924[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (34))){
var inst_79984 = (state_80041[(2)]);
var inst_79985 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_80041__$1 = (function (){var statearr_80073 = state_80041;
(statearr_80073[(16)] = inst_79984);

return statearr_80073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(35),inst_79985);
} else {
if((state_val_80042 === (17))){
var inst_79908 = (state_80041[(39)]);
var inst_79924 = (state_80041[(29)]);
var inst_79922 = (state_80041[(2)]);
var inst_79923 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_79908,inst_79922);
var inst_79924__$1 = cljs.core.first(inst_79923);
var inst_79925 = (inst_79924__$1 == null);
var state_80041__$1 = (function (){var statearr_80074 = state_80041;
(statearr_80074[(29)] = inst_79924__$1);

return statearr_80074;
})();
if(cljs.core.truth_(inst_79925)){
var statearr_80075_80925 = state_80041__$1;
(statearr_80075_80925[(1)] = (18));

} else {
var statearr_80076_80926 = state_80041__$1;
(statearr_80076_80926[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (3))){
var inst_79869 = (state_80041[(33)]);
var inst_79876 = (function(){throw inst_79869})();
var state_80041__$1 = state_80041;
var statearr_80077_80927 = state_80041__$1;
(statearr_80077_80927[(2)] = inst_79876);

(statearr_80077_80927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (12))){
var inst_80039 = (state_80041[(2)]);
var state_80041__$1 = state_80041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80041__$1,inst_80039);
} else {
if((state_val_80042 === (2))){
var inst_79869 = (state_80041[(33)]);
var inst_79869__$1 = (state_80041[(2)]);
var inst_79870 = (inst_79869__$1 instanceof cljs.core.ExceptionInfo);
var inst_79871 = cljs.core.ex_data(inst_79869__$1);
var inst_79872 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79871);
var inst_79873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79872,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79874 = ((inst_79870) && (inst_79873));
var state_80041__$1 = (function (){var statearr_80078 = state_80041;
(statearr_80078[(33)] = inst_79869__$1);

return statearr_80078;
})();
if(cljs.core.truth_(inst_79874)){
var statearr_80079_80928 = state_80041__$1;
(statearr_80079_80928[(1)] = (3));

} else {
var statearr_80080_80929 = state_80041__$1;
(statearr_80080_80929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (23))){
var inst_79936 = (state_80041[(35)]);
var state_80041__$1 = state_80041;
var statearr_80081_80930 = state_80041__$1;
(statearr_80081_80930[(2)] = inst_79936);

(statearr_80081_80930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (35))){
var inst_79963 = (state_80041[(14)]);
var inst_79991 = (state_80041[(15)]);
var inst_79984 = (state_80041[(16)]);
var inst_79962 = (state_80041[(17)]);
var inst_79981 = (state_80041[(37)]);
var inst_79980 = (state_80041[(18)]);
var inst_79989 = (state_80041[(19)]);
var inst_79898 = (state_80041[(20)]);
var inst_79993 = (state_80041[(21)]);
var inst_79932 = (state_80041[(10)]);
var inst_79966 = (state_80041[(22)]);
var inst_79881 = (state_80041[(23)]);
var inst_79948 = (state_80041[(12)]);
var inst_79947 = (state_80041[(11)]);
var inst_79987 = (state_80041[(24)]);
var inst_79977 = (state_80041[(25)]);
var inst_79972 = (state_80041[(26)]);
var inst_79975 = (state_80041[(27)]);
var inst_79929 = (state_80041[(28)]);
var inst_79924 = (state_80041[(29)]);
var inst_79969 = (state_80041[(30)]);
var inst_79987__$1 = (state_80041[(2)]);
var inst_79988 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_79987__$1);
var inst_79989__$1 = cljs.core.set(inst_79988);
var inst_79990 = (function (){var staking_pool_lp_address = inst_79963;
var lp_symbols = inst_79969;
var lp_transfers_in = inst_79987__$1;
var rewards_token = inst_79975;
var pool_pid = inst_79932;
var deposit_data = inst_79929;
var my_lps_staked_SINGLEQUOTE_ = inst_79948;
var my_lps_staked = inst_79947;
var all_staking_deposits = inst_79984;
var staked = inst_79881;
var total_pool_reserves = inst_79972;
var ___$6 = inst_79981;
var pool_info = inst_79962;
var reward_transfers = inst_79980;
var staked2 = inst_79898;
var total_unis = inst_79966;
var lp_decimals = (18);
var lp_transfers_hashes = inst_79989__$1;
var rewards_earned = inst_79977;
var deposit = inst_79924;
return (function (p1__79862_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__79862_SHARP_));
});
})();
var inst_79991__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_79990,inst_79984);
var inst_79992 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_79991__$1);
var inst_79993__$1 = cljs.core.set(inst_79992);
var inst_79994 = cljs.core.count(inst_79993__$1);
var inst_79995 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_79994,(1));
var state_80041__$1 = (function (){var statearr_80082 = state_80041;
(statearr_80082[(15)] = inst_79991__$1);

(statearr_80082[(19)] = inst_79989__$1);

(statearr_80082[(21)] = inst_79993__$1);

(statearr_80082[(24)] = inst_79987__$1);

return statearr_80082;
})();
if(inst_79995){
var statearr_80083_80931 = state_80041__$1;
(statearr_80083_80931[(1)] = (36));

} else {
var statearr_80084_80932 = state_80041__$1;
(statearr_80084_80932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (19))){
var inst_79932 = (state_80041[(10)]);
var inst_79929 = (state_80041[(28)]);
var inst_79924 = (state_80041[(29)]);
var inst_79929__$1 = lpdashboard.ethereum.decode_event_data(inst_79924);
var inst_79930 = inst_79929__$1.pid;
var inst_79931 = lpdashboard.utils.ebn__GT_bn(inst_79930,(0));
var inst_79932__$1 = inst_79931.toNumber();
var inst_79933 = cheff_contract.userInfo(inst_79932__$1,user_address);
var inst_79934 = cljs.core.async.interop.p__GT_c(inst_79933);
var state_80041__$1 = (function (){var statearr_80085 = state_80041;
(statearr_80085[(10)] = inst_79932__$1);

(statearr_80085[(28)] = inst_79929__$1);

return statearr_80085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(21),inst_79934);
} else {
if((state_val_80042 === (11))){
var inst_79898 = (state_80041[(20)]);
var inst_79881 = (state_80041[(23)]);
var inst_79908 = (function (){var staked = inst_79881;
var staked2 = inst_79898;
return (function (p1__79861_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__79861_SHARP_.transactionHash);
});
})();
var inst_79909 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_79910 = cljs.core.async.interop.p__GT_c(inst_79909);
var state_80041__$1 = (function (){var statearr_80086 = state_80041;
(statearr_80086[(39)] = inst_79908);

return statearr_80086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(14),inst_79910);
} else {
if((state_val_80042 === (9))){
var inst_79882 = (state_80041[(40)]);
var inst_79898 = (state_80041[(20)]);
var inst_79881 = (state_80041[(23)]);
var inst_79896 = (state_80041[(2)]);
var inst_79897 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_79882,inst_79896);
var inst_79898__$1 = cljs.core.first(inst_79897);
var inst_79899 = (inst_79881 == null);
var inst_79900 = (inst_79898__$1 == null);
var inst_79901 = ((inst_79899) && (inst_79900));
var inst_79902 = cljs.core.not(inst_79901);
var state_80041__$1 = (function (){var statearr_80087 = state_80041;
(statearr_80087[(20)] = inst_79898__$1);

return statearr_80087;
})();
if(inst_79902){
var statearr_80088_80933 = state_80041__$1;
(statearr_80088_80933[(1)] = (10));

} else {
var statearr_80089_80934 = state_80041__$1;
(statearr_80089_80934[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (5))){
var inst_79881 = (state_80041[(23)]);
var inst_79865 = (state_80041[(9)]);
var inst_79879 = (state_80041[(2)]);
var inst_79880 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_79865,inst_79879);
var inst_79881__$1 = cljs.core.first(inst_79880);
var inst_79882 = (function (){var staked = inst_79881__$1;
return (function (p1__79860_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__79860_SHARP_.transactionHash);
});
})();
var inst_79883 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_79884 = cljs.core.async.interop.p__GT_c(inst_79883);
var state_80041__$1 = (function (){var statearr_80090 = state_80041;
(statearr_80090[(40)] = inst_79882);

(statearr_80090[(23)] = inst_79881__$1);

return statearr_80090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(6),inst_79884);
} else {
if((state_val_80042 === (14))){
var inst_79912 = (state_80041[(34)]);
var inst_79912__$1 = (state_80041[(2)]);
var inst_79913 = (inst_79912__$1 instanceof cljs.core.ExceptionInfo);
var inst_79914 = cljs.core.ex_data(inst_79912__$1);
var inst_79915 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_79914);
var inst_79916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79915,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_79917 = ((inst_79913) && (inst_79916));
var state_80041__$1 = (function (){var statearr_80091 = state_80041;
(statearr_80091[(34)] = inst_79912__$1);

return statearr_80091;
})();
if(cljs.core.truth_(inst_79917)){
var statearr_80092_80935 = state_80041__$1;
(statearr_80092_80935[(1)] = (15));

} else {
var statearr_80093_80936 = state_80041__$1;
(statearr_80093_80936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (26))){
var inst_79952 = (state_80041[(8)]);
var inst_79959 = (function(){throw inst_79952})();
var state_80041__$1 = state_80041;
var statearr_80094_80937 = state_80041__$1;
(statearr_80094_80937[(2)] = inst_79959);

(statearr_80094_80937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (16))){
var inst_79912 = (state_80041[(34)]);
var state_80041__$1 = state_80041;
var statearr_80095_80938 = state_80041__$1;
(statearr_80095_80938[(2)] = inst_79912);

(statearr_80095_80938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (38))){
var inst_80001 = (state_80041[(2)]);
var inst_80002 = lpdashboard.ethereum._LT_user_token_withdrawals(lpdashboard.core.provider,staking_address,user_address);
var state_80041__$1 = (function (){var statearr_80096 = state_80041;
(statearr_80096[(13)] = inst_80001);

return statearr_80096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(39),inst_80002);
} else {
if((state_val_80042 === (30))){
var inst_79969 = (state_80041[(2)]);
var inst_79970 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_80041__$1 = (function (){var statearr_80097 = state_80041;
(statearr_80097[(30)] = inst_79969);

return statearr_80097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(31),inst_79970);
} else {
if((state_val_80042 === (10))){
var inst_79904 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_80041__$1 = state_80041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80041__$1,(13),inst_79904);
} else {
if((state_val_80042 === (18))){
var inst_79927 = console.log("deposit is nil");
var state_80041__$1 = state_80041;
var statearr_80098_80939 = state_80041__$1;
(statearr_80098_80939[(2)] = inst_79927);

(statearr_80098_80939[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (42))){
var inst_80035 = (state_80041[(2)]);
var state_80041__$1 = state_80041;
var statearr_80099_80940 = state_80041__$1;
(statearr_80099_80940[(2)] = inst_80035);

(statearr_80099_80940[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (37))){
var inst_79993 = (state_80041[(21)]);
var inst_79999 = cljs.core.first(inst_79993);
var state_80041__$1 = state_80041;
var statearr_80100_80941 = state_80041__$1;
(statearr_80100_80941[(2)] = inst_79999);

(statearr_80100_80941[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80042 === (8))){
var inst_79886 = (state_80041[(7)]);
var state_80041__$1 = state_80041;
var statearr_80101_80942 = state_80041__$1;
(statearr_80101_80942[(2)] = inst_79886);

(statearr_80101_80942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____0 = (function (){
var statearr_80102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80102[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__);

(statearr_80102[(1)] = (1));

return statearr_80102;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____1 = (function (state_80041){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80041);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80103){var ex__38753__auto__ = e80103;
var statearr_80104_80943 = state_80041;
(statearr_80104_80943[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80041[(4)]))){
var statearr_80105_80944 = state_80041;
(statearr_80105_80944[(1)] = cljs.core.first((state_80041[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80945 = state_80041;
state_80041 = G__80945;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__ = function(state_80041){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____1.call(this,state_80041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80106 = f__38842__auto__();
(statearr_80106[(6)] = c__38841__auto__);

return statearr_80106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80154){
var state_val_80155 = (state_80154[(1)]);
if((state_val_80155 === (7))){
var inst_80120 = (state_80154[(7)]);
var inst_80127 = (function(){throw inst_80120})();
var state_80154__$1 = state_80154;
var statearr_80156_80946 = state_80154__$1;
(statearr_80156_80946[(2)] = inst_80127);

(statearr_80156_80946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (1))){
var inst_80108 = (state_80154[(8)]);
var inst_80107 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_80108__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_80109 = lpdashboard.ethereum.make_erc20(inst_80108__$1);
var state_80154__$1 = (function (){var statearr_80157 = state_80154;
(statearr_80157[(8)] = inst_80108__$1);

(statearr_80157[(9)] = inst_80107);

(statearr_80157[(10)] = inst_80109);

return statearr_80157;
})();
var statearr_80158_80947 = state_80154__$1;
(statearr_80158_80947[(2)] = null);

(statearr_80158_80947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (4))){
var inst_80108 = (state_80154[(8)]);
var inst_80107 = (state_80154[(9)]);
var inst_80110 = (state_80154[(2)]);
var inst_80111 = console.log("no name for lp, stkaing:",inst_80107,inst_80108);
var state_80154__$1 = (function (){var statearr_80159 = state_80154;
(statearr_80159[(11)] = inst_80110);

return statearr_80159;
})();
var statearr_80160_80948 = state_80154__$1;
(statearr_80160_80948[(2)] = inst_80111);

(statearr_80160_80948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (15))){
var inst_80108 = (state_80154[(8)]);
var inst_80107 = (state_80154[(9)]);
var inst_80143 = lpdashboard.core._LT_staked_lp_positions_pjar_redirect(inst_80107,inst_80108,user_address);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80154__$1,(16),inst_80143);
} else {
if((state_val_80155 === (13))){
var inst_80108 = (state_80154[(8)]);
var inst_80107 = (state_80154[(9)]);
var inst_80139 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_80107,inst_80108,user_address);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80154__$1,(14),inst_80139);
} else {
if((state_val_80155 === (6))){
var inst_80120 = (state_80154[(7)]);
var inst_80120__$1 = (state_80154[(2)]);
var inst_80121 = (inst_80120__$1 instanceof cljs.core.ExceptionInfo);
var inst_80122 = cljs.core.ex_data(inst_80120__$1);
var inst_80123 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_80122);
var inst_80124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80123,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_80125 = ((inst_80121) && (inst_80124));
var state_80154__$1 = (function (){var statearr_80161 = state_80154;
(statearr_80161[(7)] = inst_80120__$1);

return statearr_80161;
})();
if(cljs.core.truth_(inst_80125)){
var statearr_80162_80949 = state_80154__$1;
(statearr_80162_80949[(1)] = (7));

} else {
var statearr_80163_80950 = state_80154__$1;
(statearr_80163_80950[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (17))){
var inst_80147 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80154__$1,(18),inst_80147);
} else {
if((state_val_80155 === (3))){
var inst_80133 = (state_80154[(2)]);
var inst_80134 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["contract name:",inst_80133], 0));
var state_80154__$1 = (function (){var statearr_80164 = state_80154;
(statearr_80164[(12)] = inst_80134);

return statearr_80164;
})();
var G__80165_80951 = inst_80133;
switch (G__80165_80951) {
case "LpBar":
var statearr_80166_80953 = state_80154__$1;
(statearr_80166_80953[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_80167_80954 = state_80154__$1;
(statearr_80167_80954[(1)] = (13));


break;
case "pickling Uniswap V2":
var statearr_80168_80955 = state_80154__$1;
(statearr_80168_80955[(1)] = (15));


break;
default:
var statearr_80169_80956 = state_80154__$1;
(statearr_80169_80956[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (12))){
var inst_80137 = (state_80154[(2)]);
var state_80154__$1 = state_80154;
var statearr_80170_80957 = state_80154__$1;
(statearr_80170_80957[(2)] = inst_80137);

(statearr_80170_80957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (2))){
var inst_80109 = (state_80154[(10)]);
var _ = (function (){var statearr_80171 = state_80154;
(statearr_80171[(4)] = cljs.core.cons((5),(state_80154[(4)])));

return statearr_80171;
})();
var inst_80117 = inst_80109.name();
var inst_80118 = cljs.core.async.interop.p__GT_c(inst_80117);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80154__$1,(6),inst_80118);
} else {
if((state_val_80155 === (11))){
var inst_80108 = (state_80154[(8)]);
var inst_80107 = (state_80154[(9)]);
var inst_80135 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_80107,inst_80108,user_address);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80154__$1,(12),inst_80135);
} else {
if((state_val_80155 === (9))){
var inst_80130 = (state_80154[(2)]);
var _ = (function (){var statearr_80173 = state_80154;
(statearr_80173[(4)] = cljs.core.rest((state_80154[(4)])));

return statearr_80173;
})();
var state_80154__$1 = state_80154;
var statearr_80174_80958 = state_80154__$1;
(statearr_80174_80958[(2)] = inst_80130);

(statearr_80174_80958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (5))){
var _ = (function (){var statearr_80175 = state_80154;
(statearr_80175[(4)] = cljs.core.rest((state_80154[(4)])));

return statearr_80175;
})();
var state_80154__$1 = state_80154;
var ex80172 = (state_80154__$1[(2)]);
var statearr_80176_80959 = state_80154__$1;
(statearr_80176_80959[(5)] = ex80172);


if((ex80172 instanceof Error)){
var statearr_80177_80960 = state_80154__$1;
(statearr_80177_80960[(1)] = (4));

(statearr_80177_80960[(5)] = null);

} else {
throw ex80172;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (14))){
var inst_80141 = (state_80154[(2)]);
var state_80154__$1 = state_80154;
var statearr_80178_80961 = state_80154__$1;
(statearr_80178_80961[(2)] = inst_80141);

(statearr_80178_80961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (16))){
var inst_80145 = (state_80154[(2)]);
var state_80154__$1 = state_80154;
var statearr_80179_80962 = state_80154__$1;
(statearr_80179_80962[(2)] = inst_80145);

(statearr_80179_80962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (10))){
var inst_80152 = (state_80154[(2)]);
var state_80154__$1 = state_80154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80154__$1,inst_80152);
} else {
if((state_val_80155 === (18))){
var inst_80149 = (state_80154[(2)]);
var state_80154__$1 = state_80154;
var statearr_80180_80963 = state_80154__$1;
(statearr_80180_80963[(2)] = inst_80149);

(statearr_80180_80963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80155 === (8))){
var inst_80120 = (state_80154[(7)]);
var state_80154__$1 = state_80154;
var statearr_80181_80964 = state_80154__$1;
(statearr_80181_80964[(2)] = inst_80120);

(statearr_80181_80964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____0 = (function (){
var statearr_80182 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80182[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__);

(statearr_80182[(1)] = (1));

return statearr_80182;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____1 = (function (state_80154){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80154);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80183){var ex__38753__auto__ = e80183;
var statearr_80184_80965 = state_80154;
(statearr_80184_80965[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80154[(4)]))){
var statearr_80185_80966 = state_80154;
(statearr_80185_80966[(1)] = cljs.core.first((state_80154[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80967 = state_80154;
state_80154 = G__80967;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__ = function(state_80154){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____1.call(this,state_80154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80186 = f__38842__auto__();
(statearr_80186[(6)] = c__38841__auto__);

return statearr_80186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.make_dst = (function lpdashboard$core$make_dst(dst,token,txhash){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dst","dst",844682948),dst,new cljs.core.Keyword(null,"txhash","txhash",149174990),txhash,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.staking_txs = (function lpdashboard$core$staking_txs(staked_token,staking_address,account_state){
var lp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(account_state),staked_token);
var txs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80187_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__80187_SHARP_),staking_address);
}),new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(lp));
return txs;
});
/**
 * This is intended for debuggin a possibly
 *   broken user stake. It takes the problematic
 *   stkaing contract, and a full account state,
 *   and returns the staking positions on that
 *   contract.
 */
lpdashboard.core._LT_staking_situation = (function lpdashboard$core$_LT_staking_situation(staked_token,staking_address,account_state){
var tx = cljs.core.first(lpdashboard.core.staking_txs(staked_token,staking_address,account_state));
var dest = lpdashboard.core.make_dst(staking_address,staked_token,new cljs.core.Keyword(null,"txhash","txhash",149174990).cljs$core$IFn$_invoke$arity$1(tx));
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80193){
var state_val_80194 = (state_80193[(1)]);
if((state_val_80194 === (1))){
var inst_80188 = new cljs.core.Keyword(null,"user-address","user-address",-2070986675).cljs$core$IFn$_invoke$arity$1(account_state);
var inst_80189 = lpdashboard.core._LT_staked_lp_positions(dest,inst_80188);
var state_80193__$1 = state_80193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80193__$1,(2),inst_80189);
} else {
if((state_val_80194 === (2))){
var inst_80191 = (state_80193[(2)]);
var state_80193__$1 = state_80193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80193__$1,inst_80191);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____0 = (function (){
var statearr_80195 = [null,null,null,null,null,null,null];
(statearr_80195[(0)] = lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__);

(statearr_80195[(1)] = (1));

return statearr_80195;
});
var lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____1 = (function (state_80193){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80193);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80196){var ex__38753__auto__ = e80196;
var statearr_80197_80968 = state_80193;
(statearr_80197_80968[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80193[(4)]))){
var statearr_80198_80969 = state_80193;
(statearr_80198_80969[(1)] = cljs.core.first((state_80193[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80970 = state_80193;
state_80193 = G__80970;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__ = function(state_80193){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____1.call(this,state_80193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_staking_situation_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80199 = f__38842__auto__();
(statearr_80199[(6)] = c__38841__auto__);

return statearr_80199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80213){
var state_val_80214 = (state_80213[(1)]);
if((state_val_80214 === (1))){
var inst_80200 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_80213__$1 = state_80213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80213__$1,(2),inst_80200);
} else {
if((state_val_80214 === (2))){
var inst_80202 = (state_80213[(7)]);
var inst_80202__$1 = (state_80213[(2)]);
var inst_80203 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_80204 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_80202__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_80202__$1));
var inst_80205 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80203,inst_80204);
var inst_80206 = lpdashboard.thegraph._LT_user_lps(user_address,inst_80205);
var state_80213__$1 = (function (){var statearr_80215 = state_80213;
(statearr_80215[(7)] = inst_80202__$1);

return statearr_80215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80213__$1,(3),inst_80206);
} else {
if((state_val_80214 === (3))){
var inst_80202 = (state_80213[(7)]);
var inst_80208 = (state_80213[(2)]);
var inst_80209 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_80210 = [user_address,inst_80202,inst_80208];
var inst_80211 = cljs.core.PersistentHashMap.fromArrays(inst_80209,inst_80210);
var state_80213__$1 = state_80213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80213__$1,inst_80211);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____0 = (function (){
var statearr_80216 = [null,null,null,null,null,null,null,null];
(statearr_80216[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__);

(statearr_80216[(1)] = (1));

return statearr_80216;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____1 = (function (state_80213){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80213);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80217){var ex__38753__auto__ = e80217;
var statearr_80218_80971 = state_80213;
(statearr_80218_80971[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80213[(4)]))){
var statearr_80219_80972 = state_80213;
(statearr_80219_80972[(1)] = cljs.core.first((state_80213[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80973 = state_80213;
state_80213 = G__80973;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__ = function(state_80213){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____1.call(this,state_80213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80220 = f__38842__auto__();
(statearr_80220[(6)] = c__38841__auto__);

return statearr_80220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_graph_uniswap_pool_dailys = (function lpdashboard$core$_LT_graph_uniswap_pool_dailys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80974 = arguments.length;
var i__4737__auto___80975 = (0);
while(true){
if((i__4737__auto___80975 < len__4736__auto___80974)){
args__4742__auto__.push((arguments[i__4737__auto___80975]));

var G__80976 = (i__4737__auto___80975 + (1));
i__4737__auto___80975 = G__80976;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lpdashboard.core._LT_graph_uniswap_pool_dailys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lpdashboard.core._LT_graph_uniswap_pool_dailys.cljs$core$IFn$_invoke$arity$variadic = (function (pair_address,p__80224){
var map__80225 = p__80224;
var map__80225__$1 = (((((!((map__80225 == null))))?(((((map__80225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80225):map__80225);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80225__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(365));
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80289){
var state_val_80290 = (state_80289[(1)]);
if((state_val_80290 === (1))){
var inst_80227 = (function (){return (function (p1__80221_SHARP_){
return (lpdashboard.utils.bn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(p1__80221_SHARP_)) > 0.0);
});
})();
var inst_80228 = lpdashboard.thegraph._LT_pair_days(pair_address);
var state_80289__$1 = (function (){var statearr_80291 = state_80289;
(statearr_80291[(7)] = inst_80227);

return statearr_80291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80289__$1,(2),inst_80228);
} else {
if((state_val_80290 === (2))){
var inst_80227 = (state_80289[(7)]);
var inst_80237 = (state_80289[(8)]);
var inst_80234 = (state_80289[(9)]);
var inst_80230 = (state_80289[(2)]);
var inst_80231 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_80230);
var inst_80232 = new cljs.core.Keyword(null,"pairDayDatas","pairDayDatas",1515724059).cljs$core$IFn$_invoke$arity$1(inst_80231);
var inst_80233 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(inst_80227,inst_80232);
var inst_80234__$1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,inst_80233);
var inst_80235 = cljs.core.first(inst_80234__$1);
var inst_80236 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(inst_80235);
var inst_80237__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_80236);
var inst_80238 = cljs.core.first(inst_80234__$1);
var inst_80239 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(inst_80238);
var inst_80240 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_80239);
var inst_80241 = cljs.core.first(inst_80234__$1);
var inst_80242 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(inst_80241);
var inst_80243 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(inst_80242);
var inst_80244 = cljs.core.first(inst_80234__$1);
var inst_80245 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(inst_80244);
var inst_80246 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(inst_80245);
var inst_80247 = cljs.core.count(inst_80234__$1);
var inst_80248 = lpdashboard.thegraph._LT_token_days(inst_80237__$1);
var state_80289__$1 = (function (){var statearr_80292 = state_80289;
(statearr_80292[(10)] = inst_80246);

(statearr_80292[(11)] = inst_80247);

(statearr_80292[(12)] = inst_80240);

(statearr_80292[(8)] = inst_80237__$1);

(statearr_80292[(9)] = inst_80234__$1);

(statearr_80292[(13)] = inst_80243);

return statearr_80292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80289__$1,(3),inst_80248);
} else {
if((state_val_80290 === (3))){
var inst_80247 = (state_80289[(11)]);
var inst_80240 = (state_80289[(12)]);
var inst_80234 = (state_80289[(9)]);
var inst_80250 = (state_80289[(2)]);
var inst_80251 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_80250);
var inst_80252 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_80251);
var inst_80253 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_80247,inst_80252);
var inst_80254 = cljs.core.count(inst_80234);
var inst_80255 = lpdashboard.thegraph._LT_token_days(inst_80240);
var state_80289__$1 = (function (){var statearr_80293 = state_80289;
(statearr_80293[(14)] = inst_80253);

(statearr_80293[(15)] = inst_80254);

return statearr_80293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80289__$1,(4),inst_80255);
} else {
if((state_val_80290 === (4))){
var inst_80253 = (state_80289[(14)]);
var inst_80246 = (state_80289[(10)]);
var inst_80254 = (state_80289[(15)]);
var inst_80240 = (state_80289[(12)]);
var inst_80237 = (state_80289[(8)]);
var inst_80234 = (state_80289[(9)]);
var inst_80243 = (state_80289[(13)]);
var inst_80257 = (state_80289[(2)]);
var inst_80258 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_80257);
var inst_80259 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_80258);
var inst_80260 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_80254,inst_80259);
var inst_80261 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((0),inst_80234);
var inst_80262 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((0),inst_80253);
var inst_80263 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((0),inst_80260);
var inst_80264 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),inst_80261);
var inst_80265 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"dailyVolumeUSD","dailyVolumeUSD",957365427));
var inst_80266 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80265,inst_80261);
var inst_80267 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779));
var inst_80268 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80267,inst_80261);
var inst_80269 = (function (){var token1_dailys = inst_80263;
var x = (0);
var token0_dailys = inst_80262;
var token1_symbol = inst_80246;
var token0_symbol = inst_80243;
var token1_address = inst_80240;
var token0_address = inst_80237;
var pool_dailys = inst_80261;
var timestamps = inst_80264;
var reserves_usd = inst_80268;
var volumes_usd = inst_80266;
return (function (v,r){
return bignumber.core._SLASH_(v,r);
});
})();
var inst_80270 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(inst_80269,inst_80266,inst_80268);
var inst_80271 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834));
var inst_80272 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80271,inst_80261);
var inst_80273 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773));
var inst_80274 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80273,inst_80261);
var inst_80275 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236));
var inst_80276 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80275,inst_80261);
var inst_80277 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"dailyVolumeToken0","dailyVolumeToken0",193065224));
var inst_80278 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80277,inst_80261);
var inst_80279 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"dailyVolumeToken1","dailyVolumeToken1",-1512254583));
var inst_80280 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80279,inst_80261);
var inst_80281 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672));
var inst_80282 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80281,inst_80262);
var inst_80283 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.utils.bn,new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672));
var inst_80284 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80283,inst_80263);
var inst_80285 = [new cljs.core.Keyword(null,"token1-reserves","token1-reserves",76142406),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"token0-reserves","token0-reserves",1073804075),new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035),new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394),new cljs.core.Keyword(null,"timestamps","timestamps",-821058930),new cljs.core.Keyword(null,"volumes-usd","volumes-usd",-632371276),new cljs.core.Keyword(null,"token0-volumes","token0-volumes",-1835656651),new cljs.core.Keyword(null,"token1-volumes","token1-volumes",1095245014),new cljs.core.Keyword(null,"token1-prices","token1-prices",1390520059),new cljs.core.Keyword(null,"token0-prices","token0-prices",-1681114532),new cljs.core.Keyword(null,"total-supplies","total-supplies",558876925),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685)];
var inst_80286 = [inst_80276,inst_80243,inst_80240,inst_80237,inst_80274,inst_80270,inst_80268,inst_80264,inst_80266,inst_80278,inst_80280,inst_80284,inst_80282,inst_80272,inst_80246];
var inst_80287 = cljs.core.PersistentHashMap.fromArrays(inst_80285,inst_80286);
var state_80289__$1 = state_80289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80289__$1,inst_80287);
} else {
return null;
}
}
}
}
});
return (function() {
var lpdashboard$core$state_machine__38750__auto__ = null;
var lpdashboard$core$state_machine__38750__auto____0 = (function (){
var statearr_80294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80294[(0)] = lpdashboard$core$state_machine__38750__auto__);

(statearr_80294[(1)] = (1));

return statearr_80294;
});
var lpdashboard$core$state_machine__38750__auto____1 = (function (state_80289){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80289);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80295){var ex__38753__auto__ = e80295;
var statearr_80296_80977 = state_80289;
(statearr_80296_80977[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80289[(4)]))){
var statearr_80297_80978 = state_80289;
(statearr_80297_80978[(1)] = cljs.core.first((state_80289[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80979 = state_80289;
state_80289 = G__80979;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$state_machine__38750__auto__ = function(state_80289){
switch(arguments.length){
case 0:
return lpdashboard$core$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$state_machine__38750__auto____1.call(this,state_80289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$state_machine__38750__auto____0;
lpdashboard$core$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$state_machine__38750__auto____1;
return lpdashboard$core$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80298 = f__38842__auto__();
(statearr_80298[(6)] = c__38841__auto__);

return statearr_80298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}));

(lpdashboard.core._LT_graph_uniswap_pool_dailys.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lpdashboard.core._LT_graph_uniswap_pool_dailys.cljs$lang$applyTo = (function (seq80222){
var G__80223 = cljs.core.first(seq80222);
var seq80222__$1 = cljs.core.next(seq80222);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80223,seq80222__$1);
}));

lpdashboard.core.make_line_points = (function lpdashboard$core$make_line_points(dailys){
var token0_symbol = new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(dailys);
var token1_symbol = new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(dailys);
var init_ts = cljs.core.last(new cljs.core.Keyword(null,"total-supplies","total-supplies",558876925).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var init_reservesUSD = cljs.core.last(new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var init_reserve0 = cljs.core.last(new cljs.core.Keyword(null,"token0-reserves","token0-reserves",1073804075).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var init_reserve1 = cljs.core.last(new cljs.core.Keyword(null,"token1-reserves","token1-reserves",76142406).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var init_token0_price = cljs.core.last(new cljs.core.Keyword(null,"token0-prices","token0-prices",-1681114532).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var init_token1_price = cljs.core.last(new cljs.core.Keyword(null,"token1-prices","token1-prices",1390520059).cljs$core$IFn$_invoke$arity$1(dailys)).toNumber();
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-token0-price",init_token0_price], 0));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-token1-price",init_token1_price], 0));
var ___$2 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["res0:",init_reserve0], 0));
var ___$3 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["res1:",init_reserve1], 0));
var init_usd = lpdashboard.utils.bn("1.0");
var init_pool_prop = bignumber.core._SLASH_(init_usd,init_reservesUSD);
var init_lp = bignumber.core._STAR_(init_pool_prop,init_ts);
var ___$4 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-lp:",init_lp], 0));
var init_token0 = bignumber.core._STAR_(init_pool_prop,init_reserve0);
var init_token1 = bignumber.core._STAR_(init_pool_prop,init_reserve1);
var ___$5 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-pool-prop:",init_pool_prop], 0));
var ___$6 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-token0:",init_token0], 0));
var ___$7 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init-token1:",init_token1], 0));
return cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic((function (ts,vol,res,ratio,token0_price,token1_price,token0_reserve,token1_reserve,total_supply,voltoken0,voltoken1){
var token0_price_SINGLEQUOTE_ = token0_price.toNumber();
var token1_price_SINGLEQUOTE_ = token1_price.toNumber();
var voltoken0_SINGLEQUOTE_ = voltoken0.toNumber();
var voltoken1_SINGLEQUOTE_ = voltoken1.toNumber();
var current_pool_prop = bignumber.core._SLASH_(init_lp,total_supply);
var current_token0 = bignumber.core._STAR_(current_pool_prop,token0_reserve);
var current_token1 = bignumber.core._STAR_(current_pool_prop,token1_reserve);
var token0_p_ratio = ((token0_price_SINGLEQUOTE_ / init_token0_price) - 1.0);
var token0_p_ratio_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),token0_p_ratio))?(0):token0_p_ratio);
var price0_change = (token0_p_ratio_SINGLEQUOTE_ * (100));
var price1_change = (((token1_price_SINGLEQUOTE_ / init_token1_price) - 1.0) * (100));
var price_divergence = Math.abs((price0_change - price1_change));
var volusd_derived = (bignumber.core._PLUS_(bignumber.core._STAR_(token0_price_SINGLEQUOTE_,voltoken0_SINGLEQUOTE_),bignumber.core._STAR_(token1_price_SINGLEQUOTE_,voltoken1_SINGLEQUOTE_)) / 2.0);
var volderived_res_ratio = (volusd_derived / res.toNumber());
var token0_diff = bignumber.core._(current_token0,init_token0);
var token1_diff = bignumber.core._(current_token1,init_token1);
var init_usd__$1 = ((init_token0 * token0_price_SINGLEQUOTE_) + (init_token1 * token1_price_SINGLEQUOTE_));
var usd_diff_SINGLEQUOTE_ = bignumber.core._STAR_(bignumber.core._PLUS_(bignumber.core._STAR_(token0_price_SINGLEQUOTE_,token0_diff),bignumber.core._STAR_(token1_price_SINGLEQUOTE_,token1_diff)),lpdashboard.utils.bn("1.0"));
var usd_diff = ((usd_diff_SINGLEQUOTE_ / init_usd__$1) * (100));
var ppnl = (1);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"volderived-res-ratio","volderived-res-ratio",566826822),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),new cljs.core.Keyword(null,"current-token0","current-token0",-188541336),new cljs.core.Keyword(null,"token0-reserve","token0-reserve",652874059),new cljs.core.Keyword(null,"price-divergence","price-divergence",-163938709),new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035),new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394),new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674),new cljs.core.Keyword(null,"ppnl","ppnl",1131637937),new cljs.core.Keyword(null,"token1-reserve","token1-reserve",-1999508750),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579),new cljs.core.Keyword(null,"usd-diff","usd-diff",-1677119436),new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"current-pool-prop","current-pool-prop",955435579),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),new cljs.core.Keyword(null,"volume-usd","volume-usd",-871740385),new cljs.core.Keyword(null,"current-token1","current-token1",568361375),new cljs.core.Keyword(null,"volume-usd-derived","volume-usd-derived",1596024383)],[volderived_res_ratio,token0_symbol,(1.0 * current_token0),token0_reserve.toNumber(),price_divergence,ratio.toNumber(),res.toNumber(),token0_price_SINGLEQUOTE_,ppnl,token1_reserve.toNumber(),total_supply.toNumber(),usd_diff,token1_price_SINGLEQUOTE_,lpdashboard.utils.ts__GT_datetime(ts),(1.0 * current_pool_prop),token1_symbol,vol.toNumber(),(1.0 * current_token1),volusd_derived]);
}),new cljs.core.Keyword(null,"timestamps","timestamps",-821058930).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"volumes-usd","volumes-usd",-632371276).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394).cljs$core$IFn$_invoke$arity$1(dailys),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token0-prices","token0-prices",-1681114532).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token1-prices","token1-prices",1390520059).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token0-reserves","token0-reserves",1073804075).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token1-reserves","token1-reserves",76142406).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"total-supplies","total-supplies",558876925).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token0-volumes","token0-volumes",-1835656651).cljs$core$IFn$_invoke$arity$1(dailys),new cljs.core.Keyword(null,"token1-volumes","token1-volumes",1095245014).cljs$core$IFn$_invoke$arity$1(dailys)], 0)));
});
lpdashboard.core.usd_diff = (function lpdashboard$core$usd_diff(accum,p){
var prev_p = cljs.core.last(accum);
var init_reserves_usd = new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394).cljs$core$IFn$_invoke$arity$1(prev_p);
var init_ts = new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(prev_p);
var init_reserve0 = new cljs.core.Keyword(null,"token0-reserve","token0-reserve",652874059).cljs$core$IFn$_invoke$arity$1(prev_p);
var init_reserve1 = new cljs.core.Keyword(null,"token1-reserve","token1-reserve",-1999508750).cljs$core$IFn$_invoke$arity$1(prev_p);
var init_usd = lpdashboard.utils.bn("1.0");
var init_pool_prop = bignumber.core._SLASH_(init_usd,init_reserves_usd);
var init_lp = bignumber.core._STAR_(init_pool_prop,init_ts);
var init_token0 = bignumber.core._STAR_(init_pool_prop,init_reserve0);
var init_token1 = bignumber.core._STAR_(init_pool_prop,init_reserve1);
var token0_reserve = new cljs.core.Keyword(null,"token0-reserve","token0-reserve",652874059).cljs$core$IFn$_invoke$arity$1(p);
var token1_reserve = new cljs.core.Keyword(null,"token1-reserve","token1-reserve",-1999508750).cljs$core$IFn$_invoke$arity$1(p);
var current_pool_prop = bignumber.core._SLASH_(init_lp,new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(p));
var current_token0 = bignumber.core._STAR_(current_pool_prop,token0_reserve);
var current_token1 = bignumber.core._STAR_(current_pool_prop,token1_reserve);
var token0_price = new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674).cljs$core$IFn$_invoke$arity$1(p);
var token1_price = new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195).cljs$core$IFn$_invoke$arity$1(p);
var token0_diff = bignumber.core._(current_token0,init_token0);
var token1_diff = bignumber.core._(current_token1,init_token1);
var init_usd__$1 = ((init_token0 * token0_price) + (init_token1 * token1_price));
var usd_diff_SINGLEQUOTE_ = bignumber.core._STAR_(bignumber.core._PLUS_(bignumber.core._STAR_(token0_price,token0_diff),bignumber.core._STAR_(token1_price,token1_diff)),lpdashboard.utils.bn("1.0"));
var usd_diff = ((usd_diff_SINGLEQUOTE_ / init_usd__$1) * (100));
var p_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd-diff-d2d","usd-diff-d2d",81751640),usd_diff_SINGLEQUOTE_], null));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,p_SINGLEQUOTE_);
});
lpdashboard.core.add_daily_pnl = (function lpdashboard$core$add_daily_pnl(linepoints){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.usd_diff,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.first(linepoints),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd-diff-d2d","usd-diff-d2d",81751640),0.0], null))], null),cljs.core.rest(linepoints));
});
lpdashboard.core.hover_layer = (function lpdashboard$core$hover_layer(y_field){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index.timestamp",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),"index"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(15)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),false,new cljs.core.Keyword(null,"format","format",-1306924766),""], null)], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"format","format",-1306924766),",.2f"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index.timestamp",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),"index"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"rule",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.5], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"single",new cljs.core.Keyword(null,"on","on",173873944),"mousemove",new cljs.core.Keyword(null,"encodings","encodings",228644879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x"], null),new cljs.core.Keyword(null,"clear","clear",1877104959),"mouseout",new cljs.core.Keyword(null,"nearest","nearest",1176353890),true], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"point"], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null);
});
lpdashboard.core.line_layer = (function lpdashboard$core$line_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80980 = arguments.length;
var i__4737__auto___80981 = (0);
while(true){
if((i__4737__auto___80981 < len__4736__auto___80980)){
args__4742__auto__.push((arguments[i__4737__auto___80981]));

var G__80982 = (i__4737__auto___80981 + (1));
i__4737__auto___80981 = G__80982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lpdashboard.core.line_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lpdashboard.core.line_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__80302){
var map__80303 = p__80302;
var map__80303__$1 = (((((!((map__80303 == null))))?(((((map__80303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80303):map__80303);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80303__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80303__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80303__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"format","format",-1306924766),""], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"scale","scale",-230427353),(cljs.core.truth_((function (){var and__4115__auto__ = y_min;
if(cljs.core.truth_(and__4115__auto__)){
return y_max;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_min,y_max], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),",.4f"], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null),lpdashboard.core.hover_layer(y_field))], null);
}));

(lpdashboard.core.line_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lpdashboard.core.line_layer.cljs$lang$applyTo = (function (seq80299){
var G__80300 = cljs.core.first(seq80299);
var seq80299__$1 = cljs.core.next(seq80299);
var G__80301 = cljs.core.first(seq80299__$1);
var seq80299__$2 = cljs.core.next(seq80299__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80300,G__80301,seq80299__$2);
}));

lpdashboard.core.make_line_plot_concat = (function lpdashboard$core$make_line_plot_concat(line_points){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#111",new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tickColor","tickColor",1966850431),"#111",new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"resolve","resolve",-1584445482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),"independent"], null)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"type","type",1174270348),"temporal"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.line_layer(new cljs.core.Keyword(null,"volume-usd-derived","volume-usd-derived",1596024383),"Volumes (USD)"),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394),"Reserves (USD)"),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"volderived-res-ratio","volderived-res-ratio",566826822),"Ratio V / R"),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(cljs.core.first(line_points)))," Price"].join('')),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(cljs.core.first(line_points)))," Price"].join('')),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"price-divergence","price-divergence",-163938709),"Price Divergence %"),lpdashboard.core.line_layer(new cljs.core.Keyword(null,"usd-diff-d2d","usd-diff-d2d",81751640),"PNL vs HODL daily %"),lpdashboard.core.line_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usd-diff","usd-diff",-1677119436),"PnL vs HODL %",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true], 0))], null)], null);
});
lpdashboard.core.whale_layer = (function lpdashboard$core$whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80983 = arguments.length;
var i__4737__auto___80984 = (0);
while(true){
if((i__4737__auto___80984 < len__4736__auto___80983)){
args__4742__auto__.push((arguments[i__4737__auto___80984]));

var G__80985 = (i__4737__auto___80984 + (1));
i__4737__auto___80984 = G__80985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__80311){
var map__80312 = p__80311;
var map__80312__$1 = (((((!((map__80312 == null))))?(((((map__80312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80312):map__80312);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80312__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80312__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80312__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80312__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11332733),(11333299)], null),new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(13),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(cljs.core.truth_((function (){var and__4115__auto__ = y_min;
if(cljs.core.truth_(and__4115__auto__)){
return y_max;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_min,y_max], null),new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(y_log)?"log":"linear"),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"account",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x554b","0x909b","DAI/USD"], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#120078","#f05454","#ffa62b"], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(lpdashboard.core.whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lpdashboard.core.whale_layer.cljs$lang$applyTo = (function (seq80308){
var G__80309 = cljs.core.first(seq80308);
var seq80308__$1 = cljs.core.next(seq80308);
var G__80310 = cljs.core.first(seq80308__$1);
var seq80308__$2 = cljs.core.next(seq80308__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80309,G__80310,seq80308__$2);
}));

lpdashboard.core.make_whale_plot_concat = (function lpdashboard$core$make_whale_plot_concat(line_points){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"resolve","resolve",-1584445482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),"independent"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Account Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),0.99,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.02,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false], 0)),lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic("total-borrow-prop","Borrow % change",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.3,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false], 0)),lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic("total-collateral-prop","Collateral % change",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.3,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false], 0)),lpdashboard.core.whale_layer.cljs$core$IFn$_invoke$arity$variadic("usd-price","DAI/USD",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),0.97,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.25,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true], 0))], null)], null);
});
lpdashboard.core.historic_whale_layer = (function lpdashboard$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80986 = arguments.length;
var i__4737__auto___80987 = (0);
while(true){
if((i__4737__auto___80987 < len__4736__auto___80986)){
args__4742__auto__.push((arguments[i__4737__auto___80987]));

var G__80988 = (i__4737__auto___80987 + (1));
i__4737__auto___80987 = G__80988;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__80319){
var map__80320 = p__80319;
var map__80320__$1 = (((((!((map__80320 == null))))?(((((map__80320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80320):map__80320);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80320__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80320__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80320__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80320__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"domain","domain",1847214937),(cljs.core.truth_((function (){var and__4115__auto__ = y_min;
if(cljs.core.truth_(and__4115__auto__)){
return y_max;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_min,y_max], null):cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(y_log)?"symlog":"linear"),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(lpdashboard.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lpdashboard.core.historic_whale_layer.cljs$lang$applyTo = (function (seq80316){
var G__80317 = cljs.core.first(seq80316);
var seq80316__$1 = cljs.core.next(seq80316);
var G__80318 = cljs.core.first(seq80316__$1);
var seq80316__$2 = cljs.core.next(seq80316__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80317,G__80318,seq80316__$2);
}));

lpdashboard.core.make_whale_plot_concat_historic = (function lpdashboard$core$make_whale_plot_concat_historic(line_points){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"value","value",305978217),"USD Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(140000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(140000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(30000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(20000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(18000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true], 0))], null)], null);
});
lpdashboard.core.make_whale_plot_concat_mistake = (function lpdashboard$core$make_whale_plot_concat_mistake(line_points){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),1.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"value","value",305978217),"USD Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(140000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(140000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),lpdashboard.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(140000000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true], 0))], null)], null);
});
lpdashboard.core.lp_proportion = (function lpdashboard$core$lp_proportion(s){
return bignumber.core._SLASH_(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(s));
});
lpdashboard.core.abridged_snapshot = (function lpdashboard$core$abridged_snapshot(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datetime","datetime",494675702),datetime,new cljs.core.Keyword(null,"balances","balances",-1047003019),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token0),token0_balance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token1),token1_balance])], null);
});
lpdashboard.core.snapshot_balances = (function lpdashboard$core$snapshot_balances(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),token0,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),token1,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),token0_balance,new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),token1_balance], null);
});
lpdashboard.core.last_lp_snapshots = (function lpdashboard$core$last_lp_snapshots(snapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),snapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__80327_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__80327_SHARP_);
})),cljs.core.vals(pair_snapshots));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312))(s),new cljs.core.Keyword(null,"pos","pos",-864607220),lpdashboard.core.snapshot_balances(s)], null);
}),last_snapshots);
});
/**
 * Returns most recent snapshot for each LP pair where
 * `gsnapshots` is a coll of LPSnapshots as returned
 *  by `thegraph/<user-lp-snapshots`
 */
lpdashboard.core.most_recent_snapshots = (function lpdashboard$core$most_recent_snapshots(gsnapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),gsnapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__80328_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__80328_SHARP_);
})),cljs.core.vals(pair_snapshots));
return last_snapshots;
});
lpdashboard.core.gposition__GT_pool = (function lpdashboard$core$gposition__GT_pool(gposition){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var pair_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),pair_address,new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null);
});
lpdashboard.core.gposition__GT_token_info = (function lpdashboard$core$gposition__GT_token_info(gposition,token_prices){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var symbol0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token0);
var symbol1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token1);
var name0 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token0);
var name1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token1);
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token0);
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token1);
var token0_price = (function (){var fexpr__80329 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__80329.cljs$core$IFn$_invoke$arity$1 ? fexpr__80329.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__80329.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__80330 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__80330.cljs$core$IFn$_invoke$arity$1 ? fexpr__80330.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__80330.call(null,token_prices));
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol0,new cljs.core.Keyword(null,"address","address",559499426),address0,new cljs.core.Keyword(null,"name","name",1843675177),name0,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals0,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token0_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token0_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token0_price)], null)], null)], null),address1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol1,new cljs.core.Keyword(null,"address","address",559499426),address1,new cljs.core.Keyword(null,"name","name",1843675177),name1,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals1,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token1_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token1_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token1_price)], null)], null)], null)]);
});
lpdashboard.core.gposition__GT_lpsnapshot = (function lpdashboard$core$gposition__GT_lpsnapshot(gposition,staked_positions){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var reserve0 = new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair);
var reserve1 = new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair);
var total_shares = new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair);
var user_shares = new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(gposition);
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lp_address,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__80331_SHARP_));
}),staked_positions);
var lp_stakes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80332_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__80332_SHARP_),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(s));
}),relevant_stakes)], 0)),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),(cljs.core.truth_(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s))], null)], null):cljs.core.PersistentVector.EMPTY)], null);
}),relevant_stakes);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),lpdashboard.utils.make_unix_ts(),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),total_shares,new cljs.core.Keyword(null,"reserves","reserves",-1935017122),cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,reserve0,address1,reserve1])], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),user_shares,new cljs.core.Keyword(null,"staked","staked",-1857531165),lp_stakes], null);
});
lpdashboard.core.make_lp = (function lpdashboard$core$make_lp(gposition,staked_positions,mints,burns){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),lp_address,new cljs.core.Keyword(null,"excahnge","excahnge",2142352275),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null),new cljs.core.Keyword(null,"unkown-destinations","unkown-destinations",386546499),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80333_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__80333_SHARP_),lp_address);
}),staked_positions)], 0)),new cljs.core.Keyword(null,"mints","mints",-278208376),mints,new cljs.core.Keyword(null,"burns","burns",1858509067),burns,new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.gposition__GT_lpsnapshot(gposition,staked_positions)], null)], null)]);
});
/**
 * Makes an initial user state from a map of
 *   the most recent avail `graph-snapshots`
 *   as returned by `<graph-uniswap-positions``
 */
lpdashboard.core.make_state = (function lpdashboard$core$make_state(graph_positions,staked_positions,token_info,mints,burns){
var user_address = new cljs.core.Keyword(null,"user-address","user-address",-2070986675).cljs$core$IFn$_invoke$arity$1(graph_positions);
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(graph_positions);
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80334_SHARP_){
return lpdashboard.core.make_lp(p1__80334_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__80334_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__80334_SHARP_))));
}),positions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),user_address,new cljs.core.Keyword(null,"token-info","token-info",-589167623),token_info,new cljs.core.Keyword(null,"lps","lps",2143562451),snapshot_lps], null);
});
lpdashboard.core.get_current_earned = (function lpdashboard$core$get_current_earned(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qty = new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qty_SINGLEQUOTE_ = (cljs.core.truth_(qty)?qty:(new module$node_modules$bignumber_DOT_js$bignumber("0")));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),qty_SINGLEQUOTE_,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
});
lpdashboard.core.token_claimed_from_contract = (function lpdashboard$core$token_claimed_from_contract(rewards_map){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(rewards_map);
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(rewards_map));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.all_claims_for_contract = (function lpdashboard$core$all_claims_for_contract(rewards_maps){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_claimed_from_contract,rewards_maps);
});
lpdashboard.core.all_snapshot_claimed = (function lpdashboard$core$all_snapshot_claimed(snapshot){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.all_claims_for_contract,new cljs.core.Keyword(null,"rewards","rewards",-1173924062)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot)));
});
lpdashboard.core.get_current_claimed = (function lpdashboard$core$get_current_claimed(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot))))));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.lp_position_map_example = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 2, ["MTA",3998.584402,"WETH",12.744], null),new cljs.core.Keyword(null,"reward","reward",-887240948),new cljs.core.PersistentArrayMap(null, 1, ["MTA",824.8436457935455], null),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, ["MTA",2500.5402,"WETH",20.744], null),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.PersistentArrayMap(null, 1, ["ETH",0.0021], null)], null);
lpdashboard.core.token_symbol = (function lpdashboard$core$token_symbol(token_address,token_info){
if((token_address == null)){
return token_address;
} else {
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,clojure.string.lower_case(token_address)));
var or__4126__auto__ = symbol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return token_address;
}
}
});
lpdashboard.core.minted_lp = (function lpdashboard$core$minted_lp(lp_position){
return null;
});
lpdashboard.core.burned_lp = (function lpdashboard$core$burned_lp(lp_position){
return null;
});
lpdashboard.core.tokens_deposited = (function lpdashboard$core$tokens_deposited(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deposits","deposits",-1544951296),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80338_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__80338_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80339_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__80339_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.tokens_withdrawn = (function lpdashboard$core$tokens_withdrawn(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80340_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__80340_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80341_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__80341_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.eth_fees = (function lpdashboard$core$eth_fees(parsed_tx){
var gas_price = new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var gas_used = new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var eth_paid = bignumber.core._STAR_(gas_used,gas_price);
return eth_paid;
});
lpdashboard.core.fees_paid = (function lpdashboard$core$fees_paid(lp_position){
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var minting_fees = ((cljs.core.empty_QMARK_(mints))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,mints)));
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var burning_fees = ((cljs.core.empty_QMARK_(burns))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,burns)));
return bignumber.core._PLUS_(burning_fees,minting_fees);
});
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__80342){
var vec__80343 = p__80342;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80343,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80343,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token_data),cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(token_data))]);
});
lpdashboard.core.lp_prices = (function lpdashboard$core$lp_prices(lp_position,token_info){
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var earned = lpdashboard.core.all_snapshot_claimed(latest_snapshot);
var rewards_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),earned);
var all_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pool_tokens,rewards_tokens));
return cljs.core.select_keys(token_info,all_tokens);
});
lpdashboard.core.symbol__GT_price = (function lpdashboard$core$symbol__GT_price(symbol,token_prices,vs_price){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80346_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),clojure.string.upper_case(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__80346_SHARP_)));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80347_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__80347_SHARP_),lpdashboard.core.symbol__GT_price(p1__80347_SHARP_,token_prices,currency));
}),rewarded_currencies)));
if(cljs.core.truth_(res.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0"));
} else {
return res;
}
});
lpdashboard.core.tokens_at_prices = (function lpdashboard$core$tokens_at_prices(tokens,token_prices){
var reward_tokens = cljs.core.keys(tokens);
var tokens_usd = lpdashboard.core.rewards_in_currency(tokens,"usd",token_prices);
var tokens_eth = lpdashboard.core.rewards_in_currency(tokens,"eth",token_prices);
return new cljs.core.PersistentArrayMap(null, 2, ["USD",tokens_usd,"ETH",tokens_eth], null);
});
lpdashboard.core.gas_at_prices = (function lpdashboard$core$gas_at_prices(fees_paid,token_prices){
return new cljs.core.PersistentArrayMap(null, 2, ["ETH",fees_paid,"USD",bignumber.core._STAR_(fees_paid,lpdashboard.core.symbol__GT_price("WETH",token_prices,"usd"))], null);
});
lpdashboard.core.lp_pnl = (function lpdashboard$core$lp_pnl(diffs,total_fees,rewards,token_prices){
var pool_pnl = lpdashboard.core.tokens_at_prices(diffs,token_prices);
var rewards__$1 = lpdashboard.core.tokens_at_prices(rewards,token_prices);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tf:",total_fees], 0));
var gas_costs = lpdashboard.core.gas_at_prices(total_fees,token_prices);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),pool_pnl,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards__$1,new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),gas_costs,new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pool_pnl,rewards__$1], 0)),gas_costs], 0))], null);
});
lpdashboard.core.get_minted = (function lpdashboard$core$get_minted(lp_position){
var mints = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
if(cljs.core.empty_QMARK_(mints)){
return (new module$node_modules$bignumber_DOT_js$bignumber((0)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,mints);
}
});
lpdashboard.core.get_burned = (function lpdashboard$core$get_burned(lp_position){
var mints = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
if(cljs.core.empty_QMARK_(mints)){
return (new module$node_modules$bignumber_DOT_js$bignumber((0)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,mints);
}
});
lpdashboard.core.wallet_lp_tokens = (function lpdashboard$core$wallet_lp_tokens(lp_position){
return new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position)));
});
lpdashboard.core.open_lp_tokens = (function lpdashboard$core$open_lp_tokens(lp_position){
return bignumber.core._(lpdashboard.core.get_minted(lp_position),lpdashboard.core.get_burned(lp_position));
});
lpdashboard.core.staked_lp_tokens = (function lpdashboard$core$staked_lp_tokens(lp_position){
var staked = new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position)));
var staked_lps = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),staked));
if(cljs.core.empty_QMARK_(staked_lps)){
return (new module$node_modules$bignumber_DOT_js$bignumber((0)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,staked_lps);
}
});
lpdashboard.core.lp_position_map = (function lpdashboard$core$lp_position_map(lp_position,token_info){
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80348_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__80348_SHARP_));
}),pool_tokens);
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot)));
var wallet_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var all_staked = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(latest_snapshot)));
var staked_lps = ((cljs.core.empty_QMARK_(all_staked))?(new module$node_modules$bignumber_DOT_js$bignumber((0))):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,all_staked));
var current_lps = bignumber.core._PLUS_(wallet_lps,staked_lps);
var user_mints = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
var minted_lps = ((cljs.core.empty_QMARK_(user_mints))?(new module$node_modules$bignumber_DOT_js$bignumber((0))):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,user_mints));
var user_burns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
var burned_lps = ((cljs.core.empty_QMARK_(user_burns))?(new module$node_modules$bignumber_DOT_js$bignumber((0))):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,user_burns));
var user_lps_SINGLEQUOTE_ = bignumber.core._(minted_lps,burned_lps);
var account_matches = bignumber.core._GT__EQ_(current_lps,user_lps_SINGLEQUOTE_);
var lp_portion = (cljs.core.truth_(bignumber.core._EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0")),pool_lps))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):bignumber.core._SLASH_(user_lps_SINGLEQUOTE_,pool_lps));
var token_reserves = new cljs.core.Keyword(null,"reserves","reserves",-1935017122).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var reserve_shares = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0.00"));
} else {
return x;
}
}),(function (p1__80349_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__80349_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["earned",earned], 0));
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__80350_SHARP_){
return lpdashboard.core.token_symbol(p1__80350_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["earned'",earned_SINGLEQUOTE_], 0));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80351_SHARP_){
return lpdashboard.core.token_symbol(p1__80351_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var ___$2 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewards claimed:",claimed_SINGLEQUOTE_], 0));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var ___$3 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rewards':",rewards_SINGLEQUOTE___$1], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80352_SHARP_){
return lpdashboard.core.token_symbol(p1__80352_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80353_SHARP_){
return lpdashboard.core.token_symbol(p1__80353_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80354_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__80354_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80355_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__80355_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80356_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__80356_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80357_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__80357_SHARP_);
}),token_symbols__$1)));
var total_fees = lpdashboard.core.fees_paid(lp_position);
var relevant_prices = lpdashboard.core.lp_prices(lp_position,token_info);
var pnl = lpdashboard.core.lp_pnl(token_diffs,total_fees,rewards_SINGLEQUOTE___$1,token_info);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"pnl","pnl",-430398483),new cljs.core.Keyword(null,"invested","invested",19182926),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"account-matches","account-matches",1477813622),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"reward-breakdown","reward-breakdown",-697241610),new cljs.core.Keyword(null,"lp-tokens","lp-tokens",-1036932744),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.Keyword(null,"symbols","symbols",1211743)],[new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position)),rewards_SINGLEQUOTE___$1,pnl,total_invested_SINGLEQUOTE_,token_diffs,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.pretty_price,relevant_prices)),total_withdrawals_SINGLEQUOTE_,current,account_matches,total_initial,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"claimed","claimed",-1569508946),claimed_SINGLEQUOTE_,new cljs.core.Keyword(null,"earned","earned",71634193),earned_SINGLEQUOTE_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"minted","minted",-582929155),minted_lps,new cljs.core.Keyword(null,"burned","burned",-477072138),burned_lps,new cljs.core.Keyword(null,"current","current",-1088038603),current_lps,new cljs.core.Keyword(null,"diff","diff",2135942783),bignumber.core._(current_lps,bignumber.core._(minted_lps,burned_lps))], null),new cljs.core.PersistentArrayMap(null, 1, ["ETH",total_fees], null),token_symbols__$1]);
});
lpdashboard.core.make_burn_map = (function lpdashboard$core$make_burn_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.decode_transfer_data,re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80358_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__80358_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__80358_SHARP_)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__80358_SHARP_)),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__80358_SHARP_)))) || (cljs.core.contains_QMARK_(lpdashboard.core.proxys_out,clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__80358_SHARP_)))))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80359_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__80359_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80360_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__80360_SHARP_)));
}),burn_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_burns));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_burns));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core.zapper_in_addresses = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0xeee503b78e96f24c47c9ad8c287990e51697a99c","0x026BdaC2F308C0109A864138CCa1a623F7828F4a","0x775EE938186FddC13bD7C89D24820E1b0758F91D","0x80c5e6908368cb9db503ba968d7ec5a565bfb389"], null);
lpdashboard.core.mint_addresses = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.zapper_in_addresses,lpdashboard.core.address0));
lpdashboard.core.make_mint_map = (function lpdashboard$core$make_mint_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80361_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__80361_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80362_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__80362_SHARP_)))) && (cljs.core.contains_QMARK_(lpdashboard.core.mint_addresses,clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__80362_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__80362_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80363_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__80363_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__80364_SHARP_)));
}),mint_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_mints));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_mints));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core._LT_get_lp_mints = (function lpdashboard$core$_LT_get_lp_mints(lp_pool,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80391){
var state_val_80392 = (state_80391[(1)]);
if((state_val_80392 === (1))){
var inst_80369 = (state_80391[(7)]);
var inst_80367 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80368 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80369__$1 = cljs.core.first(inst_80368);
var inst_80370 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80371 = cljs.core.second(inst_80370);
var inst_80372 = lpdashboard.ethereum._LT_token_decimals(inst_80369__$1);
var state_80391__$1 = (function (){var statearr_80393 = state_80391;
(statearr_80393[(8)] = inst_80371);

(statearr_80393[(9)] = inst_80367);

(statearr_80393[(7)] = inst_80369__$1);

return statearr_80393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80391__$1,(2),inst_80372);
} else {
if((state_val_80392 === (2))){
var inst_80371 = (state_80391[(8)]);
var inst_80374 = (state_80391[(2)]);
var inst_80375 = lpdashboard.ethereum._LT_token_decimals(inst_80371);
var state_80391__$1 = (function (){var statearr_80394 = state_80391;
(statearr_80394[(10)] = inst_80374);

return statearr_80394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80391__$1,(3),inst_80375);
} else {
if((state_val_80392 === (3))){
var inst_80367 = (state_80391[(9)]);
var inst_80377 = (state_80391[(2)]);
var inst_80378 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_80367,user_address);
var state_80391__$1 = (function (){var statearr_80395 = state_80391;
(statearr_80395[(11)] = inst_80377);

return statearr_80395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80391__$1,(4),inst_80378);
} else {
if((state_val_80392 === (4))){
var inst_80371 = (state_80391[(8)]);
var inst_80367 = (state_80391[(9)]);
var inst_80377 = (state_80391[(11)]);
var inst_80380 = (state_80391[(12)]);
var inst_80369 = (state_80391[(7)]);
var inst_80383 = (state_80391[(13)]);
var inst_80374 = (state_80391[(10)]);
var inst_80380__$1 = (state_80391[(2)]);
var inst_80381 = (function (){var pair_address = inst_80367;
var token1_address = inst_80369;
var token2_address = inst_80371;
var token1_decimals = inst_80374;
var token2_decimals = inst_80377;
var mint_transfers = inst_80380__$1;
return (function (p1__80365_SHARP_){
return p1__80365_SHARP_.transactionHash;
});
})();
var inst_80382 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80381,inst_80380__$1);
var inst_80383__$1 = cljs.core.set(inst_80382);
var inst_80384 = lpdashboard.ethereum._LT_get_trxs(inst_80383__$1);
var state_80391__$1 = (function (){var statearr_80396 = state_80391;
(statearr_80396[(12)] = inst_80380__$1);

(statearr_80396[(13)] = inst_80383__$1);

return statearr_80396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80391__$1,(5),inst_80384);
} else {
if((state_val_80392 === (5))){
var inst_80371 = (state_80391[(8)]);
var inst_80367 = (state_80391[(9)]);
var inst_80377 = (state_80391[(11)]);
var inst_80380 = (state_80391[(12)]);
var inst_80369 = (state_80391[(7)]);
var inst_80383 = (state_80391[(13)]);
var inst_80374 = (state_80391[(10)]);
var inst_80386 = (state_80391[(2)]);
var inst_80387 = (function (){var pair_address = inst_80367;
var token1_address = inst_80369;
var token2_address = inst_80371;
var token1_decimals = inst_80374;
var token2_decimals = inst_80377;
var mint_transfers = inst_80380;
var mint_hashes = inst_80383;
var mint_txrs = inst_80386;
return (function (p1__80366_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__80366_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_80388 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80387,inst_80386);
var inst_80389 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_80388);
var state_80391__$1 = state_80391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80391__$1,inst_80389);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____0 = (function (){
var statearr_80397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80397[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__);

(statearr_80397[(1)] = (1));

return statearr_80397;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____1 = (function (state_80391){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80391);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80398){var ex__38753__auto__ = e80398;
var statearr_80399_80989 = state_80391;
(statearr_80399_80989[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80391[(4)]))){
var statearr_80400_80990 = state_80391;
(statearr_80400_80990[(1)] = cljs.core.first((state_80391[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80991 = state_80391;
state_80391 = G__80991;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__ = function(state_80391){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____1.call(this,state_80391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80401 = f__38842__auto__();
(statearr_80401[(6)] = c__38841__auto__);

return statearr_80401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80428){
var state_val_80429 = (state_80428[(1)]);
if((state_val_80429 === (1))){
var inst_80406 = (state_80428[(7)]);
var inst_80404 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80405 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80406__$1 = cljs.core.first(inst_80405);
var inst_80407 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_80408 = cljs.core.second(inst_80407);
var inst_80409 = lpdashboard.ethereum._LT_token_decimals(inst_80406__$1);
var state_80428__$1 = (function (){var statearr_80430 = state_80428;
(statearr_80430[(8)] = inst_80408);

(statearr_80430[(7)] = inst_80406__$1);

(statearr_80430[(9)] = inst_80404);

return statearr_80430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80428__$1,(2),inst_80409);
} else {
if((state_val_80429 === (2))){
var inst_80408 = (state_80428[(8)]);
var inst_80411 = (state_80428[(2)]);
var inst_80412 = lpdashboard.ethereum._LT_token_decimals(inst_80408);
var state_80428__$1 = (function (){var statearr_80431 = state_80428;
(statearr_80431[(10)] = inst_80411);

return statearr_80431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80428__$1,(3),inst_80412);
} else {
if((state_val_80429 === (3))){
var inst_80404 = (state_80428[(9)]);
var inst_80414 = (state_80428[(2)]);
var inst_80415 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_80404,user_address);
var state_80428__$1 = (function (){var statearr_80432 = state_80428;
(statearr_80432[(11)] = inst_80414);

return statearr_80432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80428__$1,(4),inst_80415);
} else {
if((state_val_80429 === (4))){
var inst_80411 = (state_80428[(10)]);
var inst_80408 = (state_80428[(8)]);
var inst_80414 = (state_80428[(11)]);
var inst_80417 = (state_80428[(12)]);
var inst_80406 = (state_80428[(7)]);
var inst_80420 = (state_80428[(13)]);
var inst_80404 = (state_80428[(9)]);
var inst_80417__$1 = (state_80428[(2)]);
var inst_80418 = (function (){var pair_address = inst_80404;
var token1_address = inst_80406;
var token2_address = inst_80408;
var token1_decimals = inst_80411;
var token2_decimals = inst_80414;
var burn_transfers = inst_80417__$1;
return (function (p1__80402_SHARP_){
return p1__80402_SHARP_.transactionHash;
});
})();
var inst_80419 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80418,inst_80417__$1);
var inst_80420__$1 = cljs.core.set(inst_80419);
var inst_80421 = lpdashboard.ethereum._LT_get_trxs(inst_80420__$1);
var state_80428__$1 = (function (){var statearr_80433 = state_80428;
(statearr_80433[(12)] = inst_80417__$1);

(statearr_80433[(13)] = inst_80420__$1);

return statearr_80433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80428__$1,(5),inst_80421);
} else {
if((state_val_80429 === (5))){
var inst_80411 = (state_80428[(10)]);
var inst_80408 = (state_80428[(8)]);
var inst_80414 = (state_80428[(11)]);
var inst_80417 = (state_80428[(12)]);
var inst_80406 = (state_80428[(7)]);
var inst_80420 = (state_80428[(13)]);
var inst_80404 = (state_80428[(9)]);
var inst_80423 = (state_80428[(2)]);
var inst_80424 = (function (){var pair_address = inst_80404;
var token1_address = inst_80406;
var token2_address = inst_80408;
var token1_decimals = inst_80411;
var token2_decimals = inst_80414;
var burn_transfers = inst_80417;
var burn_hashes = inst_80420;
var burn_txrs = inst_80423;
return (function (p1__80403_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__80403_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_80425 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80424,inst_80423);
var inst_80426 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_80425);
var state_80428__$1 = state_80428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80428__$1,inst_80426);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____0 = (function (){
var statearr_80434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80434[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__);

(statearr_80434[(1)] = (1));

return statearr_80434;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____1 = (function (state_80428){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80428);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80435){var ex__38753__auto__ = e80435;
var statearr_80436_80992 = state_80428;
(statearr_80436_80992[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80428[(4)]))){
var statearr_80437_80993 = state_80428;
(statearr_80437_80993[(1)] = cljs.core.first((state_80428[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80994 = state_80428;
state_80428 = G__80994;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__ = function(state_80428){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____1.call(this,state_80428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80438 = f__38842__auto__();
(statearr_80438[(6)] = c__38841__auto__);

return statearr_80438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80447){
var state_val_80448 = (state_80447[(1)]);
if((state_val_80448 === (1))){
var inst_80439 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_80440 = [inst_80439];
var inst_80441 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_80447__$1 = (function (){var statearr_80449 = state_80447;
(statearr_80449[(7)] = inst_80440);

return statearr_80449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80447__$1,(2),inst_80441);
} else {
if((state_val_80448 === (2))){
var inst_80440 = (state_80447[(7)]);
var inst_80443 = (state_80447[(2)]);
var inst_80444 = [inst_80443];
var inst_80445 = cljs.core.PersistentHashMap.fromArrays(inst_80440,inst_80444);
var state_80447__$1 = state_80447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80447__$1,inst_80445);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____0 = (function (){
var statearr_80450 = [null,null,null,null,null,null,null,null];
(statearr_80450[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__);

(statearr_80450[(1)] = (1));

return statearr_80450;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____1 = (function (state_80447){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80447);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80451){var ex__38753__auto__ = e80451;
var statearr_80452_80995 = state_80447;
(statearr_80452_80995[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80447[(4)]))){
var statearr_80453_80996 = state_80447;
(statearr_80453_80996[(1)] = cljs.core.first((state_80447[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80997 = state_80447;
state_80447 = G__80997;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__ = function(state_80447){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____1.call(this,state_80447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80454 = f__38842__auto__();
(statearr_80454[(6)] = c__38841__auto__);

return statearr_80454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_get_user_burns = (function lpdashboard$core$_LT_get_user_burns(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80463){
var state_val_80464 = (state_80463[(1)]);
if((state_val_80464 === (1))){
var inst_80455 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_80456 = [inst_80455];
var inst_80457 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_80463__$1 = (function (){var statearr_80465 = state_80463;
(statearr_80465[(7)] = inst_80456);

return statearr_80465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80463__$1,(2),inst_80457);
} else {
if((state_val_80464 === (2))){
var inst_80456 = (state_80463[(7)]);
var inst_80459 = (state_80463[(2)]);
var inst_80460 = [inst_80459];
var inst_80461 = cljs.core.PersistentHashMap.fromArrays(inst_80456,inst_80460);
var state_80463__$1 = state_80463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80463__$1,inst_80461);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____0 = (function (){
var statearr_80466 = [null,null,null,null,null,null,null,null];
(statearr_80466[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__);

(statearr_80466[(1)] = (1));

return statearr_80466;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____1 = (function (state_80463){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80463);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80467){var ex__38753__auto__ = e80467;
var statearr_80468_80998 = state_80463;
(statearr_80468_80998[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80463[(4)]))){
var statearr_80469_80999 = state_80463;
(statearr_80469_80999[(1)] = cljs.core.first((state_80463[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81000 = state_80463;
state_80463 = G__81000;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__ = function(state_80463){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____1.call(this,state_80463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80470 = f__38842__auto__();
(statearr_80470[(6)] = c__38841__auto__);

return statearr_80470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_user_lp_destinations = (function lpdashboard$core$_LT_user_lp_destinations(snapshots,user_address){
var token_addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),lpdashboard.core.last_lp_snapshots(snapshots));
var destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80476){
var state_val_80477 = (state_80476[(1)]);
if((state_val_80477 === (1))){
var inst_80472 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_80476__$1 = state_80476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80476__$1,(2),inst_80472);
} else {
if((state_val_80477 === (2))){
var inst_80474 = (state_80476[(2)]);
var state_80476__$1 = state_80476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80476__$1,inst_80474);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____0 = (function (){
var statearr_80478 = [null,null,null,null,null,null,null];
(statearr_80478[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__);

(statearr_80478[(1)] = (1));

return statearr_80478;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____1 = (function (state_80476){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80476);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80479){var ex__38753__auto__ = e80479;
var statearr_80480_81001 = state_80476;
(statearr_80480_81001[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80476[(4)]))){
var statearr_80481_81002 = state_80476;
(statearr_80481_81002[(1)] = cljs.core.first((state_80476[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81003 = state_80476;
state_80476 = G__81003;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__ = function(state_80476){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____1.call(this,state_80476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80482 = f__38842__auto__();
(statearr_80482[(6)] = c__38841__auto__);

return statearr_80482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__80471_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__80471_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core.add_stakings = (function lpdashboard$core$add_stakings(){
return null;
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var unique_destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.vals(cljs.core.group_by((function (p1__80483_SHARP_){
return cljs.core.select_keys(p1__80483_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"to","to",192099007)], null));
}),destinations)));
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80496){
var state_val_80497 = (state_80496[(1)]);
if((state_val_80497 === (1))){
var inst_80485 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"stakings","stakings",872334993),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_80486 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_80496__$1 = (function (){var statearr_80498 = state_80496;
(statearr_80498[(7)] = inst_80485);

return statearr_80498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80496__$1,(2),inst_80486);
} else {
if((state_val_80497 === (2))){
var inst_80485 = (state_80496[(7)]);
var inst_80488 = (state_80496[(2)]);
var inst_80489 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_80490 = (function (){return (function (p1__80484_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__80484_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__80484_SHARP_))));
});
})();
var inst_80491 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_80490,destinations);
var inst_80492 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_80493 = [inst_80488,inst_80489,inst_80491,inst_80492];
var inst_80494 = cljs.core.PersistentHashMap.fromArrays(inst_80485,inst_80493);
var state_80496__$1 = state_80496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80496__$1,inst_80494);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____0 = (function (){
var statearr_80499 = [null,null,null,null,null,null,null,null];
(statearr_80499[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__);

(statearr_80499[(1)] = (1));

return statearr_80499;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____1 = (function (state_80496){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80496);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80500){var ex__38753__auto__ = e80500;
var statearr_80501_81004 = state_80496;
(statearr_80501_81004[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80496[(4)]))){
var statearr_80502_81005 = state_80496;
(statearr_80502_81005[(1)] = cljs.core.first((state_80496[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81006 = state_80496;
state_80496 = G__81006;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__ = function(state_80496){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____1.call(this,state_80496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80503 = f__38842__auto__();
(statearr_80503[(6)] = c__38841__auto__);

return statearr_80503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),unique_destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80516){
var state_val_80517 = (state_80516[(1)]);
if((state_val_80517 === (1))){
var inst_80505 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_80506 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_80516__$1 = (function (){var statearr_80518 = state_80516;
(statearr_80518[(7)] = inst_80505);

return statearr_80518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80516__$1,(2),inst_80506);
} else {
if((state_val_80517 === (2))){
var inst_80508 = (state_80516[(8)]);
var inst_80508__$1 = (state_80516[(2)]);
var inst_80509 = lpdashboard.core._LT_user_lp_positions(inst_80508__$1,user_address);
var state_80516__$1 = (function (){var statearr_80519 = state_80516;
(statearr_80519[(8)] = inst_80508__$1);

return statearr_80519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80516__$1,(3),inst_80509);
} else {
if((state_val_80517 === (3))){
var inst_80508 = (state_80516[(8)]);
var inst_80505 = (state_80516[(7)]);
var inst_80511 = (state_80516[(2)]);
var inst_80512 = (function (){var lsnapshots = inst_80505;
var user_destinations = inst_80508;
var user_positions = inst_80511;
return (function (p1__80504_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__80504_SHARP_)));
});
})();
var inst_80513 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_80511,inst_80505);
var inst_80514 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_80512,inst_80513);
var state_80516__$1 = state_80516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80516__$1,inst_80514);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____0 = (function (){
var statearr_80520 = [null,null,null,null,null,null,null,null,null];
(statearr_80520[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__);

(statearr_80520[(1)] = (1));

return statearr_80520;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____1 = (function (state_80516){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80516);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80521){var ex__38753__auto__ = e80521;
var statearr_80522_81007 = state_80516;
(statearr_80522_81007[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80516[(4)]))){
var statearr_80523_81008 = state_80516;
(statearr_80523_81008[(1)] = cljs.core.first((state_80516[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81009 = state_80516;
state_80516 = G__81009;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__ = function(state_80516){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____1.call(this,state_80516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80524 = f__38842__auto__();
(statearr_80524[(6)] = c__38841__auto__);

return statearr_80524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__80526){
var vec__80527 = p__80526;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80527,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80525_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__80525_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80530_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__80530_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__80530_SHARP_)))));
}),pair_positions);
});
lpdashboard.core.rsfarmer_address = "0x1231c75850bf52851736891a39790a82bcc2e2c4";
lpdashboard.core.rsfarmer_dst1 = "0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1";
lpdashboard.core.rsfarmer_lp2 = "0x2155128c06c4ee4b751c23d9403c07648afa5f5a";
lpdashboard.core.rsfarmer_lp1 = "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852";
lpdashboard.core.rsfarmer_dst3 = "0xc5D00a4E730fC2e1C77764A74E5F1308A460de7F";
lpdashboard.core.rsfarmer_lp3 = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc";
lpdashboard.core.pool_in_sashimi = "0x1629b0259e6e5c315b8eea09fd1a4d0a26291f98";
lpdashboard.core.sashimi_cheff = "0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D";
lpdashboard.core.reward_tokens = (function lpdashboard$core$reward_tokens(staked_positions){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"pos","pos",-864607220)),staked_positions))));
});
lpdashboard.core.pooled_tokens = (function lpdashboard$core$pooled_tokens(positions){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token0","token0",1683274894)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token1","token1",879943564))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),positions)], 0))));
});
lpdashboard.core.make_token_info = (function lpdashboard$core$make_token_info(token_infos,token_prices){
var z = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),token_infos),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ti){
var token_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_prices,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(ti));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ti,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(token_price)),cljs.core.vals(token_price))], null)], null));
}),token_infos));
return z;
});
lpdashboard.core.snapshot__GT_symbols = (function lpdashboard$core$snapshot__GT_symbols(snapshot){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot)))].join('');
});
lpdashboard.core._LT_get_account_state = (function lpdashboard$core$_LT_get_account_state(account_or_name){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_80659){
var state_val_80660 = (state_80659[(1)]);
if((state_val_80660 === (1))){
var inst_80534 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_80659__$1 = state_80659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(2),inst_80534);
} else {
if((state_val_80660 === (2))){
var inst_80536 = (state_80659[(7)]);
var inst_80536__$1 = (state_80659[(2)]);
var inst_80537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80538 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80539 = (new cljs.core.PersistentVector(null,1,(5),inst_80537,inst_80538,null));
var inst_80540 = ["Seeking LP positions on Uniswap pools for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name)].join('');
var inst_80541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80539,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80540], 0));
var inst_80542 = lpdashboard.core._LT_graph_uniswap_positions(inst_80536__$1);
var state_80659__$1 = (function (){var statearr_80661 = state_80659;
(statearr_80661[(7)] = inst_80536__$1);

(statearr_80661[(8)] = inst_80541);

return statearr_80661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(3),inst_80542);
} else {
if((state_val_80660 === (3))){
var inst_80553 = (state_80659[(9)]);
var inst_80536 = (state_80659[(7)]);
var inst_80546 = (state_80659[(10)]);
var inst_80544 = (state_80659[(11)]);
var inst_80548 = (state_80659[(12)]);
var inst_80544__$1 = (state_80659[(2)]);
var inst_80545 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_80544__$1);
var inst_80546__$1 = lpdashboard.core.last_lp_snapshots(inst_80545);
var inst_80547 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_80546__$1);
var inst_80548__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_80547);
var inst_80549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80550 = cljs.core.count(inst_80546__$1);
var inst_80551 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80550)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80548__$1)].join('');
var inst_80552 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_80551];
var inst_80553__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_80549,inst_80552,null));
var inst_80554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80555 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80556 = (new cljs.core.PersistentVector(null,1,(5),inst_80554,inst_80555,null));
var inst_80557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80556,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80553__$1], 0));
var inst_80558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80559 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80560 = (new cljs.core.PersistentVector(null,1,(5),inst_80558,inst_80559,null));
var inst_80561 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80560,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Seeking staked LP tokens ..."], 0));
var inst_80562 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_80544__$1);
var inst_80563 = lpdashboard.core._LT_user_get_staked(inst_80536,inst_80562);
var state_80659__$1 = (function (){var statearr_80662 = state_80659;
(statearr_80662[(9)] = inst_80553__$1);

(statearr_80662[(13)] = inst_80557);

(statearr_80662[(14)] = inst_80561);

(statearr_80662[(10)] = inst_80546__$1);

(statearr_80662[(11)] = inst_80544__$1);

(statearr_80662[(12)] = inst_80548__$1);

return statearr_80662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(4),inst_80563);
} else {
if((state_val_80660 === (4))){
var inst_80553 = (state_80659[(9)]);
var inst_80536 = (state_80659[(7)]);
var inst_80561 = (state_80659[(14)]);
var inst_80546 = (state_80659[(10)]);
var inst_80565 = (state_80659[(15)]);
var inst_80544 = (state_80659[(11)]);
var inst_80548 = (state_80659[(12)]);
var inst_80565__$1 = (state_80659[(2)]);
var inst_80566 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_80565__$1);
var inst_80567 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_80566);
var inst_80568 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_80567);
var inst_80569 = cljs.core.count(inst_80568);
var inst_80570 = ["Account has transferred LP tokens to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80569)," distinct addresses ..."].join('');
var inst_80571 = (function (){var account = inst_80536;
var _ = inst_80561;
var graph_positions = inst_80544;
var last_snaps = inst_80546;
var pair_symbols = inst_80548;
var many_pools_step = inst_80553;
var staked = inst_80565__$1;
var many_transfers_step = inst_80570;
return (function (p1__80532_SHARP_){
return (cljs.core.count(new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(p1__80532_SHARP_)) > (0));
});
})();
var inst_80572 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_80571,inst_80565__$1);
var inst_80573 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_80572);
var inst_80574 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_80573);
var inst_80575 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_80574);
var inst_80576 = cljs.core.count(inst_80575);
var inst_80577 = ["Account staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80576)," distinct (identified) contracts ..."].join('');
var inst_80578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80579 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80580 = (new cljs.core.PersistentVector(null,1,(5),inst_80578,inst_80579,null));
var inst_80581 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80580,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80570], 0));
var inst_80582 = (function (){var last_snaps = inst_80546;
var many_pools_step = inst_80553;
var graph_positions = inst_80544;
var pair_symbols = inst_80548;
var many_transfers_step = inst_80570;
var staked = inst_80565__$1;
var with_stakings = inst_80572;
var many_stakes_step = inst_80577;
var _ = inst_80581;
var account = inst_80536;
return (function (p1__80533_SHARP_){
return clojure.set.rename_keys(p1__80533_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_80583 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_80584 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_80544);
var inst_80585 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_80584);
var inst_80586 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_80583,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80585], 0));
var inst_80587 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_80582,inst_80586);
var inst_80588 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_80544);
var inst_80589 = lpdashboard.core.pooled_tokens(inst_80588);
var inst_80590 = lpdashboard.core.reward_tokens(inst_80565__$1);
var inst_80591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80592 = ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"];
var inst_80593 = (new cljs.core.PersistentVector(null,1,(5),inst_80591,inst_80592,null));
var inst_80594 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_80589,inst_80590,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80593], 0));
var inst_80595 = cljs.core.set(inst_80594);
var inst_80596 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_80590,inst_80593);
var inst_80597 = lpdashboard.ethereum._LT_erc20_infos(inst_80596);
var state_80659__$1 = (function (){var statearr_80663 = state_80659;
(statearr_80663[(15)] = inst_80565__$1);

(statearr_80663[(16)] = inst_80595);

(statearr_80663[(17)] = inst_80587);

return statearr_80663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(5),inst_80597);
} else {
if((state_val_80660 === (5))){
var inst_80595 = (state_80659[(16)]);
var inst_80587 = (state_80659[(17)]);
var inst_80599 = (state_80659[(2)]);
var inst_80600 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_80587,inst_80599);
var inst_80601 = cljs.core.set(inst_80600);
var inst_80602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80603 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80604 = (new cljs.core.PersistentVector(null,1,(5),inst_80602,inst_80603,null));
var inst_80605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80606 = ["Getting token prices..."];
var inst_80607 = (new cljs.core.PersistentVector(null,1,(5),inst_80605,inst_80606,null));
var inst_80608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80604,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80607], 0));
var inst_80609 = lpdashboard.coingecko._LT_token_prices(inst_80595);
var state_80659__$1 = (function (){var statearr_80664 = state_80659;
(statearr_80664[(18)] = inst_80608);

(statearr_80664[(19)] = inst_80601);

return statearr_80664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(6),inst_80609);
} else {
if((state_val_80660 === (6))){
var inst_80536 = (state_80659[(7)]);
var inst_80613 = (state_80659[(20)]);
var inst_80544 = (state_80659[(11)]);
var inst_80611 = (state_80659[(2)]);
var inst_80612 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_80544);
var inst_80613__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_80612);
var inst_80614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80615 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80616 = (new cljs.core.PersistentVector(null,1,(5),inst_80614,inst_80615,null));
var inst_80617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80618 = ["Getting LP Mint events from account..."];
var inst_80619 = (new cljs.core.PersistentVector(null,1,(5),inst_80617,inst_80618,null));
var inst_80620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80616,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80619], 0));
var inst_80621 = lpdashboard.core._LT_get_user_mints(inst_80536,inst_80613__$1);
var state_80659__$1 = (function (){var statearr_80665 = state_80659;
(statearr_80665[(21)] = inst_80611);

(statearr_80665[(20)] = inst_80613__$1);

(statearr_80665[(22)] = inst_80620);

return statearr_80665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(7),inst_80621);
} else {
if((state_val_80660 === (7))){
var inst_80536 = (state_80659[(7)]);
var inst_80613 = (state_80659[(20)]);
var inst_80623 = (state_80659[(23)]);
var inst_80623__$1 = (state_80659[(2)]);
var inst_80624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80625 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80626 = (new cljs.core.PersistentVector(null,1,(5),inst_80624,inst_80625,null));
var inst_80627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80628 = cljs.core.vals(inst_80623__$1);
var inst_80629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_80628);
var inst_80630 = cljs.core.count(inst_80629);
var inst_80631 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80630)," LP Mint events by account"].join('');
var inst_80632 = [inst_80631];
var inst_80633 = (new cljs.core.PersistentVector(null,1,(5),inst_80627,inst_80632,null));
var inst_80634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80626,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80633], 0));
var inst_80635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80636 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80637 = (new cljs.core.PersistentVector(null,1,(5),inst_80635,inst_80636,null));
var inst_80638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80639 = ["Getting LP Burn events from account..."];
var inst_80640 = (new cljs.core.PersistentVector(null,1,(5),inst_80638,inst_80639,null));
var inst_80641 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80637,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80640], 0));
var inst_80642 = lpdashboard.core._LT_get_user_burns(inst_80536,inst_80613);
var state_80659__$1 = (function (){var statearr_80666 = state_80659;
(statearr_80666[(24)] = inst_80641);

(statearr_80666[(23)] = inst_80623__$1);

(statearr_80666[(25)] = inst_80634);

return statearr_80666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80659__$1,(8),inst_80642);
} else {
if((state_val_80660 === (8))){
var inst_80611 = (state_80659[(21)]);
var inst_80565 = (state_80659[(15)]);
var inst_80623 = (state_80659[(23)]);
var inst_80544 = (state_80659[(11)]);
var inst_80601 = (state_80659[(19)]);
var inst_80644 = (state_80659[(2)]);
var inst_80645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80646 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_80647 = (new cljs.core.PersistentVector(null,1,(5),inst_80645,inst_80646,null));
var inst_80648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80649 = cljs.core.vals(inst_80644);
var inst_80650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_80649);
var inst_80651 = cljs.core.count(inst_80650);
var inst_80652 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_80651)," LP Burn events from account"].join('');
var inst_80653 = [inst_80652];
var inst_80654 = (new cljs.core.PersistentVector(null,1,(5),inst_80648,inst_80653,null));
var inst_80655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_80647,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80654], 0));
var inst_80656 = lpdashboard.core.make_token_info(inst_80601,inst_80611);
var inst_80657 = lpdashboard.core.make_state(inst_80544,inst_80565,inst_80656,inst_80623,inst_80644);
var state_80659__$1 = (function (){var statearr_80667 = state_80659;
(statearr_80667[(26)] = inst_80655);

return statearr_80667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_80659__$1,inst_80657);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__ = null;
var lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____0 = (function (){
var statearr_80668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80668[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__);

(statearr_80668[(1)] = (1));

return statearr_80668;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____1 = (function (state_80659){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_80659);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e80669){var ex__38753__auto__ = e80669;
var statearr_80670_81010 = state_80659;
(statearr_80670_81010[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_80659[(4)]))){
var statearr_80671_81011 = state_80659;
(statearr_80671_81011[(1)] = cljs.core.first((state_80659[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81012 = state_80659;
state_80659 = G__81012;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__ = function(state_80659){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____1.call(this,state_80659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_80672 = f__38842__auto__();
(statearr_80672[(6)] = c__38841__auto__);

return statearr_80672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.core.lend_uni_address = "0xab3f9bf1d81ddb224a2014e98b238638824bcf20";
lpdashboard.core.lend_address = "0x80fb784b7ed66730e8b1dbd9820afd29931aab03";
lpdashboard.core.yfi_address = "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e";
lpdashboard.core.yfi_uni_address = "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28";
lpdashboard.core.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
lpdashboard.core.comp_uni_address = "0xcffdded873554f362ac02f8fb1f02e5ada10516f";
lpdashboard.core.snx_address = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f";
lpdashboard.core.zapp_in_address = "0x80c5e6908368cb9db503ba968d7ec5a565bfb389";
lpdashboard.core.symbol__GT_address = (function lpdashboard$core$symbol__GT_address(symbol,state){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__80673_SHARP_),symbol);
}),cljs.core.vals(new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)))));
});
lpdashboard.core.tokens__GT_lp = (function lpdashboard$core$tokens__GT_lp(token1,token2,state){
return null;
});
lpdashboard.core.lp_tokens = (function lpdashboard$core$lp_tokens(lp){
return new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp));
});
lpdashboard.core.pair__GT_address = (function lpdashboard$core$pair__GT_address(symbol1,symbol2,state){
var token1 = lpdashboard.core.symbol__GT_address(symbol1,state);
var token2 = lpdashboard.core.symbol__GT_address(symbol2,state);
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80674_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__80674_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__80674_SHARP_)),token2)));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))))));
});
lpdashboard.core.symbols__GT_lp = (function lpdashboard$core$symbols__GT_lp(symbol1,symbol2,state){
var lp_address = lpdashboard.core.pair__GT_address(symbol1,symbol2,state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state),lp_address);
});
lpdashboard.core.symbols__GT_pos = (function lpdashboard$core$symbols__GT_pos(symbol1,symbol2,state){
var lp = lpdashboard.core.symbols__GT_lp(symbol1,symbol2,state);
return lpdashboard.core.lp_position_map(lp,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state));
});
lpdashboard.core.compute_total = (function lpdashboard$core$compute_total(pnl_key,state,only_open_QMARK_){
var lps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80675_SHARP_){
return lpdashboard.core.lp_position_map(p1__80675_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state)));
var lps_SINGLEQUOTE_ = (cljs.core.truth_(only_open_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80676_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__80676_SHARP_))));
}),lps):lps);
var lp_pnls = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnl","pnl",-430398483),lps_SINGLEQUOTE_);
if(cljs.core.empty_QMARK_(lp_pnls)){
return new cljs.core.PersistentArrayMap(null, 2, ["USD",(new module$node_modules$bignumber_DOT_js$bignumber("0")),"ETH",(new module$node_modules$bignumber_DOT_js$bignumber("0"))], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pnl_key,lp_pnls));
}
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(var_args){
var G__80678 = arguments.length;
switch (G__80678) {
case 1:
return lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 = (function (state){
return lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$2(state,false);
}));

(lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$2 = (function (state,only_open_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),state,only_open_QMARK_),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state,only_open_QMARK_),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state,only_open_QMARK_),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state,only_open_QMARK_)], null);
}));

(lpdashboard.core.compute_totals.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=lpdashboard.core.js.map
