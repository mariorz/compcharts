goog.provide('compevent.core');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$$compound_finance$compound_js$dist$nodejs$index=shadow.js.require("module$node_modules$$compound_finance$compound_js$dist$nodejs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
compevent.core.debug = true;
compevent.core.erc20_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function decimals() view returns (uint8)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
compevent.core.comp_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)","event LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)","event Mint(address minter, uint mintAmount, uint mintTokens)","event Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)","event Redeem(address redeemer, uint redeemAmount, uint redeemTokens)"], null);
compevent.core.lw_address = "0x909b443761bbd7fbb876ecde71a37e1433f6af6f";
compevent.core.lw_address2 = "0x189c2c1834b1414a6aee9eba5dc4b4d547c9a44c";
compevent.core.lw_address3 = "0xb1adceddb2941033a090dd166a462fe1c2029484";
compevent.core.cdai_init_block = (8983575);
compevent.core.cusdc_init_block = (7710760);
compevent.core.ceth_init_block = (7710758);
compevent.core.cusdt_init_block = (9879363);
compevent.core.wbtc_init_block = (6766284);
compevent.core.last_block = (11333300);
compevent.core.liquidation_hash = "0x53e09adb77d1e3ea593c933a85bd4472371e03da12e3fec853b5bc7fac50f3e4";
compevent.core.ctokens = cljs.core.PersistentHashMap.fromArrays(["0x35a18000230da775cac24873d00ff85bccded550","0xf5dce57282a584d2746faf1593d3121fcac444dc","0x39aa39c021dfbae8fac545936693ac917d5e7563","0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9","0x158079ee67fce2f58472a96584a73c7ab9ac95c1","0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4","0x5d3a536e4d6dbd6114cc1ead35777bab948e3643","0xc11b1268c1a384e55c48c2391d8d480264a3a7f4","0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407","0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e","0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5"],["UNI","SAI","USDC","USDT","REP","COMP","DAI","WBTC","ZRX","BAT","ETH"]);
/**
 * Takes a cToken address and returns
 *   underlying token symbol
 */
compevent.core.caddress__GT_token = (function compevent$core$caddress__GT_token(caddress){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(compevent.core.ctokens,caddress);
});
/**
 * Takes a token symbol and returns its corresponding
 *   address
 */
compevent.core.token__GT_address = (function compevent$core$token__GT_address(token){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 8, ["WETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","ETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","WBTC","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","BAT","0x0d8775f648430679a709e98d2b0cb6250d2887ef","COMP","0xc00e94cb662c3520282e6f5717214004a7f26888","UNI","0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","ZRX","0xe41d2489571d322189246dafa5ebde1f4699f498","REP","0x221657776846890989a759ba2973e427dff5c9bb"], null),token);
});
compevent.core.comp_unitroller = "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B";
compevent.core.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
compevent.core.current_block = (11415254);
compevent.core.pre_event_block = (11333036);
compevent.core.block_step = (10000);
compevent.core.llw_start_block = ((10250758) - compevent.core.block_step);
compevent.core.llw_end_block = (compevent.core.pre_event_block + compevent.core.block_step);
compevent.core.latest_block = (11460849);
compevent.core.bn = (function compevent$core$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
compevent.core.ethfu = (function compevent$core$ethfu(n,u){
return module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(n,u);
});
compevent.core.ebn__GT_bn = (function compevent$core$ebn__GT_bn(n,u){
return compevent.core.bn(compevent.core.ethfu(n,u));
});
compevent.core.bn_min = (function compevent$core$bn_min(nums){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bignumber.core._LT_,nums));
});
compevent.core.bn_max = (function compevent$core$bn_max(nums){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bignumber.core._GT_,nums));
});
compevent.core.bn_QMARK_ = (function compevent$core$bn_QMARK_(n){
return module$node_modules$bignumber_DOT_js$bignumber.isBigNumber(n);
});
compevent.core.float_num_values = (function compevent$core$float_num_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function compevent$core$float_num_values_$_iter__44990(s__44991){
return (new cljs.core.LazySeq(null,(function (){
var s__44991__$1 = s__44991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44991__$1);
if(temp__5735__auto__){
var s__44991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44991__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44991__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44993 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44992 = (0);
while(true){
if((i__44992 < size__4528__auto__)){
var vec__44994 = cljs.core._nth(c__4527__auto__,i__44992);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44994,(1),null);
cljs.core.chunk_append(b__44993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null));

var G__45788 = (i__44992 + (1));
i__44992 = G__45788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44993),compevent$core$float_num_values_$_iter__44990(cljs.core.chunk_rest(s__44991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44993),null);
}
} else {
var vec__44997 = cljs.core.first(s__44991__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44997,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(compevent.core.bn_QMARK_(v))?parseFloat(v):v)], null),compevent$core$float_num_values_$_iter__44990(cljs.core.rest(s__44991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
compevent.core.web3provider = module$node_modules$ethers$dist$ethers_umd.providers.Web3Provider;
compevent.core.provider = (new compevent.core.web3provider(window.ethereum));
compevent.core.comp_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(compevent.core.comp_abi)));
compevent.core.erc20_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(compevent.core.erc20_abi)));
compevent.core.make_contract = (function compevent$core$make_contract(abi,address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(abi),compevent.core.provider));
});
compevent.core.make_erc20 = (function compevent$core$make_erc20(address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(compevent.core.erc20_abi),compevent.core.provider));
});
compevent.core._LT_token_decimals = (function compevent$core$_LT_token_decimals(address){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45026){
var state_val_45027 = (state_45026[(1)]);
if((state_val_45027 === (7))){
var inst_45011 = (state_45026[(7)]);
var inst_45018 = (function(){throw inst_45011})();
var state_45026__$1 = state_45026;
var statearr_45028_45789 = state_45026__$1;
(statearr_45028_45789[(2)] = inst_45018);

(statearr_45028_45789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (1))){
var inst_45000 = compevent.core.make_erc20(address);
var state_45026__$1 = (function (){var statearr_45029 = state_45026;
(statearr_45029[(8)] = inst_45000);

return statearr_45029;
})();
var statearr_45030_45790 = state_45026__$1;
(statearr_45030_45790[(2)] = null);

(statearr_45030_45790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (4))){
var inst_45001 = (state_45026[(2)]);
var inst_45002 = console.log("No decimals method for:",address);
var state_45026__$1 = (function (){var statearr_45031 = state_45026;
(statearr_45031[(9)] = inst_45001);

(statearr_45031[(10)] = inst_45002);

return statearr_45031;
})();
var statearr_45032_45791 = state_45026__$1;
(statearr_45032_45791[(2)] = (18));

(statearr_45032_45791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (6))){
var inst_45011 = (state_45026[(7)]);
var inst_45011__$1 = (state_45026[(2)]);
var inst_45012 = (inst_45011__$1 instanceof cljs.core.ExceptionInfo);
var inst_45013 = cljs.core.ex_data(inst_45011__$1);
var inst_45014 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45013);
var inst_45015 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45014,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45016 = ((inst_45012) && (inst_45015));
var state_45026__$1 = (function (){var statearr_45033 = state_45026;
(statearr_45033[(7)] = inst_45011__$1);

return statearr_45033;
})();
if(cljs.core.truth_(inst_45016)){
var statearr_45034_45792 = state_45026__$1;
(statearr_45034_45792[(1)] = (7));

} else {
var statearr_45035_45793 = state_45026__$1;
(statearr_45035_45793[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (3))){
var inst_45024 = (state_45026[(2)]);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45026__$1,inst_45024);
} else {
if((state_val_45027 === (2))){
var inst_45000 = (state_45026[(8)]);
var _ = (function (){var statearr_45037 = state_45026;
(statearr_45037[(4)] = cljs.core.cons((5),(state_45026[(4)])));

return statearr_45037;
})();
var inst_45008 = inst_45000.decimals();
var inst_45009 = cljs.core.async.interop.p__GT_c(inst_45008);
var state_45026__$1 = state_45026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45026__$1,(6),inst_45009);
} else {
if((state_val_45027 === (9))){
var inst_45021 = (state_45026[(2)]);
var _ = (function (){var statearr_45038 = state_45026;
(statearr_45038[(4)] = cljs.core.rest((state_45026[(4)])));

return statearr_45038;
})();
var state_45026__$1 = state_45026;
var statearr_45039_45794 = state_45026__$1;
(statearr_45039_45794[(2)] = inst_45021);

(statearr_45039_45794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (5))){
var _ = (function (){var statearr_45040 = state_45026;
(statearr_45040[(4)] = cljs.core.rest((state_45026[(4)])));

return statearr_45040;
})();
var state_45026__$1 = state_45026;
var ex45036 = (state_45026__$1[(2)]);
var statearr_45041_45795 = state_45026__$1;
(statearr_45041_45795[(5)] = ex45036);


if((ex45036 instanceof Error)){
var statearr_45042_45796 = state_45026__$1;
(statearr_45042_45796[(1)] = (4));

(statearr_45042_45796[(5)] = null);

} else {
throw ex45036;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45027 === (8))){
var inst_45011 = (state_45026[(7)]);
var state_45026__$1 = state_45026;
var statearr_45043_45797 = state_45026__$1;
(statearr_45043_45797[(2)] = inst_45011);

(statearr_45043_45797[(1)] = (9));


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
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0 = (function (){
var statearr_45044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45044[(0)] = compevent$core$_LT_token_decimals_$_state_machine__38756__auto__);

(statearr_45044[(1)] = (1));

return statearr_45044;
});
var compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1 = (function (state_45026){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45026);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45045){var ex__38759__auto__ = e45045;
var statearr_45046_45798 = state_45026;
(statearr_45046_45798[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45026[(4)]))){
var statearr_45047_45799 = state_45026;
(statearr_45047_45799[(1)] = cljs.core.first((state_45026[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45800 = state_45026;
state_45026 = G__45800;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__ = function(state_45026){
switch(arguments.length){
case 0:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1.call(this,state_45026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____0;
compevent$core$_LT_token_decimals_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_token_decimals_$_state_machine__38756__auto____1;
return compevent$core$_LT_token_decimals_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45048 = f__38848__auto__();
(statearr_45048[(6)] = c__38847__auto__);

return statearr_45048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.make_token_tx = (function compevent$core$make_token_tx(tx,decimals){
var parsed_event = compevent.core.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),compevent.core.ebn__GT_bn(tx_args.amount,decimals)], null);
});
compevent.core._LT_latest_block = (function compevent$core$_LT_latest_block(){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45065){
var state_val_45066 = (state_45065[(1)]);
if((state_val_45066 === (1))){
var inst_45049 = compevent.core.provider.getBlockNumber();
var inst_45050 = cljs.core.async.interop.p__GT_c(inst_45049);
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45065__$1,(2),inst_45050);
} else {
if((state_val_45066 === (2))){
var inst_45052 = (state_45065[(7)]);
var inst_45052__$1 = (state_45065[(2)]);
var inst_45053 = (inst_45052__$1 instanceof cljs.core.ExceptionInfo);
var inst_45054 = cljs.core.ex_data(inst_45052__$1);
var inst_45055 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45054);
var inst_45056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45055,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45057 = ((inst_45053) && (inst_45056));
var state_45065__$1 = (function (){var statearr_45067 = state_45065;
(statearr_45067[(7)] = inst_45052__$1);

return statearr_45067;
})();
if(cljs.core.truth_(inst_45057)){
var statearr_45068_45801 = state_45065__$1;
(statearr_45068_45801[(1)] = (3));

} else {
var statearr_45069_45802 = state_45065__$1;
(statearr_45069_45802[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (3))){
var inst_45052 = (state_45065[(7)]);
var inst_45059 = (function(){throw inst_45052})();
var state_45065__$1 = state_45065;
var statearr_45070_45803 = state_45065__$1;
(statearr_45070_45803[(2)] = inst_45059);

(statearr_45070_45803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (4))){
var inst_45052 = (state_45065[(7)]);
var state_45065__$1 = state_45065;
var statearr_45071_45804 = state_45065__$1;
(statearr_45071_45804[(2)] = inst_45052);

(statearr_45071_45804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (5))){
var inst_45062 = (state_45065[(2)]);
var inst_45063 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_45062);
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45065__$1,inst_45063);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____0 = (function (){
var statearr_45072 = [null,null,null,null,null,null,null,null];
(statearr_45072[(0)] = compevent$core$_LT_latest_block_$_state_machine__38756__auto__);

(statearr_45072[(1)] = (1));

return statearr_45072;
});
var compevent$core$_LT_latest_block_$_state_machine__38756__auto____1 = (function (state_45065){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45065);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45073){var ex__38759__auto__ = e45073;
var statearr_45074_45805 = state_45065;
(statearr_45074_45805[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45065[(4)]))){
var statearr_45075_45806 = state_45065;
(statearr_45075_45806[(1)] = cljs.core.first((state_45065[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45807 = state_45065;
state_45065 = G__45807;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_latest_block_$_state_machine__38756__auto__ = function(state_45065){
switch(arguments.length){
case 0:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_latest_block_$_state_machine__38756__auto____1.call(this,state_45065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____0;
compevent$core$_LT_latest_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_latest_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_latest_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45076 = f__38848__auto__();
(statearr_45076[(6)] = c__38847__auto__);

return statearr_45076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_block = (function compevent$core$_LT_get_block(block_num){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45093){
var state_val_45094 = (state_45093[(1)]);
if((state_val_45094 === (1))){
var inst_45077 = compevent.core.provider.getBlock(block_num);
var inst_45078 = cljs.core.async.interop.p__GT_c(inst_45077);
var state_45093__$1 = state_45093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45093__$1,(2),inst_45078);
} else {
if((state_val_45094 === (2))){
var inst_45080 = (state_45093[(7)]);
var inst_45080__$1 = (state_45093[(2)]);
var inst_45081 = (inst_45080__$1 instanceof cljs.core.ExceptionInfo);
var inst_45082 = cljs.core.ex_data(inst_45080__$1);
var inst_45083 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45082);
var inst_45084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45083,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45085 = ((inst_45081) && (inst_45084));
var state_45093__$1 = (function (){var statearr_45095 = state_45093;
(statearr_45095[(7)] = inst_45080__$1);

return statearr_45095;
})();
if(cljs.core.truth_(inst_45085)){
var statearr_45096_45808 = state_45093__$1;
(statearr_45096_45808[(1)] = (3));

} else {
var statearr_45097_45809 = state_45093__$1;
(statearr_45097_45809[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45094 === (3))){
var inst_45080 = (state_45093[(7)]);
var inst_45087 = (function(){throw inst_45080})();
var state_45093__$1 = state_45093;
var statearr_45098_45810 = state_45093__$1;
(statearr_45098_45810[(2)] = inst_45087);

(statearr_45098_45810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45094 === (4))){
var inst_45080 = (state_45093[(7)]);
var state_45093__$1 = state_45093;
var statearr_45099_45811 = state_45093__$1;
(statearr_45099_45811[(2)] = inst_45080);

(statearr_45099_45811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45094 === (5))){
var inst_45090 = (state_45093[(2)]);
var inst_45091 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_45090);
var state_45093__$1 = state_45093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45093__$1,inst_45091);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_block_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_block_$_state_machine__38756__auto____0 = (function (){
var statearr_45100 = [null,null,null,null,null,null,null,null];
(statearr_45100[(0)] = compevent$core$_LT_get_block_$_state_machine__38756__auto__);

(statearr_45100[(1)] = (1));

return statearr_45100;
});
var compevent$core$_LT_get_block_$_state_machine__38756__auto____1 = (function (state_45093){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45093);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45101){var ex__38759__auto__ = e45101;
var statearr_45102_45812 = state_45093;
(statearr_45102_45812[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45093[(4)]))){
var statearr_45103_45813 = state_45093;
(statearr_45103_45813[(1)] = cljs.core.first((state_45093[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45814 = state_45093;
state_45093 = G__45814;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_block_$_state_machine__38756__auto__ = function(state_45093){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_block_$_state_machine__38756__auto____1.call(this,state_45093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_block_$_state_machine__38756__auto____0;
compevent$core$_LT_get_block_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_block_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_block_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45104 = f__38848__auto__();
(statearr_45104[(6)] = c__38847__auto__);

return statearr_45104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_blocks = (function compevent$core$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45105_SHARP_){
return compevent.core._LT_get_block(p1__45105_SHARP_);
}),block_numbers)));
});
compevent.core._LT_user_token_transfers = (function compevent$core$_LT_user_token_transfers(var_args){
var G__45108 = arguments.length;
switch (G__45108) {
case 3:
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
if((token_address == null)){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45111){
var state_val_45112 = (state_45111[(1)]);
if((state_val_45112 === (1))){
var inst_45109 = cljs.core.PersistentVector.EMPTY;
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45111__$1,inst_45109);
} else {
return null;
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_45113 = [null,null,null,null,null,null,null];
(statearr_45113[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_45113[(1)] = (1));

return statearr_45113;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_45111){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45111);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45114){var ex__38759__auto__ = e45114;
var statearr_45115_45816 = state_45111;
(statearr_45115_45816[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45111[(4)]))){
var statearr_45116_45817 = state_45111;
(statearr_45116_45817[(1)] = cljs.core.first((state_45111[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45818 = state_45111;
state_45111 = G__45818;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_45111){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_45111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45117 = f__38848__auto__();
(statearr_45117[(6)] = c__38847__auto__);

return statearr_45117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
} else {
var contract = compevent.core.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45149){
var state_val_45150 = (state_45149[(1)]);
if((state_val_45150 === (7))){
var inst_45129 = (state_45149[(7)]);
var inst_45136 = (function(){throw inst_45129})();
var state_45149__$1 = state_45149;
var statearr_45151_45819 = state_45149__$1;
(statearr_45151_45819[(2)] = inst_45136);

(statearr_45151_45819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (1))){
var state_45149__$1 = state_45149;
var statearr_45152_45820 = state_45149__$1;
(statearr_45152_45820[(2)] = null);

(statearr_45152_45820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (4))){
var inst_45118 = (state_45149[(2)]);
var inst_45119 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_45120 = cljs.core.PersistentVector.EMPTY;
var state_45149__$1 = (function (){var statearr_45153 = state_45149;
(statearr_45153[(8)] = inst_45118);

(statearr_45153[(9)] = inst_45119);

return statearr_45153;
})();
var statearr_45154_45821 = state_45149__$1;
(statearr_45154_45821[(2)] = inst_45120);

(statearr_45154_45821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (6))){
var inst_45129 = (state_45149[(7)]);
var inst_45129__$1 = (state_45149[(2)]);
var inst_45130 = (inst_45129__$1 instanceof cljs.core.ExceptionInfo);
var inst_45131 = cljs.core.ex_data(inst_45129__$1);
var inst_45132 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45131);
var inst_45133 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45132,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45134 = ((inst_45130) && (inst_45133));
var state_45149__$1 = (function (){var statearr_45155 = state_45149;
(statearr_45155[(7)] = inst_45129__$1);

return statearr_45155;
})();
if(cljs.core.truth_(inst_45134)){
var statearr_45156_45822 = state_45149__$1;
(statearr_45156_45822[(1)] = (7));

} else {
var statearr_45157_45823 = state_45149__$1;
(statearr_45157_45823[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (3))){
var inst_45147 = (state_45149[(2)]);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45149__$1,inst_45147);
} else {
if((state_val_45150 === (2))){
var ___$2 = (function (){var statearr_45159 = state_45149;
(statearr_45159[(4)] = cljs.core.cons((5),(state_45149[(4)])));

return statearr_45159;
})();
var inst_45126 = provider.getLogs(user_filter);
var inst_45127 = cljs.core.async.interop.p__GT_c(inst_45126);
var state_45149__$1 = state_45149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45149__$1,(6),inst_45127);
} else {
if((state_val_45150 === (9))){
var inst_45139 = (state_45149[(2)]);
var inst_45140 = compevent.core._LT_token_decimals(token_address);
var state_45149__$1 = (function (){var statearr_45160 = state_45149;
(statearr_45160[(10)] = inst_45139);

return statearr_45160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45149__$1,(10),inst_45140);
} else {
if((state_val_45150 === (5))){
var ___$2 = (function (){var statearr_45161 = state_45149;
(statearr_45161[(4)] = cljs.core.rest((state_45149[(4)])));

return statearr_45161;
})();
var state_45149__$1 = state_45149;
var ex45158 = (state_45149__$1[(2)]);
var statearr_45162_45824 = state_45149__$1;
(statearr_45162_45824[(5)] = ex45158);


if((ex45158 instanceof Error)){
var statearr_45163_45825 = state_45149__$1;
(statearr_45163_45825[(1)] = (4));

(statearr_45163_45825[(5)] = null);

} else {
throw ex45158;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (10))){
var inst_45139 = (state_45149[(10)]);
var inst_45142 = (state_45149[(2)]);
var inst_45143 = (function (){var filtered_txs = inst_45139;
var decimals = inst_45142;
return (function (p1__45106_SHARP_){
return compevent.core.make_token_tx(p1__45106_SHARP_,decimals);
});
})();
var inst_45144 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45143,inst_45139);
var ___$2 = (function (){var statearr_45164 = state_45149;
(statearr_45164[(4)] = cljs.core.rest((state_45149[(4)])));

return statearr_45164;
})();
var state_45149__$1 = state_45149;
var statearr_45165_45826 = state_45149__$1;
(statearr_45165_45826[(2)] = inst_45144);

(statearr_45165_45826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45150 === (8))){
var inst_45129 = (state_45149[(7)]);
var state_45149__$1 = state_45149;
var statearr_45166_45827 = state_45149__$1;
(statearr_45166_45827[(2)] = inst_45129);

(statearr_45166_45827[(1)] = (9));


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
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_45167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45167[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_45167[(1)] = (1));

return statearr_45167;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_45149){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45149);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45168){var ex__38759__auto__ = e45168;
var statearr_45169_45828 = state_45149;
(statearr_45169_45828[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45149[(4)]))){
var statearr_45170_45829 = state_45149;
(statearr_45170_45829[(1)] = cljs.core.first((state_45149[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45830 = state_45149;
state_45149 = G__45830;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_45149){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_45149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45171 = f__38848__auto__();
(statearr_45171[(6)] = c__38847__auto__);

return statearr_45171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}
}));

(compevent.core._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

compevent.core._LT_get_tx_receipt = (function compevent$core$_LT_get_tx_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45187){
var state_val_45188 = (state_45187[(1)]);
if((state_val_45188 === (1))){
var inst_45172 = compevent.core.provider.getTransactionReceipt(txhash);
var inst_45173 = cljs.core.async.interop.p__GT_c(inst_45172);
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45187__$1,(2),inst_45173);
} else {
if((state_val_45188 === (2))){
var inst_45175 = (state_45187[(7)]);
var inst_45175__$1 = (state_45187[(2)]);
var inst_45176 = (inst_45175__$1 instanceof cljs.core.ExceptionInfo);
var inst_45177 = cljs.core.ex_data(inst_45175__$1);
var inst_45178 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45177);
var inst_45179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45178,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45180 = ((inst_45176) && (inst_45179));
var state_45187__$1 = (function (){var statearr_45189 = state_45187;
(statearr_45189[(7)] = inst_45175__$1);

return statearr_45189;
})();
if(cljs.core.truth_(inst_45180)){
var statearr_45190_45831 = state_45187__$1;
(statearr_45190_45831[(1)] = (3));

} else {
var statearr_45191_45832 = state_45187__$1;
(statearr_45191_45832[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (3))){
var inst_45175 = (state_45187[(7)]);
var inst_45182 = (function(){throw inst_45175})();
var state_45187__$1 = state_45187;
var statearr_45192_45833 = state_45187__$1;
(statearr_45192_45833[(2)] = inst_45182);

(statearr_45192_45833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (4))){
var inst_45175 = (state_45187[(7)]);
var state_45187__$1 = state_45187;
var statearr_45193_45834 = state_45187__$1;
(statearr_45193_45834[(2)] = inst_45175);

(statearr_45193_45834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (5))){
var inst_45185 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45187__$1,inst_45185);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_45194 = [null,null,null,null,null,null,null,null];
(statearr_45194[(0)] = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__);

(statearr_45194[(1)] = (1));

return statearr_45194;
});
var compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1 = (function (state_45187){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45187);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45195){var ex__38759__auto__ = e45195;
var statearr_45196_45835 = state_45187;
(statearr_45196_45835[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45187[(4)]))){
var statearr_45197_45836 = state_45187;
(statearr_45197_45836[(1)] = cljs.core.first((state_45187[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45837 = state_45187;
state_45187 = G__45837;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__ = function(state_45187){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1.call(this,state_45187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45198 = f__38848__auto__();
(statearr_45198[(6)] = c__38847__auto__);

return statearr_45198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx = (function compevent$core$_LT_get_tx(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45214){
var state_val_45215 = (state_45214[(1)]);
if((state_val_45215 === (1))){
var inst_45199 = compevent.core.provider.getTransaction(txhash);
var inst_45200 = cljs.core.async.interop.p__GT_c(inst_45199);
var state_45214__$1 = state_45214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45214__$1,(2),inst_45200);
} else {
if((state_val_45215 === (2))){
var inst_45202 = (state_45214[(7)]);
var inst_45202__$1 = (state_45214[(2)]);
var inst_45203 = (inst_45202__$1 instanceof cljs.core.ExceptionInfo);
var inst_45204 = cljs.core.ex_data(inst_45202__$1);
var inst_45205 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45204);
var inst_45206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45205,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45207 = ((inst_45203) && (inst_45206));
var state_45214__$1 = (function (){var statearr_45216 = state_45214;
(statearr_45216[(7)] = inst_45202__$1);

return statearr_45216;
})();
if(cljs.core.truth_(inst_45207)){
var statearr_45217_45838 = state_45214__$1;
(statearr_45217_45838[(1)] = (3));

} else {
var statearr_45218_45839 = state_45214__$1;
(statearr_45218_45839[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (3))){
var inst_45202 = (state_45214[(7)]);
var inst_45209 = (function(){throw inst_45202})();
var state_45214__$1 = state_45214;
var statearr_45219_45840 = state_45214__$1;
(statearr_45219_45840[(2)] = inst_45209);

(statearr_45219_45840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (4))){
var inst_45202 = (state_45214[(7)]);
var state_45214__$1 = state_45214;
var statearr_45220_45841 = state_45214__$1;
(statearr_45220_45841[(2)] = inst_45202);

(statearr_45220_45841[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45215 === (5))){
var inst_45212 = (state_45214[(2)]);
var state_45214__$1 = state_45214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45214__$1,inst_45212);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____0 = (function (){
var statearr_45221 = [null,null,null,null,null,null,null,null];
(statearr_45221[(0)] = compevent$core$_LT_get_tx_$_state_machine__38756__auto__);

(statearr_45221[(1)] = (1));

return statearr_45221;
});
var compevent$core$_LT_get_tx_$_state_machine__38756__auto____1 = (function (state_45214){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45214);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45222){var ex__38759__auto__ = e45222;
var statearr_45223_45842 = state_45214;
(statearr_45223_45842[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45214[(4)]))){
var statearr_45224_45843 = state_45214;
(statearr_45224_45843[(1)] = cljs.core.first((state_45214[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45844 = state_45214;
state_45214 = G__45844;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_$_state_machine__38756__auto__ = function(state_45214){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_$_state_machine__38756__auto____1.call(this,state_45214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45225 = f__38848__auto__();
(statearr_45225[(6)] = c__38847__auto__);

return statearr_45225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_tx_with_receipt = (function compevent$core$_LT_get_tx_with_receipt(txhash){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45236){
var state_val_45237 = (state_45236[(1)]);
if((state_val_45237 === (1))){
var inst_45226 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_45227 = compevent.core._LT_get_tx(txhash);
var state_45236__$1 = (function (){var statearr_45238 = state_45236;
(statearr_45238[(7)] = inst_45226);

return statearr_45238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45236__$1,(2),inst_45227);
} else {
if((state_val_45237 === (2))){
var inst_45229 = (state_45236[(2)]);
var inst_45230 = compevent.core._LT_get_tx_receipt(txhash);
var state_45236__$1 = (function (){var statearr_45239 = state_45236;
(statearr_45239[(8)] = inst_45229);

return statearr_45239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45236__$1,(3),inst_45230);
} else {
if((state_val_45237 === (3))){
var inst_45229 = (state_45236[(8)]);
var inst_45226 = (state_45236[(7)]);
var inst_45232 = (state_45236[(2)]);
var inst_45233 = [inst_45229,inst_45232];
var inst_45234 = cljs.core.PersistentHashMap.fromArrays(inst_45226,inst_45233);
var state_45236__$1 = state_45236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45236__$1,inst_45234);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0 = (function (){
var statearr_45240 = [null,null,null,null,null,null,null,null,null];
(statearr_45240[(0)] = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__);

(statearr_45240[(1)] = (1));

return statearr_45240;
});
var compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1 = (function (state_45236){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45236);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45241){var ex__38759__auto__ = e45241;
var statearr_45242_45845 = state_45236;
(statearr_45242_45845[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45236[(4)]))){
var statearr_45243_45846 = state_45236;
(statearr_45243_45846[(1)] = cljs.core.first((state_45236[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45847 = state_45236;
state_45236 = G__45847;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__ = function(state_45236){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1.call(this,state_45236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____0;
compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_tx_with_receipt_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45244 = f__38848__auto__();
(statearr_45244[(6)] = c__38847__auto__);

return statearr_45244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_get_trxs = (function compevent$core$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45249){
var state_val_45250 = (state_45249[(1)]);
if((state_val_45250 === (1))){
var inst_45245 = compevent.core._LT_get_tx_with_receipt(x);
var state_45249__$1 = state_45249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45249__$1,(2),inst_45245);
} else {
if((state_val_45250 === (2))){
var inst_45247 = (state_45249[(2)]);
var state_45249__$1 = state_45249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45249__$1,inst_45247);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0 = (function (){
var statearr_45251 = [null,null,null,null,null,null,null];
(statearr_45251[(0)] = compevent$core$_LT_get_trxs_$_state_machine__38756__auto__);

(statearr_45251[(1)] = (1));

return statearr_45251;
});
var compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1 = (function (state_45249){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45249);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45252){var ex__38759__auto__ = e45252;
var statearr_45253_45848 = state_45249;
(statearr_45253_45848[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45249[(4)]))){
var statearr_45254_45849 = state_45249;
(statearr_45254_45849[(1)] = cljs.core.first((state_45249[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45850 = state_45249;
state_45249 = G__45850;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__ = function(state_45249){
switch(arguments.length){
case 0:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1.call(this,state_45249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____0;
compevent$core$_LT_get_trxs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_get_trxs_$_state_machine__38756__auto____1;
return compevent$core$_LT_get_trxs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45255 = f__38848__auto__();
(statearr_45255[(6)] = c__38847__auto__);

return statearr_45255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
compevent.core.total_gas_paid = (function compevent$core$total_gas_paid(tx_with_receipt){
var tx = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_price = compevent.core.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx,"gasPrice"),(18));
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_used = compevent.core.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"gasUsed"),(0));
var eth_spent = bignumber.core._STAR_(gas_price,gas_used);
return eth_spent;
});
if((typeof compevent !== 'undefined') && (typeof compevent.core !== 'undefined') && (typeof compevent.core.app_state !== 'undefined')){
} else {
compevent.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"total-pnl-all","total-pnl-all",916134282),null,new cljs.core.Keyword(null,"pool-pnl-all","pool-pnl-all",1661313006),null,new cljs.core.Keyword(null,"rewards-all","rewards-all",-319230276),null], null));
}
compevent.core.start = (function compevent$core$start(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.app_main], null)], null),document.getElementById("app"));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,"")){
var G__45256 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1));
var G__45257 = false;
return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(G__45256,G__45257) : compevent.core.render_compound_history.call(null,G__45256,G__45257));
} else {
return null;
}
});
compevent.core.init = (function compevent$core$init(){
return compevent.core.start();
});
goog.exportSymbol('compevent.core.init', compevent.core.init);
compevent.core.stop = (function compevent$core$stop(){
return console.log("stop");
});
compevent.core.web3_connect = (function compevent$core$web3_connect(){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45287){
var state_val_45288 = (state_45287[(1)]);
if((state_val_45288 === (7))){
var inst_45269 = (state_45287[(7)]);
var inst_45276 = (function(){throw inst_45269})();
var state_45287__$1 = state_45287;
var statearr_45289_45851 = state_45287__$1;
(statearr_45289_45851[(2)] = inst_45276);

(statearr_45289_45851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (1))){
var state_45287__$1 = state_45287;
var statearr_45290_45852 = state_45287__$1;
(statearr_45290_45852[(2)] = null);

(statearr_45290_45852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (4))){
var inst_45258 = (state_45287[(2)]);
var inst_45259 = console.log("Could not enable web3 in browser",inst_45258);
var state_45287__$1 = state_45287;
var statearr_45291_45853 = state_45287__$1;
(statearr_45291_45853[(2)] = inst_45259);

(statearr_45291_45853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (6))){
var inst_45269 = (state_45287[(7)]);
var inst_45269__$1 = (state_45287[(2)]);
var inst_45270 = (inst_45269__$1 instanceof cljs.core.ExceptionInfo);
var inst_45271 = cljs.core.ex_data(inst_45269__$1);
var inst_45272 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45271);
var inst_45273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45272,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45274 = ((inst_45270) && (inst_45273));
var state_45287__$1 = (function (){var statearr_45292 = state_45287;
(statearr_45292[(7)] = inst_45269__$1);

return statearr_45292;
})();
if(cljs.core.truth_(inst_45274)){
var statearr_45293_45854 = state_45287__$1;
(statearr_45293_45854[(1)] = (7));

} else {
var statearr_45294_45855 = state_45287__$1;
(statearr_45294_45855[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (3))){
var inst_45285 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45287__$1,inst_45285);
} else {
if((state_val_45288 === (2))){
var _ = (function (){var statearr_45296 = state_45287;
(statearr_45296[(4)] = cljs.core.cons((5),(state_45287[(4)])));

return statearr_45296;
})();
var inst_45265 = window.ethereum;
var inst_45266 = inst_45265.enable();
var inst_45267 = cljs.core.async.interop.p__GT_c(inst_45266);
var state_45287__$1 = state_45287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45287__$1,(6),inst_45267);
} else {
if((state_val_45288 === (9))){
var inst_45279 = (state_45287[(2)]);
var inst_45280 = cljs.core.first(inst_45279);
var inst_45281 = console.log("connected-account",inst_45280);
var inst_45282 = (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$2(inst_45280,true) : compevent.core.render_compound_history.call(null,inst_45280,true));
var _ = (function (){var statearr_45297 = state_45287;
(statearr_45297[(4)] = cljs.core.rest((state_45287[(4)])));

return statearr_45297;
})();
var state_45287__$1 = (function (){var statearr_45298 = state_45287;
(statearr_45298[(8)] = inst_45281);

return statearr_45298;
})();
var statearr_45299_45856 = state_45287__$1;
(statearr_45299_45856[(2)] = inst_45282);

(statearr_45299_45856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (5))){
var _ = (function (){var statearr_45300 = state_45287;
(statearr_45300[(4)] = cljs.core.rest((state_45287[(4)])));

return statearr_45300;
})();
var state_45287__$1 = state_45287;
var ex45295 = (state_45287__$1[(2)]);
var statearr_45301_45857 = state_45287__$1;
(statearr_45301_45857[(5)] = ex45295);


if((ex45295 instanceof Error)){
var statearr_45302_45858 = state_45287__$1;
(statearr_45302_45858[(1)] = (4));

(statearr_45302_45858[(5)] = null);

} else {
throw ex45295;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45288 === (8))){
var inst_45269 = (state_45287[(7)]);
var state_45287__$1 = state_45287;
var statearr_45303_45859 = state_45287__$1;
(statearr_45303_45859[(2)] = inst_45269);

(statearr_45303_45859[(1)] = (9));


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
var compevent$core$web3_connect_$_state_machine__38756__auto__ = null;
var compevent$core$web3_connect_$_state_machine__38756__auto____0 = (function (){
var statearr_45304 = [null,null,null,null,null,null,null,null,null];
(statearr_45304[(0)] = compevent$core$web3_connect_$_state_machine__38756__auto__);

(statearr_45304[(1)] = (1));

return statearr_45304;
});
var compevent$core$web3_connect_$_state_machine__38756__auto____1 = (function (state_45287){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45287);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45305){var ex__38759__auto__ = e45305;
var statearr_45306_45860 = state_45287;
(statearr_45306_45860[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45287[(4)]))){
var statearr_45307_45861 = state_45287;
(statearr_45307_45861[(1)] = cljs.core.first((state_45287[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45862 = state_45287;
state_45287 = G__45862;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$web3_connect_$_state_machine__38756__auto__ = function(state_45287){
switch(arguments.length){
case 0:
return compevent$core$web3_connect_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$web3_connect_$_state_machine__38756__auto____1.call(this,state_45287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$web3_connect_$_state_machine__38756__auto____0;
compevent$core$web3_connect_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$web3_connect_$_state_machine__38756__auto____1;
return compevent$core$web3_connect_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45308 = f__38848__auto__();
(statearr_45308[(6)] = c__38847__auto__);

return statearr_45308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.connecting_component = (function compevent$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"class","class",-2030961996),"connect",new cljs.core.Keyword(null,"on-click","on-click",1632826543),compevent.core.web3_connect], null)], null)], null);
});
compevent.core.set_query_string_BANG_ = (function compevent$core$set_query_string_BANG_(v){
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname)].join('');
var url_SINGLEQUOTE_ = [url,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return window.history.pushState(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),url_SINGLEQUOTE_], null)),null,url_SINGLEQUOTE_);
});
compevent.core.fetch_external_account = (function compevent$core$fetch_external_account(account){
compevent.core.set_query_string_BANG_(account);

return (compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$1 ? compevent.core.render_compound_history.cljs$core$IFn$_invoke$arity$1(account) : compevent.core.render_compound_history.call(null,account));
});
compevent.core.submit_component = (function compevent$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return compevent.core.fetch_external_account(cljs.core.deref(value));
})], null)], null);
});
compevent.core.atom_input = (function compevent$core$atom_input(value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),"44",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address",new cljs.core.Keyword(null,"default-value","default-value",232220170),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(window.location.search,""))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.search,(1)):null),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.key,"Enter")){
return compevent.core.fetch_external_account(cljs.core.deref(value));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (t){
return cljs.core.reset_BANG_(value,t.target.value);
})], null)], null),compevent.core.submit_component(value)], null);
});
var input_45863 = compevent.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""));
compevent.core.app_main = (function compevent$core$app_main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Compound account history charts",(((compevent.core.provider == null))?" Requires Web3":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((!((compevent.core.provider == null))))?input_45863:null),(((cljs.core.count(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))) > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),cljs.core.butlast(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-flicker"], null),cljs.core.last(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null):null),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(compevent.core.app_state))], null);
});
compevent.core.block_num__GT_ts = (function compevent$core$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45309_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__45309_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
compevent.core.ts__GT_geckoprice = (function compevent$core$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45310_SHARP_){
return (cljs.core.first(p1__45310_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45311_SHARP_){
return (cljs.core.first(p1__45311_SHARP_) > ts);
}),day_prices_SINGLEQUOTE_));
if(cljs.core.truth_((function (){var and__4115__auto__ = prev_day;
if(cljs.core.truth_(and__4115__auto__)){
return next_day;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.second(prev_day);
} else {
return null;
}
});
compevent.core.blocknum__GT_geckoprice = (function compevent$core$blocknum__GT_geckoprice(day_prices,blocks,block_num){
var ts = ((1000) * compevent.core.block_num__GT_ts(blocks,block_num));
var price = compevent.core.ts__GT_geckoprice(day_prices,ts);
return compevent.core.bn(price);
});
compevent.core._LT_historic_gecko_prices = (function compevent$core$_LT_historic_gecko_prices(address){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45324){
var state_val_45325 = (state_45324[(1)]);
if((state_val_45325 === (1))){
var inst_45312 = (state_45324[(7)]);
var inst_45312__$1 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_45313 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_45314 = [false];
var inst_45315 = cljs.core.PersistentHashMap.fromArrays(inst_45313,inst_45314);
var inst_45316 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_45312__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45315], 0));
var state_45324__$1 = (function (){var statearr_45326 = state_45324;
(statearr_45326[(7)] = inst_45312__$1);

return statearr_45326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45324__$1,(2),inst_45316);
} else {
if((state_val_45325 === (2))){
var inst_45312 = (state_45324[(7)]);
var inst_45318 = (state_45324[(2)]);
var inst_45319 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45318);
var inst_45320 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_45319);
var inst_45321 = (function (){var base_url = inst_45312;
var full_url = inst_45312;
var data = inst_45320;
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(x),compevent.core.bn(cljs.core.second(x))], null);
});
})();
var inst_45322 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45321,inst_45320);
var state_45324__$1 = state_45324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45324__$1,inst_45322);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0 = (function (){
var statearr_45327 = [null,null,null,null,null,null,null,null];
(statearr_45327[(0)] = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__);

(statearr_45327[(1)] = (1));

return statearr_45327;
});
var compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1 = (function (state_45324){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45324);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45328){var ex__38759__auto__ = e45328;
var statearr_45329_45864 = state_45324;
(statearr_45329_45864[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45324[(4)]))){
var statearr_45330_45865 = state_45324;
(statearr_45330_45865[(1)] = cljs.core.first((state_45324[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45866 = state_45324;
state_45324 = G__45866;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__ = function(state_45324){
switch(arguments.length){
case 0:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1.call(this,state_45324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____0;
compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto____1;
return compevent$core$_LT_historic_gecko_prices_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45331 = f__38848__auto__();
(statearr_45331[(6)] = c__38847__auto__);

return statearr_45331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_dollarize_liquidations = (function compevent$core$_LT_dollarize_liquidations(liquidations,token){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45344){
var state_val_45345 = (state_45344[(1)]);
if((state_val_45345 === (1))){
var inst_45332 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_45333 = cljs.core.set(inst_45332);
var inst_45334 = compevent.core._LT_fetch_blocks(inst_45333);
var state_45344__$1 = state_45344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45344__$1,(2),inst_45334);
} else {
if((state_val_45345 === (2))){
var inst_45336 = (state_45344[(2)]);
var inst_45337 = compevent.core.token__GT_address(token);
var inst_45338 = compevent.core._LT_historic_gecko_prices(inst_45337);
var state_45344__$1 = (function (){var statearr_45346 = state_45344;
(statearr_45346[(7)] = inst_45336);

return statearr_45346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45344__$1,(3),inst_45338);
} else {
if((state_val_45345 === (3))){
var inst_45336 = (state_45344[(7)]);
var inst_45340 = (state_45344[(2)]);
var inst_45341 = (function (){var liq_blocks = inst_45336;
var day_prices = inst_45340;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),compevent.core.bn(compevent.core.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_45342 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45341,liquidations);
var state_45344__$1 = state_45344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45344__$1,inst_45342);
} else {
return null;
}
}
}
});
return (function() {
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_45347 = [null,null,null,null,null,null,null,null];
(statearr_45347[(0)] = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__);

(statearr_45347[(1)] = (1));

return statearr_45347;
});
var compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1 = (function (state_45344){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45344);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45348){var ex__38759__auto__ = e45348;
var statearr_45349_45867 = state_45344;
(statearr_45349_45867[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45344[(4)]))){
var statearr_45350_45868 = state_45344;
(statearr_45350_45868[(1)] = cljs.core.first((state_45344[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45869 = state_45344;
state_45344 = G__45869;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__ = function(state_45344){
switch(arguments.length){
case 0:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1.call(this,state_45344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_dollarize_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45351 = f__38848__auto__();
(statearr_45351[(6)] = c__38847__auto__);

return statearr_45351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_repayments = (function compevent$core$_LT_comp_repayments(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var repay_filter = (comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.RepayBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45367){
var state_val_45368 = (state_45367[(1)]);
if((state_val_45368 === (1))){
var inst_45352 = compevent.core.provider.getLogs(repay_filter);
var inst_45353 = cljs.core.async.interop.p__GT_c(inst_45352);
var state_45367__$1 = state_45367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45367__$1,(2),inst_45353);
} else {
if((state_val_45368 === (2))){
var inst_45355 = (state_45367[(7)]);
var inst_45355__$1 = (state_45367[(2)]);
var inst_45356 = (inst_45355__$1 instanceof cljs.core.ExceptionInfo);
var inst_45357 = cljs.core.ex_data(inst_45355__$1);
var inst_45358 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45357);
var inst_45359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45358,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45360 = ((inst_45356) && (inst_45359));
var state_45367__$1 = (function (){var statearr_45369 = state_45367;
(statearr_45369[(7)] = inst_45355__$1);

return statearr_45369;
})();
if(cljs.core.truth_(inst_45360)){
var statearr_45370_45870 = state_45367__$1;
(statearr_45370_45870[(1)] = (3));

} else {
var statearr_45371_45871 = state_45367__$1;
(statearr_45371_45871[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (3))){
var inst_45355 = (state_45367[(7)]);
var inst_45362 = (function(){throw inst_45355})();
var state_45367__$1 = state_45367;
var statearr_45372_45872 = state_45367__$1;
(statearr_45372_45872[(2)] = inst_45362);

(statearr_45372_45872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (4))){
var inst_45355 = (state_45367[(7)]);
var state_45367__$1 = state_45367;
var statearr_45373_45873 = state_45367__$1;
(statearr_45373_45873[(2)] = inst_45355);

(statearr_45373_45873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45368 === (5))){
var inst_45365 = (state_45367[(2)]);
var state_45367__$1 = state_45367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45367__$1,inst_45365);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_45374 = [null,null,null,null,null,null,null,null];
(statearr_45374[(0)] = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__);

(statearr_45374[(1)] = (1));

return statearr_45374;
});
var compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1 = (function (state_45367){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45367);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45375){var ex__38759__auto__ = e45375;
var statearr_45376_45874 = state_45367;
(statearr_45376_45874[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45367[(4)]))){
var statearr_45377_45875 = state_45367;
(statearr_45377_45875[(1)] = cljs.core.first((state_45367[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45876 = state_45367;
state_45367 = G__45876;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__ = function(state_45367){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1.call(this,state_45367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45378 = f__38848__auto__();
(statearr_45378[(6)] = c__38847__auto__);

return statearr_45378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_liquidations = (function compevent$core$_LT_comp_liquidations(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var liquidation_filter = (comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.LiquidateBorrow.call(null));
var _ = (liquidation_filter.fromBlock = start_block);
var ___$1 = (liquidation_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45394){
var state_val_45395 = (state_45394[(1)]);
if((state_val_45395 === (1))){
var inst_45379 = compevent.core.provider.getLogs(liquidation_filter);
var inst_45380 = cljs.core.async.interop.p__GT_c(inst_45379);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45394__$1,(2),inst_45380);
} else {
if((state_val_45395 === (2))){
var inst_45382 = (state_45394[(7)]);
var inst_45382__$1 = (state_45394[(2)]);
var inst_45383 = (inst_45382__$1 instanceof cljs.core.ExceptionInfo);
var inst_45384 = cljs.core.ex_data(inst_45382__$1);
var inst_45385 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45384);
var inst_45386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45385,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45387 = ((inst_45383) && (inst_45386));
var state_45394__$1 = (function (){var statearr_45396 = state_45394;
(statearr_45396[(7)] = inst_45382__$1);

return statearr_45396;
})();
if(cljs.core.truth_(inst_45387)){
var statearr_45397_45877 = state_45394__$1;
(statearr_45397_45877[(1)] = (3));

} else {
var statearr_45398_45878 = state_45394__$1;
(statearr_45398_45878[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (3))){
var inst_45382 = (state_45394[(7)]);
var inst_45389 = (function(){throw inst_45382})();
var state_45394__$1 = state_45394;
var statearr_45399_45879 = state_45394__$1;
(statearr_45399_45879[(2)] = inst_45389);

(statearr_45399_45879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (4))){
var inst_45382 = (state_45394[(7)]);
var state_45394__$1 = state_45394;
var statearr_45400_45880 = state_45394__$1;
(statearr_45400_45880[(2)] = inst_45382);

(statearr_45400_45880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45395 === (5))){
var inst_45392 = (state_45394[(2)]);
var state_45394__$1 = state_45394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45394__$1,inst_45392);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_45401 = [null,null,null,null,null,null,null,null];
(statearr_45401[(0)] = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__);

(statearr_45401[(1)] = (1));

return statearr_45401;
});
var compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_45394){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45394);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45402){var ex__38759__auto__ = e45402;
var statearr_45403_45881 = state_45394;
(statearr_45403_45881[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45394[(4)]))){
var statearr_45404_45882 = state_45394;
(statearr_45404_45882[(1)] = cljs.core.first((state_45394[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45883 = state_45394;
state_45394 = G__45883;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__ = function(state_45394){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_45394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45405 = f__38848__auto__();
(statearr_45405[(6)] = c__38847__auto__);

return statearr_45405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_mints = (function compevent$core$_LT_comp_mints(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var mint_filter = (comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Mint.call(null));
var _ = (mint_filter.fromBlock = start_block);
var ___$1 = (mint_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45421){
var state_val_45422 = (state_45421[(1)]);
if((state_val_45422 === (1))){
var inst_45406 = compevent.core.provider.getLogs(mint_filter);
var inst_45407 = cljs.core.async.interop.p__GT_c(inst_45406);
var state_45421__$1 = state_45421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45421__$1,(2),inst_45407);
} else {
if((state_val_45422 === (2))){
var inst_45409 = (state_45421[(7)]);
var inst_45409__$1 = (state_45421[(2)]);
var inst_45410 = (inst_45409__$1 instanceof cljs.core.ExceptionInfo);
var inst_45411 = cljs.core.ex_data(inst_45409__$1);
var inst_45412 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45411);
var inst_45413 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45412,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45414 = ((inst_45410) && (inst_45413));
var state_45421__$1 = (function (){var statearr_45423 = state_45421;
(statearr_45423[(7)] = inst_45409__$1);

return statearr_45423;
})();
if(cljs.core.truth_(inst_45414)){
var statearr_45424_45884 = state_45421__$1;
(statearr_45424_45884[(1)] = (3));

} else {
var statearr_45425_45885 = state_45421__$1;
(statearr_45425_45885[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (3))){
var inst_45409 = (state_45421[(7)]);
var inst_45416 = (function(){throw inst_45409})();
var state_45421__$1 = state_45421;
var statearr_45426_45886 = state_45421__$1;
(statearr_45426_45886[(2)] = inst_45416);

(statearr_45426_45886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (4))){
var inst_45409 = (state_45421[(7)]);
var state_45421__$1 = state_45421;
var statearr_45427_45887 = state_45421__$1;
(statearr_45427_45887[(2)] = inst_45409);

(statearr_45427_45887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (5))){
var inst_45419 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45421__$1,inst_45419);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_45428 = [null,null,null,null,null,null,null,null];
(statearr_45428[(0)] = compevent$core$_LT_comp_mints_$_state_machine__38756__auto__);

(statearr_45428[(1)] = (1));

return statearr_45428;
});
var compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1 = (function (state_45421){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45421);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45429){var ex__38759__auto__ = e45429;
var statearr_45430_45888 = state_45421;
(statearr_45430_45888[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45421[(4)]))){
var statearr_45431_45889 = state_45421;
(statearr_45431_45889[(1)] = cljs.core.first((state_45421[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45890 = state_45421;
state_45421 = G__45890;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__ = function(state_45421){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1.call(this,state_45421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45432 = f__38848__auto__();
(statearr_45432[(6)] = c__38847__auto__);

return statearr_45432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_borrows = (function compevent$core$_LT_comp_borrows(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var borrow_filter = (comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Borrow.call(null));
var _ = (borrow_filter.fromBlock = start_block);
var ___$1 = (borrow_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45448){
var state_val_45449 = (state_45448[(1)]);
if((state_val_45449 === (1))){
var inst_45433 = compevent.core.provider.getLogs(borrow_filter);
var inst_45434 = cljs.core.async.interop.p__GT_c(inst_45433);
var state_45448__$1 = state_45448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45448__$1,(2),inst_45434);
} else {
if((state_val_45449 === (2))){
var inst_45436 = (state_45448[(7)]);
var inst_45436__$1 = (state_45448[(2)]);
var inst_45437 = (inst_45436__$1 instanceof cljs.core.ExceptionInfo);
var inst_45438 = cljs.core.ex_data(inst_45436__$1);
var inst_45439 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45438);
var inst_45440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45439,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45441 = ((inst_45437) && (inst_45440));
var state_45448__$1 = (function (){var statearr_45450 = state_45448;
(statearr_45450[(7)] = inst_45436__$1);

return statearr_45450;
})();
if(cljs.core.truth_(inst_45441)){
var statearr_45451_45891 = state_45448__$1;
(statearr_45451_45891[(1)] = (3));

} else {
var statearr_45452_45892 = state_45448__$1;
(statearr_45452_45892[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45449 === (3))){
var inst_45436 = (state_45448[(7)]);
var inst_45443 = (function(){throw inst_45436})();
var state_45448__$1 = state_45448;
var statearr_45453_45893 = state_45448__$1;
(statearr_45453_45893[(2)] = inst_45443);

(statearr_45453_45893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45449 === (4))){
var inst_45436 = (state_45448[(7)]);
var state_45448__$1 = state_45448;
var statearr_45454_45894 = state_45448__$1;
(statearr_45454_45894[(2)] = inst_45436);

(statearr_45454_45894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45449 === (5))){
var inst_45446 = (state_45448[(2)]);
var state_45448__$1 = state_45448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45448__$1,inst_45446);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_45455 = [null,null,null,null,null,null,null,null];
(statearr_45455[(0)] = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__);

(statearr_45455[(1)] = (1));

return statearr_45455;
});
var compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1 = (function (state_45448){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45448);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45456){var ex__38759__auto__ = e45456;
var statearr_45457_45895 = state_45448;
(statearr_45457_45895[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45448[(4)]))){
var statearr_45458_45896 = state_45448;
(statearr_45458_45896[(1)] = cljs.core.first((state_45448[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45897 = state_45448;
state_45448 = G__45897;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__ = function(state_45448){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1.call(this,state_45448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45459 = f__38848__auto__();
(statearr_45459[(6)] = c__38847__auto__);

return statearr_45459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_comp_redeems = (function compevent$core$_LT_comp_redeems(caddress,start_block,end_block){
var comp_contract = compevent.core.make_contract(compevent.core.comp_abi,caddress);
var redeem_filter = (comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Redeem.call(null));
var _ = (redeem_filter.fromBlock = start_block);
var ___$1 = (redeem_filter.toBlock = end_block);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45475){
var state_val_45476 = (state_45475[(1)]);
if((state_val_45476 === (1))){
var inst_45460 = compevent.core.provider.getLogs(redeem_filter);
var inst_45461 = cljs.core.async.interop.p__GT_c(inst_45460);
var state_45475__$1 = state_45475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45475__$1,(2),inst_45461);
} else {
if((state_val_45476 === (2))){
var inst_45463 = (state_45475[(7)]);
var inst_45463__$1 = (state_45475[(2)]);
var inst_45464 = (inst_45463__$1 instanceof cljs.core.ExceptionInfo);
var inst_45465 = cljs.core.ex_data(inst_45463__$1);
var inst_45466 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45465);
var inst_45467 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45466,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45468 = ((inst_45464) && (inst_45467));
var state_45475__$1 = (function (){var statearr_45477 = state_45475;
(statearr_45477[(7)] = inst_45463__$1);

return statearr_45477;
})();
if(cljs.core.truth_(inst_45468)){
var statearr_45478_45898 = state_45475__$1;
(statearr_45478_45898[(1)] = (3));

} else {
var statearr_45479_45899 = state_45475__$1;
(statearr_45479_45899[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45476 === (3))){
var inst_45463 = (state_45475[(7)]);
var inst_45470 = (function(){throw inst_45463})();
var state_45475__$1 = state_45475;
var statearr_45480_45900 = state_45475__$1;
(statearr_45480_45900[(2)] = inst_45470);

(statearr_45480_45900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45476 === (4))){
var inst_45463 = (state_45475[(7)]);
var state_45475__$1 = state_45475;
var statearr_45481_45901 = state_45475__$1;
(statearr_45481_45901[(2)] = inst_45463);

(statearr_45481_45901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45476 === (5))){
var inst_45473 = (state_45475[(2)]);
var state_45475__$1 = state_45475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45475__$1,inst_45473);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_45482 = [null,null,null,null,null,null,null,null];
(statearr_45482[(0)] = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__);

(statearr_45482[(1)] = (1));

return statearr_45482;
});
var compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1 = (function (state_45475){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45475);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45483){var ex__38759__auto__ = e45483;
var statearr_45484_45902 = state_45475;
(statearr_45484_45902[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45475[(4)]))){
var statearr_45485_45903 = state_45475;
(statearr_45485_45903[(1)] = cljs.core.first((state_45475[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45904 = state_45475;
state_45475 = G__45904;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__ = function(state_45475){
switch(arguments.length){
case 0:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1.call(this,state_45475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45486 = f__38848__auto__();
(statearr_45486[(6)] = c__38847__auto__);

return statearr_45486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.make_comp_repayment = (function compevent$core$make_comp_repayment(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"account-borrrows","account-borrrows",-395615768),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"payer","payer",443929743),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603)],[tx_hash,caddress,compevent.core.ebn__GT_bn(tx_args.accountBorrows,decimals),"repayment",block_number,tx_args.payer,compevent.core.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.borrower,compevent.core.ebn__GT_bn(tx_args.totalBorrows,decimals)]);
});
compevent.core.make_comp_liquidation = (function compevent$core$make_comp_liquidation(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"seize-tokens","seize-tokens",-1982010893),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"liquidator","liquidator",676132375),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"c-token-collateral","c-token-collateral",1555321853)],[tx_hash,caddress,"liquidation",block_number,compevent.core.ebn__GT_bn(tx_args.seizeTokens,decimals),compevent.core.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.liquidator,tx_args.borrower,tx_args.cTokenCollateral]);
});
compevent.core.make_comp_mint = (function compevent$core$make_comp_mint(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"minter","minter",280863112),tx_args.minter,new cljs.core.Keyword(null,"mint-amount","mint-amount",961101419),compevent.core.ebn__GT_bn(tx_args.mintAmount,decimals),new cljs.core.Keyword(null,"mint-tokens","mint-tokens",1594108366),compevent.core.ebn__GT_bn(tx_args.mintTokens,decimals),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"type","type",1174270348),"mint",new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core.make_comp_borrow = (function compevent$core$make_comp_borrow(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"borrower","borrower",1776622391),tx_args.borrower,new cljs.core.Keyword(null,"borrow-amount","borrow-amount",-909882063),compevent.core.ebn__GT_bn(tx_args.borrowAmount,decimals),new cljs.core.Keyword(null,"account-borrows","account-borrows",-286211829),compevent.core.ebn__GT_bn(tx_args.accountBorrows,decimals),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603),compevent.core.ebn__GT_bn(tx_args.totalBorrows,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"borrow",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core.make_comp_redeem = (function compevent$core$make_comp_redeem(tx,decimals){
var parsed_event = compevent.core.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"redeemer","redeemer",-319029372),tx_args.redeemer,new cljs.core.Keyword(null,"redeem-amount","redeem-amount",541522884),compevent.core.ebn__GT_bn(tx_args.redeemAmount,decimals),new cljs.core.Keyword(null,"redeem-tokens","redeem-tokens",1379041193),compevent.core.ebn__GT_bn(tx_args.redeemTokens,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"redeem",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
compevent.core._LT_fetch_comp_logs = (function compevent$core$_LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45487_SHARP_){
var G__45488 = caddress;
var G__45489 = p1__45487_SHARP_;
var G__45490 = (p1__45487_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__45488,G__45489,G__45490) : logsfn.call(null,G__45488,G__45489,G__45490));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
compevent.core._LT_pfetch_comp_logs = (function compevent$core$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45498){
var state_val_45499 = (state_45498[(1)]);
if((state_val_45499 === (1))){
var inst_45492 = compevent.core._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45498__$1,(2),inst_45492);
} else {
if((state_val_45499 === (2))){
var inst_45494 = (state_45498[(2)]);
var inst_45495 = (function (){var fetched_logs = inst_45494;
return (function (p1__45491_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__45491_SHARP_,decimals) : parsefn.call(null,p1__45491_SHARP_,decimals));
});
})();
var inst_45496 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45495,inst_45494);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45498__$1,inst_45496);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0 = (function (){
var statearr_45500 = [null,null,null,null,null,null,null];
(statearr_45500[(0)] = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__);

(statearr_45500[(1)] = (1));

return statearr_45500;
});
var compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1 = (function (state_45498){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45498);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45501){var ex__38759__auto__ = e45501;
var statearr_45502_45905 = state_45498;
(statearr_45502_45905[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45498[(4)]))){
var statearr_45503_45906 = state_45498;
(statearr_45503_45906[(1)] = cljs.core.first((state_45498[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45907 = state_45498;
state_45498 = G__45907;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__ = function(state_45498){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1.call(this,state_45498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_logs_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45504 = f__38848__auto__();
(statearr_45504[(6)] = c__38847__auto__);

return statearr_45504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_repayments = (function compevent$core$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45509){
var state_val_45510 = (state_45509[(1)]);
if((state_val_45510 === (1))){
var inst_45505 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_repayments,compevent.core.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_45509__$1 = state_45509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45509__$1,(2),inst_45505);
} else {
if((state_val_45510 === (2))){
var inst_45507 = (state_45509[(2)]);
var state_45509__$1 = state_45509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45509__$1,inst_45507);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0 = (function (){
var statearr_45511 = [null,null,null,null,null,null,null];
(statearr_45511[(0)] = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__);

(statearr_45511[(1)] = (1));

return statearr_45511;
});
var compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1 = (function (state_45509){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45509);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45512){var ex__38759__auto__ = e45512;
var statearr_45513_45908 = state_45509;
(statearr_45513_45908[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45509[(4)]))){
var statearr_45514_45909 = state_45509;
(statearr_45514_45909[(1)] = cljs.core.first((state_45509[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45910 = state_45509;
state_45509 = G__45910;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__ = function(state_45509){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1.call(this,state_45509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_repayments_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45515 = f__38848__auto__();
(statearr_45515[(6)] = c__38847__auto__);

return statearr_45515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_mints = (function compevent$core$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45520){
var state_val_45521 = (state_45520[(1)]);
if((state_val_45521 === (1))){
var inst_45516 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_mints,compevent.core.make_comp_mint,caddress,start_block,end_block,decimals);
var state_45520__$1 = state_45520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45520__$1,(2),inst_45516);
} else {
if((state_val_45521 === (2))){
var inst_45518 = (state_45520[(2)]);
var state_45520__$1 = state_45520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45520__$1,inst_45518);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0 = (function (){
var statearr_45522 = [null,null,null,null,null,null,null];
(statearr_45522[(0)] = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__);

(statearr_45522[(1)] = (1));

return statearr_45522;
});
var compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1 = (function (state_45520){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45520);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45523){var ex__38759__auto__ = e45523;
var statearr_45524_45911 = state_45520;
(statearr_45524_45911[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45520[(4)]))){
var statearr_45525_45912 = state_45520;
(statearr_45525_45912[(1)] = cljs.core.first((state_45520[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45913 = state_45520;
state_45520 = G__45913;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__ = function(state_45520){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1.call(this,state_45520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_mints_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45526 = f__38848__auto__();
(statearr_45526[(6)] = c__38847__auto__);

return statearr_45526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_liquidations = (function compevent$core$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45531){
var state_val_45532 = (state_45531[(1)]);
if((state_val_45532 === (1))){
var inst_45527 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_liquidations,compevent.core.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_45531__$1 = state_45531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45531__$1,(2),inst_45527);
} else {
if((state_val_45532 === (2))){
var inst_45529 = (state_45531[(2)]);
var state_45531__$1 = state_45531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45531__$1,inst_45529);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0 = (function (){
var statearr_45533 = [null,null,null,null,null,null,null];
(statearr_45533[(0)] = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__);

(statearr_45533[(1)] = (1));

return statearr_45533;
});
var compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1 = (function (state_45531){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45531);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45534){var ex__38759__auto__ = e45534;
var statearr_45535_45914 = state_45531;
(statearr_45535_45914[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45531[(4)]))){
var statearr_45536_45915 = state_45531;
(statearr_45536_45915[(1)] = cljs.core.first((state_45531[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45916 = state_45531;
state_45531 = G__45916;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__ = function(state_45531){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1.call(this,state_45531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_liquidations_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45537 = f__38848__auto__();
(statearr_45537[(6)] = c__38847__auto__);

return statearr_45537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_borrows = (function compevent$core$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45542){
var state_val_45543 = (state_45542[(1)]);
if((state_val_45543 === (1))){
var inst_45538 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_borrows,compevent.core.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45542__$1,(2),inst_45538);
} else {
if((state_val_45543 === (2))){
var inst_45540 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45542__$1,inst_45540);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0 = (function (){
var statearr_45544 = [null,null,null,null,null,null,null];
(statearr_45544[(0)] = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__);

(statearr_45544[(1)] = (1));

return statearr_45544;
});
var compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1 = (function (state_45542){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45542);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45545){var ex__38759__auto__ = e45545;
var statearr_45546_45917 = state_45542;
(statearr_45546_45917[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45542[(4)]))){
var statearr_45547_45918 = state_45542;
(statearr_45547_45918[(1)] = cljs.core.first((state_45542[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45919 = state_45542;
state_45542 = G__45919;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__ = function(state_45542){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1.call(this,state_45542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_borrows_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45548 = f__38848__auto__();
(statearr_45548[(6)] = c__38847__auto__);

return statearr_45548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_comp_redeems = (function compevent$core$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45553){
var state_val_45554 = (state_45553[(1)]);
if((state_val_45554 === (1))){
var inst_45549 = compevent.core._LT_pfetch_comp_logs(compevent.core._LT_comp_redeems,compevent.core.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_45553__$1 = state_45553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45553__$1,(2),inst_45549);
} else {
if((state_val_45554 === (2))){
var inst_45551 = (state_45553[(2)]);
var state_45553__$1 = state_45553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45553__$1,inst_45551);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0 = (function (){
var statearr_45555 = [null,null,null,null,null,null,null];
(statearr_45555[(0)] = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__);

(statearr_45555[(1)] = (1));

return statearr_45555;
});
var compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1 = (function (state_45553){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45553);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45556){var ex__38759__auto__ = e45556;
var statearr_45557_45920 = state_45553;
(statearr_45557_45920[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45553[(4)]))){
var statearr_45558_45921 = state_45553;
(statearr_45558_45921[(1)] = cljs.core.first((state_45553[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45922 = state_45553;
state_45553 = G__45922;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__ = function(state_45553){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1.call(this,state_45553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_comp_redeems_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45559 = f__38848__auto__();
(statearr_45559[(6)] = c__38847__auto__);

return statearr_45559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_pfetch_ctoken_events = (function compevent$core$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45578){
var state_val_45579 = (state_45578[(1)]);
if((state_val_45579 === (1))){
var inst_45560 = compevent.core._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_45578__$1 = state_45578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45578__$1,(2),inst_45560);
} else {
if((state_val_45579 === (2))){
var inst_45562 = (state_45578[(2)]);
var inst_45563 = compevent.core._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_45578__$1 = (function (){var statearr_45580 = state_45578;
(statearr_45580[(7)] = inst_45562);

return statearr_45580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45578__$1,(3),inst_45563);
} else {
if((state_val_45579 === (3))){
var inst_45565 = (state_45578[(2)]);
var inst_45566 = compevent.core._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_45578__$1 = (function (){var statearr_45581 = state_45578;
(statearr_45581[(8)] = inst_45565);

return statearr_45581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45578__$1,(4),inst_45566);
} else {
if((state_val_45579 === (4))){
var inst_45568 = (state_45578[(2)]);
var inst_45569 = compevent.core._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_45578__$1 = (function (){var statearr_45582 = state_45578;
(statearr_45582[(9)] = inst_45568);

return statearr_45582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45578__$1,(5),inst_45569);
} else {
if((state_val_45579 === (5))){
var inst_45571 = (state_45578[(2)]);
var inst_45572 = compevent.core._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_45578__$1 = (function (){var statearr_45583 = state_45578;
(statearr_45583[(10)] = inst_45571);

return statearr_45583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45578__$1,(6),inst_45572);
} else {
if((state_val_45579 === (6))){
var inst_45571 = (state_45578[(10)]);
var inst_45562 = (state_45578[(7)]);
var inst_45565 = (state_45578[(8)]);
var inst_45568 = (state_45578[(9)]);
var inst_45574 = (state_45578[(2)]);
var inst_45575 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_45562,inst_45565,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45568,inst_45571,inst_45574], 0));
var inst_45576 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_45575);
var state_45578__$1 = state_45578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45578__$1,inst_45576);
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
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0 = (function (){
var statearr_45584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45584[(0)] = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__);

(statearr_45584[(1)] = (1));

return statearr_45584;
});
var compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1 = (function (state_45578){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45578);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45585){var ex__38759__auto__ = e45585;
var statearr_45586_45923 = state_45578;
(statearr_45586_45923[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45578[(4)]))){
var statearr_45587_45924 = state_45578;
(statearr_45587_45924[(1)] = cljs.core.first((state_45578[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45925 = state_45578;
state_45578 = G__45925;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__ = function(state_45578){
switch(arguments.length){
case 0:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1.call(this,state_45578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____0;
compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto____1;
return compevent$core$_LT_pfetch_ctoken_events_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45588 = f__38848__auto__();
(statearr_45588[(6)] = c__38847__auto__);

return statearr_45588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.account_ctoken_events = (function compevent$core$account_ctoken_events(ctoken_events,account){
var account_SINGLEQUOTE_ = clojure.string.lower_case(account);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (event){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"borrow")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"repayment")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,(function (){var and__4115__auto__ = clojure.string.lower_case(new cljs.core.Keyword(null,"payer","payer",443929743).cljs$core$IFn$_invoke$arity$1(event));
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event));
} else {
return and__4115__auto__;
}
})())))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"mint")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account_SINGLEQUOTE_,clojure.string.lower_case(new cljs.core.Keyword(null,"minter","minter",280863112).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"redeem")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account,clojure.string.lower_case(new cljs.core.Keyword(null,"redeemer","redeemer",-319029372).cljs$core$IFn$_invoke$arity$1(event)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event),"liquidation")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(account,clojure.string.lower_case(new cljs.core.Keyword(null,"borrower","borrower",1776622391).cljs$core$IFn$_invoke$arity$1(event)))))));
}),ctoken_events);
});
compevent.core.acc_health = (function compevent$core$acc_health(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"health"),"value"));
});
compevent.core.acc_address = (function compevent$core$acc_address(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"address");
});
compevent.core.total_borrow_eth = (function compevent$core$total_borrow_eth(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_borrow_value_in_eth"),"value"));
});
compevent.core.total_collateral_eth = (function compevent$core$total_collateral_eth(a){
return compevent.core.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_collateral_value_in_eth"),"value"));
});
compevent.core.block_number = (function compevent$core$block_number(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"block-number");
});
compevent.core.token_borrow_underlying = (function compevent$core$token_borrow_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45589_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__45589_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.token_supply_underlying = (function compevent$core$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45590_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__45590_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return compevent.core.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"supply_balance_underlying","supply_balance_underlying",1572069900).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return compevent.core.bn("0.0");
}
});
compevent.core.acc_state = (function compevent$core$acc_state(a){
var a_SINGLEQUOTE_ = clojure.walk.keywordize_keys(a);
var dai_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cDAI");
var dai_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cDAI");
var usdc_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdc_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdt_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDT");
var usdt_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUSDT");
var eth_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cETH");
var eth_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cETH");
var sai_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cSAI");
var sai_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cSAI");
var bat_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cBAT");
var bat_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cBAT");
var comp_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cCOMP");
var comp_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cCOMP");
var uni_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cUNI");
var uni_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cUNI");
var wbtc_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cWBTC");
var wbtc_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cWBTC");
var zrx_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cZRX");
var zrx_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cZRX");
var rep_borrowed = compevent.core.token_borrow_underlying(a_SINGLEQUOTE_,"cREP");
var rep_supplied = compevent.core.token_supply_underlying(a_SINGLEQUOTE_,"cREP");
var usd_value_borrowed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dai_borrowed,usdc_borrowed,usdt_borrowed], null));
var usd_value_supplied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dai_supplied,usdc_supplied,usdt_supplied], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336),new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896),new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322),new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555)],[comp_supplied,zrx_supplied,uni_supplied,sai_supplied,usdt_supplied,wbtc_supplied,usdc_supplied,compevent.core.total_collateral_eth(a),sai_borrowed,compevent.core.total_borrow_eth(a),usdt_borrowed,compevent.core.block_number(a),rep_borrowed,comp_borrowed,usd_value_supplied,compevent.core.acc_address(a),eth_borrowed,dai_supplied,usdc_borrowed,rep_supplied,uni_borrowed,wbtc_borrowed,eth_supplied,zrx_borrowed,compevent.core.acc_health(a),usd_value_borrowed,bat_supplied,dai_borrowed,bat_borrowed]);
});
compevent.core._LT_account_state = (function compevent$core$_LT_account_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45926 = arguments.length;
var i__4737__auto___45927 = (0);
while(true){
if((i__4737__auto___45927 < len__4736__auto___45926)){
args__4742__auto__.push((arguments[i__4737__auto___45927]));

var G__45928 = (i__4737__auto___45927 + (1));
i__4737__auto___45927 = G__45928;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(compevent.core._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__45593){
var map__45594 = p__45593;
var map__45594__$1 = (((((!((map__45594 == null))))?(((((map__45594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45594):map__45594);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45594__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45616){
var state_val_45617 = (state_45616[(1)]);
if((state_val_45617 === (1))){
var inst_45596 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_45597 = [address,block_number];
var inst_45598 = cljs.core.PersistentHashMap.fromArrays(inst_45596,inst_45597);
var inst_45599 = cljs.core.clj__GT_js(inst_45598);
var inst_45600 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_45599);
var inst_45601 = cljs.core.async.interop.p__GT_c(inst_45600);
var state_45616__$1 = state_45616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45616__$1,(2),inst_45601);
} else {
if((state_val_45617 === (2))){
var inst_45603 = (state_45616[(7)]);
var inst_45603__$1 = (state_45616[(2)]);
var inst_45604 = (inst_45603__$1 instanceof cljs.core.ExceptionInfo);
var inst_45605 = cljs.core.ex_data(inst_45603__$1);
var inst_45606 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45605);
var inst_45607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45606,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45608 = ((inst_45604) && (inst_45607));
var state_45616__$1 = (function (){var statearr_45618 = state_45616;
(statearr_45618[(7)] = inst_45603__$1);

return statearr_45618;
})();
if(cljs.core.truth_(inst_45608)){
var statearr_45619_45929 = state_45616__$1;
(statearr_45619_45929[(1)] = (3));

} else {
var statearr_45620_45930 = state_45616__$1;
(statearr_45620_45930[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45617 === (3))){
var inst_45603 = (state_45616[(7)]);
var inst_45610 = (function(){throw inst_45603})();
var state_45616__$1 = state_45616;
var statearr_45621_45931 = state_45616__$1;
(statearr_45621_45931[(2)] = inst_45610);

(statearr_45621_45931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45617 === (4))){
var inst_45603 = (state_45616[(7)]);
var state_45616__$1 = state_45616;
var statearr_45622_45932 = state_45616__$1;
(statearr_45622_45932[(2)] = inst_45603);

(statearr_45622_45932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45617 === (5))){
var inst_45613 = (state_45616[(2)]);
var inst_45614 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_45613);
var state_45616__$1 = state_45616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45616__$1,inst_45614);
} else {
return null;
}
}
}
}
}
});
return (function() {
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_45623 = [null,null,null,null,null,null,null,null];
(statearr_45623[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_45623[(1)] = (1));

return statearr_45623;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_45616){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45616);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45624){var ex__38759__auto__ = e45624;
var statearr_45625_45933 = state_45616;
(statearr_45625_45933[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45616[(4)]))){
var statearr_45626_45934 = state_45616;
(statearr_45626_45934[(1)] = cljs.core.first((state_45616[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45935 = state_45616;
state_45616 = G__45935;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_45616){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_45616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45627 = f__38848__auto__();
(statearr_45627[(6)] = c__38847__auto__);

return statearr_45627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(compevent.core._LT_account_state.cljs$lang$applyTo = (function (seq45591){
var G__45592 = cljs.core.first(seq45591);
var seq45591__$1 = cljs.core.next(seq45591);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45592,seq45591__$1);
}));

compevent.core._LT_account_states = (function compevent$core$_LT_account_states(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45936 = arguments.length;
var i__4737__auto___45937 = (0);
while(true){
if((i__4737__auto___45937 < len__4736__auto___45936)){
args__4742__auto__.push((arguments[i__4737__auto___45937]));

var G__45938 = (i__4737__auto___45937 + (1));
i__4737__auto___45937 = G__45938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core._LT_account_states.cljs$core$IFn$_invoke$arity$variadic = (function (accounts,block_number,p__45632){
var map__45633 = p__45632;
var map__45633__$1 = (((((!((map__45633 == null))))?(((((map__45633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45633):map__45633);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45633__$1,new cljs.core.Keyword(null,"raw","raw",1604651272),false);
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45663){
var state_val_45664 = (state_45663[(1)]);
if((state_val_45664 === (1))){
var inst_45635 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"page_size","page_size",-1574119768),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_45636 = [accounts,(1000),block_number];
var inst_45637 = cljs.core.PersistentHashMap.fromArrays(inst_45635,inst_45636);
var inst_45638 = cljs.core.clj__GT_js(inst_45637);
var inst_45639 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_45638);
var inst_45640 = cljs.core.async.interop.p__GT_c(inst_45639);
var state_45663__$1 = state_45663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45663__$1,(2),inst_45640);
} else {
if((state_val_45664 === (2))){
var inst_45642 = (state_45663[(7)]);
var inst_45642__$1 = (state_45663[(2)]);
var inst_45643 = (inst_45642__$1 instanceof cljs.core.ExceptionInfo);
var inst_45644 = cljs.core.ex_data(inst_45642__$1);
var inst_45645 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45644);
var inst_45646 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45645,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45647 = ((inst_45643) && (inst_45646));
var state_45663__$1 = (function (){var statearr_45665 = state_45663;
(statearr_45665[(7)] = inst_45642__$1);

return statearr_45665;
})();
if(cljs.core.truth_(inst_45647)){
var statearr_45666_45939 = state_45663__$1;
(statearr_45666_45939[(1)] = (3));

} else {
var statearr_45667_45940 = state_45663__$1;
(statearr_45667_45940[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (3))){
var inst_45642 = (state_45663[(7)]);
var inst_45649 = (function(){throw inst_45642})();
var state_45663__$1 = state_45663;
var statearr_45668_45941 = state_45663__$1;
(statearr_45668_45941[(2)] = inst_45649);

(statearr_45668_45941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (4))){
var inst_45642 = (state_45663[(7)]);
var state_45663__$1 = state_45663;
var statearr_45669_45942 = state_45663__$1;
(statearr_45669_45942[(2)] = inst_45642);

(statearr_45669_45942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (5))){
var inst_45652 = (state_45663[(2)]);
var inst_45653 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_45652);
var inst_45654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45653,"accounts");
var inst_45655 = (function (){var resp = inst_45653;
var account_resps = inst_45654;
return (function (p1__45628_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__45628_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_45656 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45655,inst_45654);
var state_45663__$1 = (function (){var statearr_45670 = state_45663;
(statearr_45670[(8)] = inst_45656);

return statearr_45670;
})();
if(cljs.core.truth_(raw)){
var statearr_45671_45943 = state_45663__$1;
(statearr_45671_45943[(1)] = (6));

} else {
var statearr_45672_45944 = state_45663__$1;
(statearr_45672_45944[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (6))){
var state_45663__$1 = state_45663;
var statearr_45673_45945 = state_45663__$1;
(statearr_45673_45945[(2)] = cljs.core.identity);

(statearr_45673_45945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (7))){
var state_45663__$1 = state_45663;
var statearr_45674_45946 = state_45663__$1;
(statearr_45674_45946[(2)] = compevent.core.acc_state);

(statearr_45674_45946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45664 === (8))){
var inst_45656 = (state_45663[(8)]);
var inst_45660 = (state_45663[(2)]);
var inst_45661 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45660,inst_45656);
var state_45663__$1 = state_45663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45663__$1,inst_45661);
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
var compevent$core$state_machine__38756__auto__ = null;
var compevent$core$state_machine__38756__auto____0 = (function (){
var statearr_45675 = [null,null,null,null,null,null,null,null,null];
(statearr_45675[(0)] = compevent$core$state_machine__38756__auto__);

(statearr_45675[(1)] = (1));

return statearr_45675;
});
var compevent$core$state_machine__38756__auto____1 = (function (state_45663){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45663);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45676){var ex__38759__auto__ = e45676;
var statearr_45677_45947 = state_45663;
(statearr_45677_45947[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45663[(4)]))){
var statearr_45678_45948 = state_45663;
(statearr_45678_45948[(1)] = cljs.core.first((state_45663[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45949 = state_45663;
state_45663 = G__45949;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$state_machine__38756__auto__ = function(state_45663){
switch(arguments.length){
case 0:
return compevent$core$state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$state_machine__38756__auto____1.call(this,state_45663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$state_machine__38756__auto____0;
compevent$core$state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$state_machine__38756__auto____1;
return compevent$core$state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45679 = f__38848__auto__();
(statearr_45679[(6)] = c__38847__auto__);

return statearr_45679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
}));

(compevent.core._LT_account_states.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core._LT_account_states.cljs$lang$applyTo = (function (seq45629){
var G__45630 = cljs.core.first(seq45629);
var seq45629__$1 = cljs.core.next(seq45629);
var G__45631 = cljs.core.first(seq45629__$1);
var seq45629__$2 = cljs.core.next(seq45629__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45630,G__45631,seq45629__$2);
}));

compevent.core._LT_account_state_range = (function compevent$core$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45680_SHARP_){
return compevent.core._LT_account_states(accounts,p1__45680_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,block_step),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_block], null)))));
});
compevent.core.accum_comp_rewards = (function compevent$core$accum_comp_rewards(rewards_txs,data_points){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(rewards_txs))){
return data_points;
} else {
var current_tx = cljs.core.first(rewards_txs);
var prev_dp = cljs.core.last(data_points);
var prev_claimed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(data_points)))?(0):new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479).cljs$core$IFn$_invoke$arity$1(prev_dp));
var current_claim = parseFloat(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(current_tx));
var current_dp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),(prev_claimed + current_claim),new cljs.core.Keyword(null,"side","side",389652279),"Claimed Rewards",new cljs.core.Keyword(null,"comp-claim","comp-claim",-2135079250),current_claim,new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(current_tx)], null);
var G__45950 = cljs.core.rest(rewards_txs);
var G__45951 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__45950;
data_points = G__45951;
continue;
}
break;
}
});
compevent.core._LT_gov_account = (function compevent$core$_LT_gov_account(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45691){
var state_val_45692 = (state_45691[(1)]);
if((state_val_45692 === (1))){
var inst_45681 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_45682 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45681),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_45683 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_45684 = [false];
var inst_45685 = cljs.core.PersistentHashMap.fromArrays(inst_45683,inst_45684);
var inst_45686 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_45682,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45685], 0));
var state_45691__$1 = state_45691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45691__$1,(2),inst_45686);
} else {
if((state_val_45692 === (2))){
var inst_45688 = (state_45691[(2)]);
var inst_45689 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45688);
var state_45691__$1 = state_45691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45691__$1,inst_45689);
} else {
return null;
}
}
});
return (function() {
var compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____0 = (function (){
var statearr_45693 = [null,null,null,null,null,null,null];
(statearr_45693[(0)] = compevent$core$_LT_gov_account_$_state_machine__38756__auto__);

(statearr_45693[(1)] = (1));

return statearr_45693;
});
var compevent$core$_LT_gov_account_$_state_machine__38756__auto____1 = (function (state_45691){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45691);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45694){var ex__38759__auto__ = e45694;
var statearr_45695_45952 = state_45691;
(statearr_45695_45952[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45691[(4)]))){
var statearr_45696_45953 = state_45691;
(statearr_45696_45953[(1)] = cljs.core.first((state_45691[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45954 = state_45691;
state_45691 = G__45954;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_gov_account_$_state_machine__38756__auto__ = function(state_45691){
switch(arguments.length){
case 0:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_gov_account_$_state_machine__38756__auto____1.call(this,state_45691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____0;
compevent$core$_LT_gov_account_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_gov_account_$_state_machine__38756__auto____1;
return compevent$core$_LT_gov_account_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45697 = f__38848__auto__();
(statearr_45697[(6)] = c__38847__auto__);

return statearr_45697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core._LT_fetch_compound_history = (function compevent$core$_LT_fetch_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45721){
var state_val_45722 = (state_45721[(1)]);
if((state_val_45722 === (1))){
var inst_45699 = compevent.core._LT_latest_block();
var state_45721__$1 = state_45721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45721__$1,(2),inst_45699);
} else {
if((state_val_45722 === (2))){
var inst_45701 = (state_45721[(7)]);
var inst_45701__$1 = (state_45721[(2)]);
var inst_45702 = (inst_45701__$1 - (1000000));
var inst_45703 = compevent.core._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(compevent.core.provider,compevent.core.comp_address,compevent.core.comp_unitroller,account);
var state_45721__$1 = (function (){var statearr_45723 = state_45721;
(statearr_45723[(7)] = inst_45701__$1);

(statearr_45723[(8)] = inst_45702);

return statearr_45723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45721__$1,(3),inst_45703);
} else {
if((state_val_45722 === (3))){
var inst_45707 = (state_45721[(9)]);
var inst_45705 = (state_45721[(10)]);
var inst_45701 = (state_45721[(7)]);
var inst_45702 = (state_45721[(8)]);
var inst_45705__$1 = (state_45721[(2)]);
var inst_45706 = cljs.core.PersistentVector.EMPTY;
var inst_45707__$1 = compevent.core.accum_comp_rewards(inst_45705__$1,inst_45706);
var inst_45708 = (function (){var latest_block = inst_45701;
var init_block = inst_45702;
var comp_rewards = inst_45705__$1;
var comp_rewards_SINGLEQUOTE_ = inst_45707__$1;
return (function (dp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-supplied","uni-supplied",-382190686).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-supplied","rep-supplied",-1397190733).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-supplied","wbtc-supplied",-717323097).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(dp),"Supplied",new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-supplied","zrx-supplied",2111704545).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-supplied","comp-supplied",1815953600).cljs$core$IFn$_invoke$arity$1(dp)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),new cljs.core.Keyword(null,"usdt","usdt",999447714),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.Keyword(null,"sai","sai",1975712840),new cljs.core.Keyword(null,"uni","uni",-1194876440),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"wbtc","wbtc",564558416),new cljs.core.Keyword(null,"dai","dai",659273042),new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"eth","eth",1381694970),new cljs.core.Keyword(null,"zrx","zrx",955760380),new cljs.core.Keyword(null,"usdc","usdc",-457089155),new cljs.core.Keyword(null,"comp","comp",1191953630)],[new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"uni-borrowed","uni-borrowed",1234019060).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"rep-borrowed","rep-borrowed",-1191898769).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"wbtc-borrowed","wbtc-borrowed",-383673322).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(dp),"Borrowed",new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"zrx-borrowed","zrx-borrowed",1391887030).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"comp-borrowed","comp-borrowed",-790233713).cljs$core$IFn$_invoke$arity$1(dp)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),"Account Health",new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(dp),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(dp)], null)], null);
});
})();
var inst_45709 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45710 = [account];
var inst_45711 = (new cljs.core.PersistentVector(null,1,(5),inst_45709,inst_45710,null));
var inst_45712 = compevent.core._LT_account_state_range(inst_45711,inst_45702,inst_45701,(10000));
var state_45721__$1 = (function (){var statearr_45724 = state_45721;
(statearr_45724[(9)] = inst_45707__$1);

(statearr_45724[(10)] = inst_45705__$1);

(statearr_45724[(11)] = inst_45708);

return statearr_45724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45721__$1,(4),inst_45712);
} else {
if((state_val_45722 === (4))){
var inst_45707 = (state_45721[(9)]);
var inst_45705 = (state_45721[(10)]);
var inst_45701 = (state_45721[(7)]);
var inst_45708 = (state_45721[(11)]);
var inst_45702 = (state_45721[(8)]);
var inst_45714 = (state_45721[(2)]);
var inst_45715 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_45708,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45714], 0));
var inst_45716 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_45715);
var inst_45717 = (function (){var latest_block = inst_45701;
var init_block = inst_45702;
var comp_rewards = inst_45705;
var comp_rewards_SINGLEQUOTE_ = inst_45707;
var acc_history = inst_45716;
return (function (p1__45698_SHARP_){
return (((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__45698_SHARP_) <= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc_history)))) && ((new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(p1__45698_SHARP_) >= new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc_history)))));
});
})();
var inst_45718 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_45717,inst_45707);
var inst_45719 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_45716,inst_45718);
var state_45721__$1 = state_45721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45721__$1,inst_45719);
} else {
return null;
}
}
}
}
});
return (function() {
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_45725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45725[(0)] = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__);

(statearr_45725[(1)] = (1));

return statearr_45725;
});
var compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1 = (function (state_45721){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45721);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45726){var ex__38759__auto__ = e45726;
var statearr_45727_45955 = state_45721;
(statearr_45727_45955[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45721[(4)]))){
var statearr_45728_45956 = state_45721;
(statearr_45728_45956[(1)] = cljs.core.first((state_45721[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45957 = state_45721;
state_45721 = G__45957;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__ = function(state_45721){
switch(arguments.length){
case 0:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1.call(this,state_45721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____0;
compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto____1;
return compevent$core$_LT_fetch_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45729 = f__38848__auto__();
(statearr_45729[(6)] = c__38847__auto__);

return statearr_45729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.historic_whale_layer = (function compevent$core$historic_whale_layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45958 = arguments.length;
var i__4737__auto___45959 = (0);
while(true){
if((i__4737__auto___45959 < len__4736__auto___45958)){
args__4742__auto__.push((arguments[i__4737__auto___45959]));

var G__45960 = (i__4737__auto___45959 + (1));
i__4737__auto___45959 = G__45960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic = (function (y_field,y_title,p__45734){
var map__45735 = p__45734;
var map__45735__$1 = (((((!((map__45735 == null))))?(((((map__45735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45735):map__45735);
var show_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45735__$1,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false);
var y_min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45735__$1,new cljs.core.Keyword(null,"y-min","y-min",-622367714),false);
var y_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45735__$1,new cljs.core.Keyword(null,"y-max","y-max",1883110878),false);
var y_log = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45735__$1,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false);
var show_rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45735__$1,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(75),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nice","nice",1404040504),false,new cljs.core.Keyword(null,"clamp","clamp",1803814940),true], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),show_labels,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(cljs.core.truth_(show_labels)?true:false)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),y_field,new cljs.core.Keyword(null,"title","title",636505583),y_title,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),true,new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),(10),new cljs.core.Keyword(null,"tickband","tickband",350212636),"extent"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domainMin","domainMin",1827225240),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"side",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"title","title",636505583),"Values",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orient","orient",1933743565),"right",new cljs.core.Keyword(null,"direction","direction",-633359395),"vertical"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Account Health","Supplied","Borrowed","Claimed Rewards"
], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","#706897","#fd3a69","#5aa469"
], null)], null)], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"interpolate","interpolate",798572493),"step"], null)], null)], null))], null);
}));

(compevent.core.historic_whale_layer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(compevent.core.historic_whale_layer.cljs$lang$applyTo = (function (seq45731){
var G__45732 = cljs.core.first(seq45731);
var seq45731__$1 = cljs.core.next(seq45731);
var G__45733 = cljs.core.first(seq45731__$1);
var seq45731__$2 = cljs.core.next(seq45731__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45732,G__45733,seq45731__$2);
}));

compevent.core.make_whale_history_plot = (function compevent$core$make_whale_history_plot(line_points,address){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),line_points], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address)," Compound history"].join(''),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"middle",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gridColor","gridColor",-961341892),"#657b83",new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),0.25,new cljs.core.Keyword(null,"labelColor","labelColor",-1989606001),"#657b83",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#657b83"], null)], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"health","health",-295520649),"Health",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),1.0,new cljs.core.Keyword(null,"y-max","y-max",1883110878),2.5,new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth-value","eth-value",2036076801),"ETH Value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"y-max","y-max",1883110878),(150000),new cljs.core.Keyword(null,"y-log","y-log",-418398391),false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dai","dai",659273042),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dai","dai",659273042),"DAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y-min","y-min",-622367714),(0),new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sai","sai",1975712840),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sai","sai",1975712840),"SAI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat","bat",607903974),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"bat","bat",607903974),"BAT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wbtc","wbtc",564558416),"WBTC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp","comp",1191953630),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp","comp",1191953630),"COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uni","uni",-1194876440),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uni","uni",-1194876440),"UNI",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zrx","zrx",955760380),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"zrx","zrx",955760380),"ZRX",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rep","rep",-1226820564),"REP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdc","usdc",-457089155),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdc","usdc",-457089155),"USDC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usdt","usdt",999447714),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usdt","usdt",999447714),"USDT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eth","eth",1381694970),line_points)))?compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"eth","eth",1381694970),"ETH",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),false], 0)):null),compevent.core.historic_whale_layer.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),"Claimed COMP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"show-labels","show-labels",41391613),true,new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),true], 0))], null))], null);
});
compevent.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
compevent.core.render_compound_history = (function compevent$core$render_compound_history(account){
var c__38847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38848__auto__ = (function (){var switch__38755__auto__ = (function (state_45771){
var state_val_45772 = (state_45771[(1)]);
if((state_val_45772 === (1))){
var inst_45737 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_45738 = [null];
var inst_45739 = cljs.core.PersistentHashMap.fromArrays(inst_45737,inst_45738);
var inst_45740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_45739);
var inst_45741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45742 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_45743 = (new cljs.core.PersistentVector(null,1,(5),inst_45741,inst_45742,null));
var inst_45744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45745 = ["Fetching API data ..."];
var inst_45746 = (new cljs.core.PersistentVector(null,1,(5),inst_45744,inst_45745,null));
var inst_45747 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(compevent.core.app_state,cljs.core.update_in,inst_45743,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45746], 0));
var inst_45748 = compevent.core._LT_fetch_compound_history(account);
var state_45771__$1 = (function (){var statearr_45773 = state_45771;
(statearr_45773[(7)] = inst_45747);

(statearr_45773[(8)] = inst_45740);

return statearr_45773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45771__$1,(2),inst_45748);
} else {
if((state_val_45772 === (2))){
var inst_45750 = (state_45771[(2)]);
var inst_45751 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(compevent.core.float_num_values,inst_45750);
var inst_45752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45753 = [compevent.core.separator_str];
var inst_45754 = (new cljs.core.PersistentVector(null,1,(5),inst_45752,inst_45753,null));
var inst_45755 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compevent.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steps","steps",-128433302),inst_45754);
var inst_45756 = [new cljs.core.Keyword(null,"chart","chart",1173225425)];
var inst_45757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45759 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45760 = compevent.core.make_whale_history_plot(inst_45751,account);
var inst_45761 = [oz.core.vega_lite,inst_45760];
var inst_45762 = (new cljs.core.PersistentVector(null,2,(5),inst_45759,inst_45761,null));
var inst_45763 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_45762];
var inst_45764 = (new cljs.core.PersistentVector(null,2,(5),inst_45758,inst_45763,null));
var inst_45765 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_45764];
var inst_45766 = (new cljs.core.PersistentVector(null,2,(5),inst_45757,inst_45765,null));
var inst_45767 = [inst_45766];
var inst_45768 = cljs.core.PersistentHashMap.fromArrays(inst_45756,inst_45767);
var inst_45769 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(compevent.core.app_state,cljs.core.into,inst_45768);
var state_45771__$1 = (function (){var statearr_45774 = state_45771;
(statearr_45774[(9)] = inst_45755);

return statearr_45774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45771__$1,inst_45769);
} else {
return null;
}
}
});
return (function() {
var compevent$core$render_compound_history_$_state_machine__38756__auto__ = null;
var compevent$core$render_compound_history_$_state_machine__38756__auto____0 = (function (){
var statearr_45775 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45775[(0)] = compevent$core$render_compound_history_$_state_machine__38756__auto__);

(statearr_45775[(1)] = (1));

return statearr_45775;
});
var compevent$core$render_compound_history_$_state_machine__38756__auto____1 = (function (state_45771){
while(true){
var ret_value__38757__auto__ = (function (){try{while(true){
var result__38758__auto__ = switch__38755__auto__(state_45771);
if(cljs.core.keyword_identical_QMARK_(result__38758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38758__auto__;
}
break;
}
}catch (e45776){var ex__38759__auto__ = e45776;
var statearr_45777_45961 = state_45771;
(statearr_45777_45961[(2)] = ex__38759__auto__);


if(cljs.core.seq((state_45771[(4)]))){
var statearr_45778_45962 = state_45771;
(statearr_45778_45962[(1)] = cljs.core.first((state_45771[(4)])));

} else {
throw ex__38759__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45963 = state_45771;
state_45771 = G__45963;
continue;
} else {
return ret_value__38757__auto__;
}
break;
}
});
compevent$core$render_compound_history_$_state_machine__38756__auto__ = function(state_45771){
switch(arguments.length){
case 0:
return compevent$core$render_compound_history_$_state_machine__38756__auto____0.call(this);
case 1:
return compevent$core$render_compound_history_$_state_machine__38756__auto____1.call(this,state_45771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$0 = compevent$core$render_compound_history_$_state_machine__38756__auto____0;
compevent$core$render_compound_history_$_state_machine__38756__auto__.cljs$core$IFn$_invoke$arity$1 = compevent$core$render_compound_history_$_state_machine__38756__auto____1;
return compevent$core$render_compound_history_$_state_machine__38756__auto__;
})()
})();
var state__38849__auto__ = (function (){var statearr_45779 = f__38848__auto__();
(statearr_45779[(6)] = c__38847__auto__);

return statearr_45779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38849__auto__);
}));

return c__38847__auto__;
});
compevent.core.dai_loop_factor_old = (function compevent$core$dai_loop_factor_old(account_state){
var supplied_dai = new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_dai = new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(account_state);
var supplied_usdc = new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_usdc = new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed_usdt = new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641).cljs$core$IFn$_invoke$arity$1(account_state);
var supplied_usd = (supplied_dai + supplied_usdc);
var borrowed_usd = ((borrowed_dai + borrowed_usdc) + borrowed_usdt);
var account = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(account_state);
var factor = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(supplied_usd,(0)))?(((borrowed_usd > supplied_usd))?(supplied_usd / borrowed_usd):(borrowed_usd / supplied_usd)):(0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"account","account",718006320),account,new cljs.core.Keyword(null,"borrowed-usd","borrowed-usd",-828495461),borrowed_usd,new cljs.core.Keyword(null,"supplied-usd","supplied-usd",1744175032),supplied_usd,new cljs.core.Keyword(null,"borrowed-dai","borrowed-dai",275544723),borrowed_dai,new cljs.core.Keyword(null,"loop-factor","loop-factor",-1795559064),factor], null);
});
compevent.core.make_edn_blob = (function compevent$core$make_edn_blob(coll){
return (new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/edn"], null)));
});
compevent.core.download_blob = (function compevent$core$download_blob(blob,filename){
var blob_url = URL.createObjectURL(blob);
var link = document.createElement("a");
var _ = (link.href = blob_url);
var ___$1 = (link.download = filename);
var ___$2 = document.body.appendChild(link);
var ev_params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["bubbles",true,"cancelable",true,"view",window], null));
var ev = (new MouseEvent("click",ev_params));
(link.dispatchEvent.cljs$core$IFn$_invoke$arity$1 ? link.dispatchEvent.cljs$core$IFn$_invoke$arity$1(ev) : link.dispatchEvent.call(null,ev));

return document.body.removeChild(link);
});
compevent.core.download_as_edn = (function compevent$core$download_as_edn(coll){
return URL.createObjectURL((new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),({"type": "text/edn"}))));
});

//# sourceMappingURL=compevent.core.js.map
