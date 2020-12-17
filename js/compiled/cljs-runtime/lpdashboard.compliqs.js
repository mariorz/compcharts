goog.provide('lpdashboard.compliqs');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$$compound_finance$compound_js$dist$nodejs$index=shadow.js.require("module$node_modules$$compound_finance$compound_js$dist$nodejs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.compliqs.erc20_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function decimals() view returns (uint8)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
lpdashboard.compliqs.comp_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)","event LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)","event Mint(address minter, uint mintAmount, uint mintTokens)","event Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)","event Redeem(address redeemer, uint redeemAmount, uint redeemTokens)"], null);
lpdashboard.compliqs.lw_address = "0x909b443761bbd7fbb876ecde71a37e1433f6af6f";
lpdashboard.compliqs.lw_address2 = "0x189c2c1834b1414a6aee9eba5dc4b4d547c9a44c";
lpdashboard.compliqs.cdai_init_block = (8983575);
lpdashboard.compliqs.cusdc_init_block = (7710760);
lpdashboard.compliqs.ceth_init_block = (7710758);
lpdashboard.compliqs.cusdt_init_block = (9879363);
lpdashboard.compliqs.wbtc_init_block = (6766284);
lpdashboard.compliqs.last_block = (11333300);
lpdashboard.compliqs.liquidation_hash = "0x53e09adb77d1e3ea593c933a85bd4472371e03da12e3fec853b5bc7fac50f3e4";
/**
 * Takes a cToken address and returns
 *   underlying token symbol
 */
lpdashboard.compliqs.caddress__GT_token = (function lpdashboard$compliqs$caddress__GT_token(caddress){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays(["0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9","0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4","0xc11b1268c1a384e55c48c2391d8d480264a3a7f4","0x39AA39c021dfbaE8faC545936693aC917d5E7563","0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407","0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e","0x35A18000230DA775CAc24873d00Ff85BccdeD550","0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643","0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5"],["USDT","COMP","WBTC","USDC","ZRX","BAT","UNI","DAI","ETH"]),caddress);
});
/**
 * Takes a token symbol and returns its corresponding
 *   address
 */
lpdashboard.compliqs.token__GT_address = (function lpdashboard$compliqs$token__GT_address(token){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, ["WETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","WBTC","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","BAT","0x0d8775f648430679a709e98d2b0cb6250d2887ef","COMP","0xc00e94cb662c3520282e6f5717214004a7f26888","UNI","0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","ZRX","0xe41d2489571d322189246dafa5ebde1f4699f498"], null),token);
});
lpdashboard.compliqs.comp_unitroller = "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B";
lpdashboard.compliqs.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
lpdashboard.compliqs.current_block = (11415254);
lpdashboard.compliqs.pre_event_block = (11333036);
lpdashboard.compliqs.block_step = (10000);
lpdashboard.compliqs.llw_start_block = ((10250758) - lpdashboard.compliqs.block_step);
lpdashboard.compliqs.llw_end_block = (lpdashboard.compliqs.pre_event_block + lpdashboard.compliqs.block_step);
lpdashboard.compliqs.bn = (function lpdashboard$compliqs$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
lpdashboard.compliqs.ethfu = (function lpdashboard$compliqs$ethfu(n,u){
return module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(n,u);
});
lpdashboard.compliqs.ebn__GT_bn = (function lpdashboard$compliqs$ebn__GT_bn(n,u){
return lpdashboard.compliqs.bn(lpdashboard.compliqs.ethfu(n,u));
});
lpdashboard.compliqs.web3provider = module$node_modules$ethers$dist$ethers_umd.providers.Web3Provider;
lpdashboard.compliqs.provider = (new lpdashboard.compliqs.web3provider(window.ethereum));
lpdashboard.compliqs.comp_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.compliqs.comp_abi)));
lpdashboard.compliqs.erc20_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.compliqs.erc20_abi)));
lpdashboard.compliqs.make_contract = (function lpdashboard$compliqs$make_contract(abi,address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(abi),lpdashboard.compliqs.provider));
});
lpdashboard.compliqs.make_erc20 = (function lpdashboard$compliqs$make_erc20(address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(lpdashboard.compliqs.erc20_abi),lpdashboard.compliqs.provider));
});
lpdashboard.compliqs._LT_token_decimals = (function lpdashboard$compliqs$_LT_token_decimals(address){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41064){
var state_val_41065 = (state_41064[(1)]);
if((state_val_41065 === (7))){
var inst_41049 = (state_41064[(7)]);
var inst_41056 = (function(){throw inst_41049})();
var state_41064__$1 = state_41064;
var statearr_41066_41640 = state_41064__$1;
(statearr_41066_41640[(2)] = inst_41056);

(statearr_41066_41640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (1))){
var inst_41038 = lpdashboard.compliqs.make_erc20(address);
var state_41064__$1 = (function (){var statearr_41067 = state_41064;
(statearr_41067[(8)] = inst_41038);

return statearr_41067;
})();
var statearr_41068_41641 = state_41064__$1;
(statearr_41068_41641[(2)] = null);

(statearr_41068_41641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (4))){
var inst_41039 = (state_41064[(2)]);
var inst_41040 = console.log("No decimals method for:",address);
var state_41064__$1 = (function (){var statearr_41069 = state_41064;
(statearr_41069[(9)] = inst_41040);

(statearr_41069[(10)] = inst_41039);

return statearr_41069;
})();
var statearr_41070_41642 = state_41064__$1;
(statearr_41070_41642[(2)] = (18));

(statearr_41070_41642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (6))){
var inst_41049 = (state_41064[(7)]);
var inst_41049__$1 = (state_41064[(2)]);
var inst_41050 = (inst_41049__$1 instanceof cljs.core.ExceptionInfo);
var inst_41051 = cljs.core.ex_data(inst_41049__$1);
var inst_41052 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41051);
var inst_41053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41052,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41054 = ((inst_41050) && (inst_41053));
var state_41064__$1 = (function (){var statearr_41071 = state_41064;
(statearr_41071[(7)] = inst_41049__$1);

return statearr_41071;
})();
if(cljs.core.truth_(inst_41054)){
var statearr_41072_41643 = state_41064__$1;
(statearr_41072_41643[(1)] = (7));

} else {
var statearr_41073_41644 = state_41064__$1;
(statearr_41073_41644[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (3))){
var inst_41062 = (state_41064[(2)]);
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41064__$1,inst_41062);
} else {
if((state_val_41065 === (2))){
var inst_41038 = (state_41064[(8)]);
var _ = (function (){var statearr_41075 = state_41064;
(statearr_41075[(4)] = cljs.core.cons((5),(state_41064[(4)])));

return statearr_41075;
})();
var inst_41046 = inst_41038.decimals();
var inst_41047 = cljs.core.async.interop.p__GT_c(inst_41046);
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41064__$1,(6),inst_41047);
} else {
if((state_val_41065 === (9))){
var inst_41059 = (state_41064[(2)]);
var _ = (function (){var statearr_41076 = state_41064;
(statearr_41076[(4)] = cljs.core.rest((state_41064[(4)])));

return statearr_41076;
})();
var state_41064__$1 = state_41064;
var statearr_41077_41645 = state_41064__$1;
(statearr_41077_41645[(2)] = inst_41059);

(statearr_41077_41645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (5))){
var _ = (function (){var statearr_41078 = state_41064;
(statearr_41078[(4)] = cljs.core.rest((state_41064[(4)])));

return statearr_41078;
})();
var state_41064__$1 = state_41064;
var ex41074 = (state_41064__$1[(2)]);
var statearr_41079_41646 = state_41064__$1;
(statearr_41079_41646[(5)] = ex41074);


if((ex41074 instanceof Error)){
var statearr_41080_41647 = state_41064__$1;
(statearr_41080_41647[(1)] = (4));

(statearr_41080_41647[(5)] = null);

} else {
throw ex41074;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (8))){
var inst_41049 = (state_41064[(7)]);
var state_41064__$1 = state_41064;
var statearr_41081_41648 = state_41064__$1;
(statearr_41081_41648[(2)] = inst_41049);

(statearr_41081_41648[(1)] = (9));


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
var lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____0 = (function (){
var statearr_41082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41082[(0)] = lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__);

(statearr_41082[(1)] = (1));

return statearr_41082;
});
var lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____1 = (function (state_41064){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41064);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41083){var ex__36735__auto__ = e41083;
var statearr_41084_41649 = state_41064;
(statearr_41084_41649[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41064[(4)]))){
var statearr_41085_41650 = state_41064;
(statearr_41085_41650[(1)] = cljs.core.first((state_41064[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41651 = state_41064;
state_41064 = G__41651;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__ = function(state_41064){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____1.call(this,state_41064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_token_decimals_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41086 = f__36824__auto__();
(statearr_41086[(6)] = c__36823__auto__);

return statearr_41086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs.make_token_tx = (function lpdashboard$compliqs$make_token_tx(tx,decimals){
var parsed_event = lpdashboard.compliqs.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),lpdashboard.compliqs.ebn__GT_bn(tx_args.amount,decimals)], null);
});
lpdashboard.compliqs._LT_get_block = (function lpdashboard$compliqs$_LT_get_block(block_num){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41103){
var state_val_41104 = (state_41103[(1)]);
if((state_val_41104 === (1))){
var inst_41087 = lpdashboard.compliqs.provider.getBlock(block_num);
var inst_41088 = cljs.core.async.interop.p__GT_c(inst_41087);
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41103__$1,(2),inst_41088);
} else {
if((state_val_41104 === (2))){
var inst_41090 = (state_41103[(7)]);
var inst_41090__$1 = (state_41103[(2)]);
var inst_41091 = (inst_41090__$1 instanceof cljs.core.ExceptionInfo);
var inst_41092 = cljs.core.ex_data(inst_41090__$1);
var inst_41093 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41092);
var inst_41094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41093,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41095 = ((inst_41091) && (inst_41094));
var state_41103__$1 = (function (){var statearr_41105 = state_41103;
(statearr_41105[(7)] = inst_41090__$1);

return statearr_41105;
})();
if(cljs.core.truth_(inst_41095)){
var statearr_41106_41652 = state_41103__$1;
(statearr_41106_41652[(1)] = (3));

} else {
var statearr_41107_41653 = state_41103__$1;
(statearr_41107_41653[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (3))){
var inst_41090 = (state_41103[(7)]);
var inst_41097 = (function(){throw inst_41090})();
var state_41103__$1 = state_41103;
var statearr_41108_41654 = state_41103__$1;
(statearr_41108_41654[(2)] = inst_41097);

(statearr_41108_41654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (4))){
var inst_41090 = (state_41103[(7)]);
var state_41103__$1 = state_41103;
var statearr_41109_41655 = state_41103__$1;
(statearr_41109_41655[(2)] = inst_41090);

(statearr_41109_41655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (5))){
var inst_41100 = (state_41103[(2)]);
var inst_41101 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_41100);
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41103__$1,inst_41101);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____0 = (function (){
var statearr_41110 = [null,null,null,null,null,null,null,null];
(statearr_41110[(0)] = lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__);

(statearr_41110[(1)] = (1));

return statearr_41110;
});
var lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____1 = (function (state_41103){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41103);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41111){var ex__36735__auto__ = e41111;
var statearr_41112_41656 = state_41103;
(statearr_41112_41656[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41103[(4)]))){
var statearr_41113_41657 = state_41103;
(statearr_41113_41657[(1)] = cljs.core.first((state_41103[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41658 = state_41103;
state_41103 = G__41658;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__ = function(state_41103){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____1.call(this,state_41103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_get_block_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41114 = f__36824__auto__();
(statearr_41114[(6)] = c__36823__auto__);

return statearr_41114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_fetch_blocks = (function lpdashboard$compliqs$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41115_SHARP_){
return lpdashboard.compliqs._LT_get_block(p1__41115_SHARP_);
}),block_numbers)));
});
lpdashboard.compliqs._LT_user_token_transfers = (function lpdashboard$compliqs$_LT_user_token_transfers(var_args){
var G__41118 = arguments.length;
switch (G__41118) {
case 3:
return lpdashboard.compliqs._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lpdashboard.compliqs._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lpdashboard.compliqs._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return lpdashboard.compliqs._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(lpdashboard.compliqs._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
if((token_address == null)){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41121){
var state_val_41122 = (state_41121[(1)]);
if((state_val_41122 === (1))){
var inst_41119 = cljs.core.PersistentVector.EMPTY;
var state_41121__$1 = state_41121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41121__$1,inst_41119);
} else {
return null;
}
});
return (function() {
var lpdashboard$compliqs$state_machine__36732__auto__ = null;
var lpdashboard$compliqs$state_machine__36732__auto____0 = (function (){
var statearr_41123 = [null,null,null,null,null,null,null];
(statearr_41123[(0)] = lpdashboard$compliqs$state_machine__36732__auto__);

(statearr_41123[(1)] = (1));

return statearr_41123;
});
var lpdashboard$compliqs$state_machine__36732__auto____1 = (function (state_41121){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41121);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41124){var ex__36735__auto__ = e41124;
var statearr_41125_41660 = state_41121;
(statearr_41125_41660[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41121[(4)]))){
var statearr_41126_41661 = state_41121;
(statearr_41126_41661[(1)] = cljs.core.first((state_41121[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41662 = state_41121;
state_41121 = G__41662;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$state_machine__36732__auto__ = function(state_41121){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$state_machine__36732__auto____1.call(this,state_41121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$state_machine__36732__auto____0;
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$state_machine__36732__auto____1;
return lpdashboard$compliqs$state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41127 = f__36824__auto__();
(statearr_41127[(6)] = c__36823__auto__);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
} else {
var contract = lpdashboard.compliqs.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41159){
var state_val_41160 = (state_41159[(1)]);
if((state_val_41160 === (7))){
var inst_41139 = (state_41159[(7)]);
var inst_41146 = (function(){throw inst_41139})();
var state_41159__$1 = state_41159;
var statearr_41161_41663 = state_41159__$1;
(statearr_41161_41663[(2)] = inst_41146);

(statearr_41161_41663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (1))){
var state_41159__$1 = state_41159;
var statearr_41162_41664 = state_41159__$1;
(statearr_41162_41664[(2)] = null);

(statearr_41162_41664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (4))){
var inst_41128 = (state_41159[(2)]);
var inst_41129 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_41130 = cljs.core.PersistentVector.EMPTY;
var state_41159__$1 = (function (){var statearr_41163 = state_41159;
(statearr_41163[(8)] = inst_41129);

(statearr_41163[(9)] = inst_41128);

return statearr_41163;
})();
var statearr_41164_41665 = state_41159__$1;
(statearr_41164_41665[(2)] = inst_41130);

(statearr_41164_41665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (6))){
var inst_41139 = (state_41159[(7)]);
var inst_41139__$1 = (state_41159[(2)]);
var inst_41140 = (inst_41139__$1 instanceof cljs.core.ExceptionInfo);
var inst_41141 = cljs.core.ex_data(inst_41139__$1);
var inst_41142 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41141);
var inst_41143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41142,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41144 = ((inst_41140) && (inst_41143));
var state_41159__$1 = (function (){var statearr_41165 = state_41159;
(statearr_41165[(7)] = inst_41139__$1);

return statearr_41165;
})();
if(cljs.core.truth_(inst_41144)){
var statearr_41166_41666 = state_41159__$1;
(statearr_41166_41666[(1)] = (7));

} else {
var statearr_41167_41667 = state_41159__$1;
(statearr_41167_41667[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (3))){
var inst_41157 = (state_41159[(2)]);
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41159__$1,inst_41157);
} else {
if((state_val_41160 === (2))){
var ___$2 = (function (){var statearr_41169 = state_41159;
(statearr_41169[(4)] = cljs.core.cons((5),(state_41159[(4)])));

return statearr_41169;
})();
var inst_41136 = provider.getLogs(user_filter);
var inst_41137 = cljs.core.async.interop.p__GT_c(inst_41136);
var state_41159__$1 = state_41159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41159__$1,(6),inst_41137);
} else {
if((state_val_41160 === (9))){
var inst_41149 = (state_41159[(2)]);
var inst_41150 = lpdashboard.compliqs._LT_token_decimals(token_address);
var state_41159__$1 = (function (){var statearr_41170 = state_41159;
(statearr_41170[(10)] = inst_41149);

return statearr_41170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41159__$1,(10),inst_41150);
} else {
if((state_val_41160 === (5))){
var ___$2 = (function (){var statearr_41171 = state_41159;
(statearr_41171[(4)] = cljs.core.rest((state_41159[(4)])));

return statearr_41171;
})();
var state_41159__$1 = state_41159;
var ex41168 = (state_41159__$1[(2)]);
var statearr_41172_41668 = state_41159__$1;
(statearr_41172_41668[(5)] = ex41168);


if((ex41168 instanceof Error)){
var statearr_41173_41669 = state_41159__$1;
(statearr_41173_41669[(1)] = (4));

(statearr_41173_41669[(5)] = null);

} else {
throw ex41168;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (10))){
var inst_41149 = (state_41159[(10)]);
var inst_41152 = (state_41159[(2)]);
var inst_41153 = (function (){var filtered_txs = inst_41149;
var decimals = inst_41152;
return (function (p1__41116_SHARP_){
return lpdashboard.compliqs.make_token_tx(p1__41116_SHARP_,decimals);
});
})();
var inst_41154 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41153,inst_41149);
var ___$2 = (function (){var statearr_41174 = state_41159;
(statearr_41174[(4)] = cljs.core.rest((state_41159[(4)])));

return statearr_41174;
})();
var state_41159__$1 = state_41159;
var statearr_41175_41670 = state_41159__$1;
(statearr_41175_41670[(2)] = inst_41154);

(statearr_41175_41670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41160 === (8))){
var inst_41139 = (state_41159[(7)]);
var state_41159__$1 = state_41159;
var statearr_41176_41671 = state_41159__$1;
(statearr_41176_41671[(2)] = inst_41139);

(statearr_41176_41671[(1)] = (9));


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
var lpdashboard$compliqs$state_machine__36732__auto__ = null;
var lpdashboard$compliqs$state_machine__36732__auto____0 = (function (){
var statearr_41177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41177[(0)] = lpdashboard$compliqs$state_machine__36732__auto__);

(statearr_41177[(1)] = (1));

return statearr_41177;
});
var lpdashboard$compliqs$state_machine__36732__auto____1 = (function (state_41159){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41159);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41178){var ex__36735__auto__ = e41178;
var statearr_41179_41672 = state_41159;
(statearr_41179_41672[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41159[(4)]))){
var statearr_41180_41673 = state_41159;
(statearr_41180_41673[(1)] = cljs.core.first((state_41159[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41674 = state_41159;
state_41159 = G__41674;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$state_machine__36732__auto__ = function(state_41159){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$state_machine__36732__auto____1.call(this,state_41159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$state_machine__36732__auto____0;
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$state_machine__36732__auto____1;
return lpdashboard$compliqs$state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41181 = f__36824__auto__();
(statearr_41181[(6)] = c__36823__auto__);

return statearr_41181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
}
}));

(lpdashboard.compliqs._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

lpdashboard.compliqs._LT_get_tx_receipt = (function lpdashboard$compliqs$_LT_get_tx_receipt(txhash){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41197){
var state_val_41198 = (state_41197[(1)]);
if((state_val_41198 === (1))){
var inst_41182 = lpdashboard.compliqs.provider.getTransactionReceipt(txhash);
var inst_41183 = cljs.core.async.interop.p__GT_c(inst_41182);
var state_41197__$1 = state_41197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41197__$1,(2),inst_41183);
} else {
if((state_val_41198 === (2))){
var inst_41185 = (state_41197[(7)]);
var inst_41185__$1 = (state_41197[(2)]);
var inst_41186 = (inst_41185__$1 instanceof cljs.core.ExceptionInfo);
var inst_41187 = cljs.core.ex_data(inst_41185__$1);
var inst_41188 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41187);
var inst_41189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41188,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41190 = ((inst_41186) && (inst_41189));
var state_41197__$1 = (function (){var statearr_41199 = state_41197;
(statearr_41199[(7)] = inst_41185__$1);

return statearr_41199;
})();
if(cljs.core.truth_(inst_41190)){
var statearr_41200_41675 = state_41197__$1;
(statearr_41200_41675[(1)] = (3));

} else {
var statearr_41201_41676 = state_41197__$1;
(statearr_41201_41676[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (3))){
var inst_41185 = (state_41197[(7)]);
var inst_41192 = (function(){throw inst_41185})();
var state_41197__$1 = state_41197;
var statearr_41202_41677 = state_41197__$1;
(statearr_41202_41677[(2)] = inst_41192);

(statearr_41202_41677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (4))){
var inst_41185 = (state_41197[(7)]);
var state_41197__$1 = state_41197;
var statearr_41203_41678 = state_41197__$1;
(statearr_41203_41678[(2)] = inst_41185);

(statearr_41203_41678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41198 === (5))){
var inst_41195 = (state_41197[(2)]);
var state_41197__$1 = state_41197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41197__$1,inst_41195);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____0 = (function (){
var statearr_41204 = [null,null,null,null,null,null,null,null];
(statearr_41204[(0)] = lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__);

(statearr_41204[(1)] = (1));

return statearr_41204;
});
var lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____1 = (function (state_41197){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41197);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41205){var ex__36735__auto__ = e41205;
var statearr_41206_41679 = state_41197;
(statearr_41206_41679[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41197[(4)]))){
var statearr_41207_41680 = state_41197;
(statearr_41207_41680[(1)] = cljs.core.first((state_41197[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41681 = state_41197;
state_41197 = G__41681;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__ = function(state_41197){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____1.call(this,state_41197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_get_tx_receipt_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41208 = f__36824__auto__();
(statearr_41208[(6)] = c__36823__auto__);

return statearr_41208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_get_tx = (function lpdashboard$compliqs$_LT_get_tx(txhash){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41224){
var state_val_41225 = (state_41224[(1)]);
if((state_val_41225 === (1))){
var inst_41209 = lpdashboard.compliqs.provider.getTransaction(txhash);
var inst_41210 = cljs.core.async.interop.p__GT_c(inst_41209);
var state_41224__$1 = state_41224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41224__$1,(2),inst_41210);
} else {
if((state_val_41225 === (2))){
var inst_41212 = (state_41224[(7)]);
var inst_41212__$1 = (state_41224[(2)]);
var inst_41213 = (inst_41212__$1 instanceof cljs.core.ExceptionInfo);
var inst_41214 = cljs.core.ex_data(inst_41212__$1);
var inst_41215 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41214);
var inst_41216 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41215,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41217 = ((inst_41213) && (inst_41216));
var state_41224__$1 = (function (){var statearr_41226 = state_41224;
(statearr_41226[(7)] = inst_41212__$1);

return statearr_41226;
})();
if(cljs.core.truth_(inst_41217)){
var statearr_41227_41682 = state_41224__$1;
(statearr_41227_41682[(1)] = (3));

} else {
var statearr_41228_41683 = state_41224__$1;
(statearr_41228_41683[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41225 === (3))){
var inst_41212 = (state_41224[(7)]);
var inst_41219 = (function(){throw inst_41212})();
var state_41224__$1 = state_41224;
var statearr_41229_41684 = state_41224__$1;
(statearr_41229_41684[(2)] = inst_41219);

(statearr_41229_41684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41225 === (4))){
var inst_41212 = (state_41224[(7)]);
var state_41224__$1 = state_41224;
var statearr_41230_41685 = state_41224__$1;
(statearr_41230_41685[(2)] = inst_41212);

(statearr_41230_41685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41225 === (5))){
var inst_41222 = (state_41224[(2)]);
var state_41224__$1 = state_41224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41224__$1,inst_41222);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____0 = (function (){
var statearr_41231 = [null,null,null,null,null,null,null,null];
(statearr_41231[(0)] = lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__);

(statearr_41231[(1)] = (1));

return statearr_41231;
});
var lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____1 = (function (state_41224){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41224);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41232){var ex__36735__auto__ = e41232;
var statearr_41233_41686 = state_41224;
(statearr_41233_41686[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41224[(4)]))){
var statearr_41234_41687 = state_41224;
(statearr_41234_41687[(1)] = cljs.core.first((state_41224[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41688 = state_41224;
state_41224 = G__41688;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__ = function(state_41224){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____1.call(this,state_41224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_get_tx_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41235 = f__36824__auto__();
(statearr_41235[(6)] = c__36823__auto__);

return statearr_41235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_get_tx_with_receipt = (function lpdashboard$compliqs$_LT_get_tx_with_receipt(txhash){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41246){
var state_val_41247 = (state_41246[(1)]);
if((state_val_41247 === (1))){
var inst_41236 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_41237 = lpdashboard.compliqs._LT_get_tx(txhash);
var state_41246__$1 = (function (){var statearr_41248 = state_41246;
(statearr_41248[(7)] = inst_41236);

return statearr_41248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41246__$1,(2),inst_41237);
} else {
if((state_val_41247 === (2))){
var inst_41239 = (state_41246[(2)]);
var inst_41240 = lpdashboard.compliqs._LT_get_tx_receipt(txhash);
var state_41246__$1 = (function (){var statearr_41249 = state_41246;
(statearr_41249[(8)] = inst_41239);

return statearr_41249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41246__$1,(3),inst_41240);
} else {
if((state_val_41247 === (3))){
var inst_41236 = (state_41246[(7)]);
var inst_41239 = (state_41246[(8)]);
var inst_41242 = (state_41246[(2)]);
var inst_41243 = [inst_41239,inst_41242];
var inst_41244 = cljs.core.PersistentHashMap.fromArrays(inst_41236,inst_41243);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41246__$1,inst_41244);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____0 = (function (){
var statearr_41250 = [null,null,null,null,null,null,null,null,null];
(statearr_41250[(0)] = lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__);

(statearr_41250[(1)] = (1));

return statearr_41250;
});
var lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____1 = (function (state_41246){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41246);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41251){var ex__36735__auto__ = e41251;
var statearr_41252_41689 = state_41246;
(statearr_41252_41689[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41246[(4)]))){
var statearr_41253_41690 = state_41246;
(statearr_41253_41690[(1)] = cljs.core.first((state_41246[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41691 = state_41246;
state_41246 = G__41691;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__ = function(state_41246){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____1.call(this,state_41246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_get_tx_with_receipt_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41254 = f__36824__auto__();
(statearr_41254[(6)] = c__36823__auto__);

return statearr_41254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_get_trxs = (function lpdashboard$compliqs$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41259){
var state_val_41260 = (state_41259[(1)]);
if((state_val_41260 === (1))){
var inst_41255 = lpdashboard.compliqs._LT_get_tx_with_receipt(x);
var state_41259__$1 = state_41259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41259__$1,(2),inst_41255);
} else {
if((state_val_41260 === (2))){
var inst_41257 = (state_41259[(2)]);
var state_41259__$1 = state_41259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41259__$1,inst_41257);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____0 = (function (){
var statearr_41261 = [null,null,null,null,null,null,null];
(statearr_41261[(0)] = lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__);

(statearr_41261[(1)] = (1));

return statearr_41261;
});
var lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____1 = (function (state_41259){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41259);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41262){var ex__36735__auto__ = e41262;
var statearr_41263_41692 = state_41259;
(statearr_41263_41692[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41259[(4)]))){
var statearr_41264_41693 = state_41259;
(statearr_41264_41693[(1)] = cljs.core.first((state_41259[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41694 = state_41259;
state_41259 = G__41694;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__ = function(state_41259){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____1.call(this,state_41259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_get_trxs_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41265 = f__36824__auto__();
(statearr_41265[(6)] = c__36823__auto__);

return statearr_41265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
lpdashboard.compliqs.total_gas_paid = (function lpdashboard$compliqs$total_gas_paid(tx_with_receipt){
var tx = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_price = lpdashboard.compliqs.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx,"gasPrice"),(18));
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_used = lpdashboard.compliqs.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"gasUsed"),(0));
var eth_spent = bignumber.core._STAR_(gas_price,gas_used);
return eth_spent;
});
lpdashboard.compliqs.block_num__GT_ts = (function lpdashboard$compliqs$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41266_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__41266_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
lpdashboard.compliqs.ts__GT_geckoprice = (function lpdashboard$compliqs$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41267_SHARP_){
return (cljs.core.first(p1__41267_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41268_SHARP_){
return (cljs.core.first(p1__41268_SHARP_) > ts);
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
lpdashboard.compliqs.blocknum__GT_geckoprice = (function lpdashboard$compliqs$blocknum__GT_geckoprice(day_prices,blocks,block_num){
var ts = ((1000) * lpdashboard.compliqs.block_num__GT_ts(blocks,block_num));
var price = lpdashboard.compliqs.ts__GT_geckoprice(day_prices,ts);
return parseFloat(price);
});
lpdashboard.compliqs._LT_historic_gecko_prices = (function lpdashboard$compliqs$_LT_historic_gecko_prices(address){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41279){
var state_val_41280 = (state_41279[(1)]);
if((state_val_41280 === (1))){
var inst_41269 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_41270 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_41271 = [false];
var inst_41272 = cljs.core.PersistentHashMap.fromArrays(inst_41270,inst_41271);
var inst_41273 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_41269,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41272], 0));
var state_41279__$1 = state_41279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41279__$1,(2),inst_41273);
} else {
if((state_val_41280 === (2))){
var inst_41275 = (state_41279[(2)]);
var inst_41276 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41275);
var inst_41277 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_41276);
var state_41279__$1 = state_41279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41279__$1,inst_41277);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____0 = (function (){
var statearr_41281 = [null,null,null,null,null,null,null];
(statearr_41281[(0)] = lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__);

(statearr_41281[(1)] = (1));

return statearr_41281;
});
var lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____1 = (function (state_41279){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41279);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41282){var ex__36735__auto__ = e41282;
var statearr_41283_41695 = state_41279;
(statearr_41283_41695[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41279[(4)]))){
var statearr_41284_41696 = state_41279;
(statearr_41284_41696[(1)] = cljs.core.first((state_41279[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41697 = state_41279;
state_41279 = G__41697;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__ = function(state_41279){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____1.call(this,state_41279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_historic_gecko_prices_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41285 = f__36824__auto__();
(statearr_41285[(6)] = c__36823__auto__);

return statearr_41285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_dolarize_liquidations = (function lpdashboard$compliqs$_LT_dolarize_liquidations(liquidations,token){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41298){
var state_val_41299 = (state_41298[(1)]);
if((state_val_41299 === (1))){
var inst_41286 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_41287 = cljs.core.set(inst_41286);
var inst_41288 = lpdashboard.compliqs._LT_fetch_blocks(inst_41287);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41298__$1,(2),inst_41288);
} else {
if((state_val_41299 === (2))){
var inst_41290 = (state_41298[(2)]);
var inst_41291 = lpdashboard.compliqs.token__GT_address(token);
var inst_41292 = lpdashboard.compliqs._LT_historic_gecko_prices(inst_41291);
var state_41298__$1 = (function (){var statearr_41300 = state_41298;
(statearr_41300[(7)] = inst_41290);

return statearr_41300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41298__$1,(3),inst_41292);
} else {
if((state_val_41299 === (3))){
var inst_41290 = (state_41298[(7)]);
var inst_41294 = (state_41298[(2)]);
var inst_41295 = (function (){var liq_blocks = inst_41290;
var day_prices = inst_41294;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),lpdashboard.compliqs.bn(lpdashboard.compliqs.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_41296 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41295,liquidations);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41298__$1,inst_41296);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____0 = (function (){
var statearr_41301 = [null,null,null,null,null,null,null,null];
(statearr_41301[(0)] = lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__);

(statearr_41301[(1)] = (1));

return statearr_41301;
});
var lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____1 = (function (state_41298){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41298);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41302){var ex__36735__auto__ = e41302;
var statearr_41303_41698 = state_41298;
(statearr_41303_41698[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41298[(4)]))){
var statearr_41304_41699 = state_41298;
(statearr_41304_41699[(1)] = cljs.core.first((state_41298[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41700 = state_41298;
state_41298 = G__41700;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__ = function(state_41298){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____1.call(this,state_41298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_dolarize_liquidations_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41305 = f__36824__auto__();
(statearr_41305[(6)] = c__36823__auto__);

return statearr_41305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_comp_repayments = (function lpdashboard$compliqs$_LT_comp_repayments(caddress,start_block,end_block){
var comp_contract = lpdashboard.compliqs.make_contract(lpdashboard.compliqs.comp_abi,caddress);
var repay_filter = (comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.RepayBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41321){
var state_val_41322 = (state_41321[(1)]);
if((state_val_41322 === (1))){
var inst_41306 = lpdashboard.compliqs.provider.getLogs(repay_filter);
var inst_41307 = cljs.core.async.interop.p__GT_c(inst_41306);
var state_41321__$1 = state_41321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41321__$1,(2),inst_41307);
} else {
if((state_val_41322 === (2))){
var inst_41309 = (state_41321[(7)]);
var inst_41309__$1 = (state_41321[(2)]);
var inst_41310 = (inst_41309__$1 instanceof cljs.core.ExceptionInfo);
var inst_41311 = cljs.core.ex_data(inst_41309__$1);
var inst_41312 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41311);
var inst_41313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41312,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41314 = ((inst_41310) && (inst_41313));
var state_41321__$1 = (function (){var statearr_41323 = state_41321;
(statearr_41323[(7)] = inst_41309__$1);

return statearr_41323;
})();
if(cljs.core.truth_(inst_41314)){
var statearr_41324_41701 = state_41321__$1;
(statearr_41324_41701[(1)] = (3));

} else {
var statearr_41325_41702 = state_41321__$1;
(statearr_41325_41702[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41322 === (3))){
var inst_41309 = (state_41321[(7)]);
var inst_41316 = (function(){throw inst_41309})();
var state_41321__$1 = state_41321;
var statearr_41326_41703 = state_41321__$1;
(statearr_41326_41703[(2)] = inst_41316);

(statearr_41326_41703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41322 === (4))){
var inst_41309 = (state_41321[(7)]);
var state_41321__$1 = state_41321;
var statearr_41327_41704 = state_41321__$1;
(statearr_41327_41704[(2)] = inst_41309);

(statearr_41327_41704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41322 === (5))){
var inst_41319 = (state_41321[(2)]);
var state_41321__$1 = state_41321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41321__$1,inst_41319);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____0 = (function (){
var statearr_41328 = [null,null,null,null,null,null,null,null];
(statearr_41328[(0)] = lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__);

(statearr_41328[(1)] = (1));

return statearr_41328;
});
var lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____1 = (function (state_41321){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41321);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41329){var ex__36735__auto__ = e41329;
var statearr_41330_41705 = state_41321;
(statearr_41330_41705[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41321[(4)]))){
var statearr_41331_41706 = state_41321;
(statearr_41331_41706[(1)] = cljs.core.first((state_41321[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41707 = state_41321;
state_41321 = G__41707;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__ = function(state_41321){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____1.call(this,state_41321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_comp_repayments_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41332 = f__36824__auto__();
(statearr_41332[(6)] = c__36823__auto__);

return statearr_41332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_comp_liquidations = (function lpdashboard$compliqs$_LT_comp_liquidations(caddress,start_block,end_block){
var comp_contract = lpdashboard.compliqs.make_contract(lpdashboard.compliqs.comp_abi,caddress);
var repay_filter = (comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.LiquidateBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41348){
var state_val_41349 = (state_41348[(1)]);
if((state_val_41349 === (1))){
var inst_41333 = lpdashboard.compliqs.provider.getLogs(repay_filter);
var inst_41334 = cljs.core.async.interop.p__GT_c(inst_41333);
var state_41348__$1 = state_41348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41348__$1,(2),inst_41334);
} else {
if((state_val_41349 === (2))){
var inst_41336 = (state_41348[(7)]);
var inst_41336__$1 = (state_41348[(2)]);
var inst_41337 = (inst_41336__$1 instanceof cljs.core.ExceptionInfo);
var inst_41338 = cljs.core.ex_data(inst_41336__$1);
var inst_41339 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41338);
var inst_41340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41339,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41341 = ((inst_41337) && (inst_41340));
var state_41348__$1 = (function (){var statearr_41350 = state_41348;
(statearr_41350[(7)] = inst_41336__$1);

return statearr_41350;
})();
if(cljs.core.truth_(inst_41341)){
var statearr_41351_41708 = state_41348__$1;
(statearr_41351_41708[(1)] = (3));

} else {
var statearr_41352_41709 = state_41348__$1;
(statearr_41352_41709[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41349 === (3))){
var inst_41336 = (state_41348[(7)]);
var inst_41343 = (function(){throw inst_41336})();
var state_41348__$1 = state_41348;
var statearr_41353_41710 = state_41348__$1;
(statearr_41353_41710[(2)] = inst_41343);

(statearr_41353_41710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41349 === (4))){
var inst_41336 = (state_41348[(7)]);
var state_41348__$1 = state_41348;
var statearr_41354_41711 = state_41348__$1;
(statearr_41354_41711[(2)] = inst_41336);

(statearr_41354_41711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41349 === (5))){
var inst_41346 = (state_41348[(2)]);
var state_41348__$1 = state_41348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41348__$1,inst_41346);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____0 = (function (){
var statearr_41355 = [null,null,null,null,null,null,null,null];
(statearr_41355[(0)] = lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__);

(statearr_41355[(1)] = (1));

return statearr_41355;
});
var lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____1 = (function (state_41348){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41348);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41356){var ex__36735__auto__ = e41356;
var statearr_41357_41712 = state_41348;
(statearr_41357_41712[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41348[(4)]))){
var statearr_41358_41713 = state_41348;
(statearr_41358_41713[(1)] = cljs.core.first((state_41348[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41714 = state_41348;
state_41348 = G__41714;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__ = function(state_41348){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____1.call(this,state_41348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_comp_liquidations_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41359 = f__36824__auto__();
(statearr_41359[(6)] = c__36823__auto__);

return statearr_41359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_comp_mints = (function lpdashboard$compliqs$_LT_comp_mints(caddress,start_block,end_block){
var comp_contract = lpdashboard.compliqs.make_contract(lpdashboard.compliqs.comp_abi,caddress);
var mint_filter = (comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Mint.call(null));
var _ = (mint_filter.fromBlock = start_block);
var ___$1 = (mint_filter.toBlock = end_block);
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41375){
var state_val_41376 = (state_41375[(1)]);
if((state_val_41376 === (1))){
var inst_41360 = lpdashboard.compliqs.provider.getLogs(mint_filter);
var inst_41361 = cljs.core.async.interop.p__GT_c(inst_41360);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41375__$1,(2),inst_41361);
} else {
if((state_val_41376 === (2))){
var inst_41363 = (state_41375[(7)]);
var inst_41363__$1 = (state_41375[(2)]);
var inst_41364 = (inst_41363__$1 instanceof cljs.core.ExceptionInfo);
var inst_41365 = cljs.core.ex_data(inst_41363__$1);
var inst_41366 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41365);
var inst_41367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41366,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41368 = ((inst_41364) && (inst_41367));
var state_41375__$1 = (function (){var statearr_41377 = state_41375;
(statearr_41377[(7)] = inst_41363__$1);

return statearr_41377;
})();
if(cljs.core.truth_(inst_41368)){
var statearr_41378_41715 = state_41375__$1;
(statearr_41378_41715[(1)] = (3));

} else {
var statearr_41379_41716 = state_41375__$1;
(statearr_41379_41716[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (3))){
var inst_41363 = (state_41375[(7)]);
var inst_41370 = (function(){throw inst_41363})();
var state_41375__$1 = state_41375;
var statearr_41380_41717 = state_41375__$1;
(statearr_41380_41717[(2)] = inst_41370);

(statearr_41380_41717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (4))){
var inst_41363 = (state_41375[(7)]);
var state_41375__$1 = state_41375;
var statearr_41381_41718 = state_41375__$1;
(statearr_41381_41718[(2)] = inst_41363);

(statearr_41381_41718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (5))){
var inst_41373 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41375__$1,inst_41373);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____0 = (function (){
var statearr_41382 = [null,null,null,null,null,null,null,null];
(statearr_41382[(0)] = lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__);

(statearr_41382[(1)] = (1));

return statearr_41382;
});
var lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____1 = (function (state_41375){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41375);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41383){var ex__36735__auto__ = e41383;
var statearr_41384_41719 = state_41375;
(statearr_41384_41719[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41375[(4)]))){
var statearr_41385_41720 = state_41375;
(statearr_41385_41720[(1)] = cljs.core.first((state_41375[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41721 = state_41375;
state_41375 = G__41721;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__ = function(state_41375){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____1.call(this,state_41375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_comp_mints_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41386 = f__36824__auto__();
(statearr_41386[(6)] = c__36823__auto__);

return statearr_41386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_comp_borrows = (function lpdashboard$compliqs$_LT_comp_borrows(caddress,start_block,end_block){
var comp_contract = lpdashboard.compliqs.make_contract(lpdashboard.compliqs.comp_abi,caddress);
var borrow_filter = (comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Borrow.call(null));
var _ = (borrow_filter.fromBlock = start_block);
var ___$1 = (borrow_filter.toBlock = end_block);
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41402){
var state_val_41403 = (state_41402[(1)]);
if((state_val_41403 === (1))){
var inst_41387 = lpdashboard.compliqs.provider.getLogs(borrow_filter);
var inst_41388 = cljs.core.async.interop.p__GT_c(inst_41387);
var state_41402__$1 = state_41402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41402__$1,(2),inst_41388);
} else {
if((state_val_41403 === (2))){
var inst_41390 = (state_41402[(7)]);
var inst_41390__$1 = (state_41402[(2)]);
var inst_41391 = (inst_41390__$1 instanceof cljs.core.ExceptionInfo);
var inst_41392 = cljs.core.ex_data(inst_41390__$1);
var inst_41393 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41392);
var inst_41394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41393,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41395 = ((inst_41391) && (inst_41394));
var state_41402__$1 = (function (){var statearr_41404 = state_41402;
(statearr_41404[(7)] = inst_41390__$1);

return statearr_41404;
})();
if(cljs.core.truth_(inst_41395)){
var statearr_41405_41722 = state_41402__$1;
(statearr_41405_41722[(1)] = (3));

} else {
var statearr_41406_41723 = state_41402__$1;
(statearr_41406_41723[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41403 === (3))){
var inst_41390 = (state_41402[(7)]);
var inst_41397 = (function(){throw inst_41390})();
var state_41402__$1 = state_41402;
var statearr_41407_41724 = state_41402__$1;
(statearr_41407_41724[(2)] = inst_41397);

(statearr_41407_41724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41403 === (4))){
var inst_41390 = (state_41402[(7)]);
var state_41402__$1 = state_41402;
var statearr_41408_41725 = state_41402__$1;
(statearr_41408_41725[(2)] = inst_41390);

(statearr_41408_41725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41403 === (5))){
var inst_41400 = (state_41402[(2)]);
var state_41402__$1 = state_41402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41402__$1,inst_41400);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____0 = (function (){
var statearr_41409 = [null,null,null,null,null,null,null,null];
(statearr_41409[(0)] = lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__);

(statearr_41409[(1)] = (1));

return statearr_41409;
});
var lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____1 = (function (state_41402){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41402);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41410){var ex__36735__auto__ = e41410;
var statearr_41411_41726 = state_41402;
(statearr_41411_41726[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41402[(4)]))){
var statearr_41412_41727 = state_41402;
(statearr_41412_41727[(1)] = cljs.core.first((state_41402[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41728 = state_41402;
state_41402 = G__41728;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__ = function(state_41402){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____1.call(this,state_41402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_comp_borrows_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41413 = f__36824__auto__();
(statearr_41413[(6)] = c__36823__auto__);

return statearr_41413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_comp_redeems = (function lpdashboard$compliqs$_LT_comp_redeems(caddress,start_block,end_block){
var comp_contract = lpdashboard.compliqs.make_contract(lpdashboard.compliqs.comp_abi,caddress);
var redeem_filter = (comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Redeem.call(null));
var _ = (redeem_filter.fromBlock = start_block);
var ___$1 = (redeem_filter.toBlock = end_block);
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41429){
var state_val_41430 = (state_41429[(1)]);
if((state_val_41430 === (1))){
var inst_41414 = lpdashboard.compliqs.provider.getLogs(redeem_filter);
var inst_41415 = cljs.core.async.interop.p__GT_c(inst_41414);
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41429__$1,(2),inst_41415);
} else {
if((state_val_41430 === (2))){
var inst_41417 = (state_41429[(7)]);
var inst_41417__$1 = (state_41429[(2)]);
var inst_41418 = (inst_41417__$1 instanceof cljs.core.ExceptionInfo);
var inst_41419 = cljs.core.ex_data(inst_41417__$1);
var inst_41420 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41419);
var inst_41421 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41420,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41422 = ((inst_41418) && (inst_41421));
var state_41429__$1 = (function (){var statearr_41431 = state_41429;
(statearr_41431[(7)] = inst_41417__$1);

return statearr_41431;
})();
if(cljs.core.truth_(inst_41422)){
var statearr_41432_41729 = state_41429__$1;
(statearr_41432_41729[(1)] = (3));

} else {
var statearr_41433_41730 = state_41429__$1;
(statearr_41433_41730[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (3))){
var inst_41417 = (state_41429[(7)]);
var inst_41424 = (function(){throw inst_41417})();
var state_41429__$1 = state_41429;
var statearr_41434_41731 = state_41429__$1;
(statearr_41434_41731[(2)] = inst_41424);

(statearr_41434_41731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (4))){
var inst_41417 = (state_41429[(7)]);
var state_41429__$1 = state_41429;
var statearr_41435_41732 = state_41429__$1;
(statearr_41435_41732[(2)] = inst_41417);

(statearr_41435_41732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41430 === (5))){
var inst_41427 = (state_41429[(2)]);
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41429__$1,inst_41427);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____0 = (function (){
var statearr_41436 = [null,null,null,null,null,null,null,null];
(statearr_41436[(0)] = lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__);

(statearr_41436[(1)] = (1));

return statearr_41436;
});
var lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____1 = (function (state_41429){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41429);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41437){var ex__36735__auto__ = e41437;
var statearr_41438_41733 = state_41429;
(statearr_41438_41733[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41429[(4)]))){
var statearr_41439_41734 = state_41429;
(statearr_41439_41734[(1)] = cljs.core.first((state_41429[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41735 = state_41429;
state_41429 = G__41735;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__ = function(state_41429){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____1.call(this,state_41429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_comp_redeems_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41440 = f__36824__auto__();
(statearr_41440[(6)] = c__36823__auto__);

return statearr_41440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs.make_comp_repayment = (function lpdashboard$compliqs$make_comp_repayment(tx,decimals){
var parsed_event = lpdashboard.compliqs.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"account-borrrows","account-borrrows",-395615768),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"payer","payer",443929743),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603)],[tx_hash,caddress,lpdashboard.compliqs.ebn__GT_bn(tx_args.accountBorrows,decimals),"repayment",block_number,tx_args.payer,lpdashboard.compliqs.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.borrower,lpdashboard.compliqs.ebn__GT_bn(tx_args.totalBorrows,decimals)]);
});
lpdashboard.compliqs.make_comp_liquidation = (function lpdashboard$compliqs$make_comp_liquidation(tx,decimals){
var parsed_event = lpdashboard.compliqs.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"seize-tokens","seize-tokens",-1982010893),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"liquidator","liquidator",676132375),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"c-token-collateral","c-token-collateral",1555321853)],[tx_hash,caddress,"liquidation",block_number,lpdashboard.compliqs.ebn__GT_bn(tx_args.seizeTokens,decimals),lpdashboard.compliqs.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.liquidator,tx_args.borrower,tx_args.cTokenCollateral]);
});
lpdashboard.compliqs.make_comp_mint = (function lpdashboard$compliqs$make_comp_mint(tx,decimals){
var parsed_event = lpdashboard.compliqs.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"minter","minter",280863112),tx_args.minter,new cljs.core.Keyword(null,"mint-amount","mint-amount",961101419),lpdashboard.compliqs.ebn__GT_bn(tx_args.mintAmount,decimals),new cljs.core.Keyword(null,"mint-tokens","mint-tokens",1594108366),lpdashboard.compliqs.ebn__GT_bn(tx_args.mintTokens,decimals),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"type","type",1174270348),"mint",new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.compliqs.make_comp_borrow = (function lpdashboard$compliqs$make_comp_borrow(tx,decimals){
var parsed_event = lpdashboard.compliqs.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"borrower","borrower",1776622391),tx_args.borrower,new cljs.core.Keyword(null,"borrow-amount","borrow-amount",-909882063),lpdashboard.compliqs.ebn__GT_bn(tx_args.borrowAmount,decimals),new cljs.core.Keyword(null,"account-borrows","account-borrows",-286211829),lpdashboard.compliqs.ebn__GT_bn(tx_args.accountBorrows,decimals),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603),lpdashboard.compliqs.ebn__GT_bn(tx_args.totalBorrows,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"borrow",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.compliqs.make_comp_redeem = (function lpdashboard$compliqs$make_comp_redeem(tx,decimals){
var parsed_event = lpdashboard.compliqs.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"redeemer","redeemer",-319029372),tx_args.redeemer,new cljs.core.Keyword(null,"redeem-amount","redeem-amount",541522884),lpdashboard.compliqs.ebn__GT_bn(tx_args.redeemAmount,decimals),new cljs.core.Keyword(null,"redeem-tokens","redeem-tokens",1379041193),lpdashboard.compliqs.ebn__GT_bn(tx_args.redeemTokens,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"redeem",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.compliqs._LT_fetch_comp_logs = (function lpdashboard$compliqs$_LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41441_SHARP_){
var G__41442 = caddress;
var G__41443 = p1__41441_SHARP_;
var G__41444 = (p1__41441_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__41442,G__41443,G__41444) : logsfn.call(null,G__41442,G__41443,G__41444));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
lpdashboard.compliqs._LT_pfetch_comp_logs = (function lpdashboard$compliqs$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41452){
var state_val_41453 = (state_41452[(1)]);
if((state_val_41453 === (1))){
var inst_41446 = lpdashboard.compliqs._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41452__$1,(2),inst_41446);
} else {
if((state_val_41453 === (2))){
var inst_41448 = (state_41452[(2)]);
var inst_41449 = (function (){var fetched_logs = inst_41448;
return (function (p1__41445_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__41445_SHARP_,decimals) : parsefn.call(null,p1__41445_SHARP_,decimals));
});
})();
var inst_41450 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41449,inst_41448);
var state_41452__$1 = state_41452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41452__$1,inst_41450);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____0 = (function (){
var statearr_41454 = [null,null,null,null,null,null,null];
(statearr_41454[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__);

(statearr_41454[(1)] = (1));

return statearr_41454;
});
var lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____1 = (function (state_41452){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41452);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41455){var ex__36735__auto__ = e41455;
var statearr_41456_41736 = state_41452;
(statearr_41456_41736[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41452[(4)]))){
var statearr_41457_41737 = state_41452;
(statearr_41457_41737[(1)] = cljs.core.first((state_41452[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41738 = state_41452;
state_41452 = G__41738;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__ = function(state_41452){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____1.call(this,state_41452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_logs_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41458 = f__36824__auto__();
(statearr_41458[(6)] = c__36823__auto__);

return statearr_41458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_comp_repayments = (function lpdashboard$compliqs$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41463){
var state_val_41464 = (state_41463[(1)]);
if((state_val_41464 === (1))){
var inst_41459 = lpdashboard.compliqs._LT_pfetch_comp_logs(lpdashboard.compliqs._LT_comp_repayments,lpdashboard.compliqs.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_41463__$1 = state_41463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41463__$1,(2),inst_41459);
} else {
if((state_val_41464 === (2))){
var inst_41461 = (state_41463[(2)]);
var state_41463__$1 = state_41463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41463__$1,inst_41461);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____0 = (function (){
var statearr_41465 = [null,null,null,null,null,null,null];
(statearr_41465[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__);

(statearr_41465[(1)] = (1));

return statearr_41465;
});
var lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____1 = (function (state_41463){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41463);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41466){var ex__36735__auto__ = e41466;
var statearr_41467_41739 = state_41463;
(statearr_41467_41739[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41463[(4)]))){
var statearr_41468_41740 = state_41463;
(statearr_41468_41740[(1)] = cljs.core.first((state_41463[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41741 = state_41463;
state_41463 = G__41741;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__ = function(state_41463){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____1.call(this,state_41463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_repayments_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41469 = f__36824__auto__();
(statearr_41469[(6)] = c__36823__auto__);

return statearr_41469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_comp_mints = (function lpdashboard$compliqs$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41474){
var state_val_41475 = (state_41474[(1)]);
if((state_val_41475 === (1))){
var inst_41470 = lpdashboard.compliqs._LT_pfetch_comp_logs(lpdashboard.compliqs._LT_comp_mints,lpdashboard.compliqs.make_comp_mint,caddress,start_block,end_block,decimals);
var state_41474__$1 = state_41474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41474__$1,(2),inst_41470);
} else {
if((state_val_41475 === (2))){
var inst_41472 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41474__$1,inst_41472);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____0 = (function (){
var statearr_41476 = [null,null,null,null,null,null,null];
(statearr_41476[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__);

(statearr_41476[(1)] = (1));

return statearr_41476;
});
var lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____1 = (function (state_41474){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41474);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41477){var ex__36735__auto__ = e41477;
var statearr_41478_41742 = state_41474;
(statearr_41478_41742[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41474[(4)]))){
var statearr_41479_41743 = state_41474;
(statearr_41479_41743[(1)] = cljs.core.first((state_41474[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41744 = state_41474;
state_41474 = G__41744;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__ = function(state_41474){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____1.call(this,state_41474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_mints_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41480 = f__36824__auto__();
(statearr_41480[(6)] = c__36823__auto__);

return statearr_41480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_comp_liquidations = (function lpdashboard$compliqs$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41485){
var state_val_41486 = (state_41485[(1)]);
if((state_val_41486 === (1))){
var inst_41481 = lpdashboard.compliqs._LT_pfetch_comp_logs(lpdashboard.compliqs._LT_comp_liquidations,lpdashboard.compliqs.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41485__$1,(2),inst_41481);
} else {
if((state_val_41486 === (2))){
var inst_41483 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41485__$1,inst_41483);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____0 = (function (){
var statearr_41487 = [null,null,null,null,null,null,null];
(statearr_41487[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__);

(statearr_41487[(1)] = (1));

return statearr_41487;
});
var lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____1 = (function (state_41485){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41485);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41488){var ex__36735__auto__ = e41488;
var statearr_41489_41745 = state_41485;
(statearr_41489_41745[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41485[(4)]))){
var statearr_41490_41746 = state_41485;
(statearr_41490_41746[(1)] = cljs.core.first((state_41485[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41747 = state_41485;
state_41485 = G__41747;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__ = function(state_41485){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____1.call(this,state_41485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_liquidations_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41491 = f__36824__auto__();
(statearr_41491[(6)] = c__36823__auto__);

return statearr_41491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_comp_borrows = (function lpdashboard$compliqs$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41496){
var state_val_41497 = (state_41496[(1)]);
if((state_val_41497 === (1))){
var inst_41492 = lpdashboard.compliqs._LT_pfetch_comp_logs(lpdashboard.compliqs._LT_comp_borrows,lpdashboard.compliqs.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_41496__$1 = state_41496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41496__$1,(2),inst_41492);
} else {
if((state_val_41497 === (2))){
var inst_41494 = (state_41496[(2)]);
var state_41496__$1 = state_41496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41496__$1,inst_41494);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____0 = (function (){
var statearr_41498 = [null,null,null,null,null,null,null];
(statearr_41498[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__);

(statearr_41498[(1)] = (1));

return statearr_41498;
});
var lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____1 = (function (state_41496){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41496);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41499){var ex__36735__auto__ = e41499;
var statearr_41500_41748 = state_41496;
(statearr_41500_41748[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41496[(4)]))){
var statearr_41501_41749 = state_41496;
(statearr_41501_41749[(1)] = cljs.core.first((state_41496[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41750 = state_41496;
state_41496 = G__41750;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__ = function(state_41496){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____1.call(this,state_41496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_borrows_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41502 = f__36824__auto__();
(statearr_41502[(6)] = c__36823__auto__);

return statearr_41502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_comp_redeems = (function lpdashboard$compliqs$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41507){
var state_val_41508 = (state_41507[(1)]);
if((state_val_41508 === (1))){
var inst_41503 = lpdashboard.compliqs._LT_pfetch_comp_logs(lpdashboard.compliqs._LT_comp_redeems,lpdashboard.compliqs.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_41507__$1 = state_41507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41507__$1,(2),inst_41503);
} else {
if((state_val_41508 === (2))){
var inst_41505 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41507__$1,inst_41505);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____0 = (function (){
var statearr_41509 = [null,null,null,null,null,null,null];
(statearr_41509[(0)] = lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__);

(statearr_41509[(1)] = (1));

return statearr_41509;
});
var lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____1 = (function (state_41507){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41507);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41510){var ex__36735__auto__ = e41510;
var statearr_41511_41751 = state_41507;
(statearr_41511_41751[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41507[(4)]))){
var statearr_41512_41752 = state_41507;
(statearr_41512_41752[(1)] = cljs.core.first((state_41507[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41753 = state_41507;
state_41507 = G__41753;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__ = function(state_41507){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____1.call(this,state_41507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_comp_redeems_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41513 = f__36824__auto__();
(statearr_41513[(6)] = c__36823__auto__);

return statearr_41513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_pfetch_ctoken_events = (function lpdashboard$compliqs$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41532){
var state_val_41533 = (state_41532[(1)]);
if((state_val_41533 === (1))){
var inst_41514 = lpdashboard.compliqs._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_41532__$1 = state_41532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41532__$1,(2),inst_41514);
} else {
if((state_val_41533 === (2))){
var inst_41516 = (state_41532[(2)]);
var inst_41517 = lpdashboard.compliqs._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_41532__$1 = (function (){var statearr_41534 = state_41532;
(statearr_41534[(7)] = inst_41516);

return statearr_41534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41532__$1,(3),inst_41517);
} else {
if((state_val_41533 === (3))){
var inst_41519 = (state_41532[(2)]);
var inst_41520 = lpdashboard.compliqs._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_41532__$1 = (function (){var statearr_41535 = state_41532;
(statearr_41535[(8)] = inst_41519);

return statearr_41535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41532__$1,(4),inst_41520);
} else {
if((state_val_41533 === (4))){
var inst_41522 = (state_41532[(2)]);
var inst_41523 = lpdashboard.compliqs._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_41532__$1 = (function (){var statearr_41536 = state_41532;
(statearr_41536[(9)] = inst_41522);

return statearr_41536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41532__$1,(5),inst_41523);
} else {
if((state_val_41533 === (5))){
var inst_41525 = (state_41532[(2)]);
var inst_41526 = lpdashboard.compliqs._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_41532__$1 = (function (){var statearr_41537 = state_41532;
(statearr_41537[(10)] = inst_41525);

return statearr_41537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41532__$1,(6),inst_41526);
} else {
if((state_val_41533 === (6))){
var inst_41525 = (state_41532[(10)]);
var inst_41522 = (state_41532[(9)]);
var inst_41519 = (state_41532[(8)]);
var inst_41516 = (state_41532[(7)]);
var inst_41528 = (state_41532[(2)]);
var inst_41529 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_41516,inst_41519,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41522,inst_41525,inst_41528], 0));
var inst_41530 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_41529);
var state_41532__$1 = state_41532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41532__$1,inst_41530);
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
var lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____0 = (function (){
var statearr_41538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41538[(0)] = lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__);

(statearr_41538[(1)] = (1));

return statearr_41538;
});
var lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____1 = (function (state_41532){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41532);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41539){var ex__36735__auto__ = e41539;
var statearr_41540_41754 = state_41532;
(statearr_41540_41754[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41532[(4)]))){
var statearr_41541_41755 = state_41532;
(statearr_41541_41755[(1)] = cljs.core.first((state_41532[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41756 = state_41532;
state_41532 = G__41756;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__ = function(state_41532){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____1.call(this,state_41532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_pfetch_ctoken_events_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41542 = f__36824__auto__();
(statearr_41542[(6)] = c__36823__auto__);

return statearr_41542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs.account_ctoken_events = (function lpdashboard$compliqs$account_ctoken_events(ctoken_events,account){
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
lpdashboard.compliqs.acc_health = (function lpdashboard$compliqs$acc_health(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"health"),"value"));
});
lpdashboard.compliqs.acc_address = (function lpdashboard$compliqs$acc_address(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"address");
});
lpdashboard.compliqs.total_borrow_eth = (function lpdashboard$compliqs$total_borrow_eth(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_borrow_value_in_eth"),"value"));
});
lpdashboard.compliqs.total_collateral_eth = (function lpdashboard$compliqs$total_collateral_eth(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_collateral_value_in_eth"),"value"));
});
lpdashboard.compliqs.block_number = (function lpdashboard$compliqs$block_number(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"block-number");
});
lpdashboard.compliqs.token_borrow_underlying = (function lpdashboard$compliqs$token_borrow_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41543_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__41543_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return 0.0;
}
});
lpdashboard.compliqs.token_supply_underlying = (function lpdashboard$compliqs$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41544_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__41544_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"supply_balance_underlying","supply_balance_underlying",1572069900).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return 0.0;
}
});
lpdashboard.compliqs.acc_state = (function lpdashboard$compliqs$acc_state(a){
var a_SINGLEQUOTE_ = clojure.walk.keywordize_keys(a);
var dai_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cDAI");
var dai_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cDAI");
var usdc_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdc_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdt_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDT");
var usdt_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cUSDT");
var eth_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cETH");
var eth_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cETH");
var sai_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cSAI");
var sai_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cSAI");
var bat_borrowed = lpdashboard.compliqs.token_borrow_underlying(a_SINGLEQUOTE_,"cBAT");
var bat_supplied = lpdashboard.compliqs.token_supply_underlying(a_SINGLEQUOTE_,"cBAT");
var usd_value_borrowed = ((dai_borrowed + usdc_borrowed) + usdt_borrowed);
var usd_value_supplied = ((dai_supplied + usdc_supplied) + usdt_supplied);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sai-supplied","sai-supplied",38662309),new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336),new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568),new cljs.core.Keyword(null,"sai-borrowed","sai-borrowed",-239127896),new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"eth-borrowed","eth-borrowed",2096581776),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641),new cljs.core.Keyword(null,"eth-supplied","eth-supplied",-379121002),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208),new cljs.core.Keyword(null,"bat-supplied","bat-supplied",378534681),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862),new cljs.core.Keyword(null,"bat-borrowed","bat-borrowed",1282686555),new cljs.core.Keyword(null,"health-computed","health-computed",848235134)],[sai_supplied,usdt_supplied,usdc_supplied,lpdashboard.compliqs.total_collateral_eth(a),sai_borrowed,lpdashboard.compliqs.total_borrow_eth(a),usdt_borrowed,lpdashboard.compliqs.block_number(a),usd_value_supplied,lpdashboard.compliqs.acc_address(a),eth_borrowed,dai_supplied,usdc_borrowed,eth_supplied,lpdashboard.compliqs.acc_health(a),usd_value_borrowed,bat_supplied,dai_borrowed,bat_borrowed,(lpdashboard.compliqs.total_collateral_eth(a) / lpdashboard.compliqs.total_borrow_eth(a))]);
});
lpdashboard.compliqs._LT_account_state = (function lpdashboard$compliqs$_LT_account_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41757 = arguments.length;
var i__4737__auto___41758 = (0);
while(true){
if((i__4737__auto___41758 < len__4736__auto___41757)){
args__4742__auto__.push((arguments[i__4737__auto___41758]));

var G__41759 = (i__4737__auto___41758 + (1));
i__4737__auto___41758 = G__41759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lpdashboard.compliqs._LT_account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lpdashboard.compliqs._LT_account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__41547){
var map__41548 = p__41547;
var map__41548__$1 = (((((!((map__41548 == null))))?(((((map__41548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41548):map__41548);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41548__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41570){
var state_val_41571 = (state_41570[(1)]);
if((state_val_41571 === (1))){
var inst_41550 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_41551 = [address,block_number];
var inst_41552 = cljs.core.PersistentHashMap.fromArrays(inst_41550,inst_41551);
var inst_41553 = cljs.core.clj__GT_js(inst_41552);
var inst_41554 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_41553);
var inst_41555 = cljs.core.async.interop.p__GT_c(inst_41554);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41570__$1,(2),inst_41555);
} else {
if((state_val_41571 === (2))){
var inst_41557 = (state_41570[(7)]);
var inst_41557__$1 = (state_41570[(2)]);
var inst_41558 = (inst_41557__$1 instanceof cljs.core.ExceptionInfo);
var inst_41559 = cljs.core.ex_data(inst_41557__$1);
var inst_41560 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41559);
var inst_41561 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41560,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41562 = ((inst_41558) && (inst_41561));
var state_41570__$1 = (function (){var statearr_41572 = state_41570;
(statearr_41572[(7)] = inst_41557__$1);

return statearr_41572;
})();
if(cljs.core.truth_(inst_41562)){
var statearr_41573_41760 = state_41570__$1;
(statearr_41573_41760[(1)] = (3));

} else {
var statearr_41574_41761 = state_41570__$1;
(statearr_41574_41761[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (3))){
var inst_41557 = (state_41570[(7)]);
var inst_41564 = (function(){throw inst_41557})();
var state_41570__$1 = state_41570;
var statearr_41575_41762 = state_41570__$1;
(statearr_41575_41762[(2)] = inst_41564);

(statearr_41575_41762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (4))){
var inst_41557 = (state_41570[(7)]);
var state_41570__$1 = state_41570;
var statearr_41576_41763 = state_41570__$1;
(statearr_41576_41763[(2)] = inst_41557);

(statearr_41576_41763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (5))){
var inst_41567 = (state_41570[(2)]);
var inst_41568 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_41567);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41570__$1,inst_41568);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$state_machine__36732__auto__ = null;
var lpdashboard$compliqs$state_machine__36732__auto____0 = (function (){
var statearr_41577 = [null,null,null,null,null,null,null,null];
(statearr_41577[(0)] = lpdashboard$compliqs$state_machine__36732__auto__);

(statearr_41577[(1)] = (1));

return statearr_41577;
});
var lpdashboard$compliqs$state_machine__36732__auto____1 = (function (state_41570){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41570);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41578){var ex__36735__auto__ = e41578;
var statearr_41579_41764 = state_41570;
(statearr_41579_41764[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41570[(4)]))){
var statearr_41580_41765 = state_41570;
(statearr_41580_41765[(1)] = cljs.core.first((state_41570[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41766 = state_41570;
state_41570 = G__41766;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$state_machine__36732__auto__ = function(state_41570){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$state_machine__36732__auto____1.call(this,state_41570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$state_machine__36732__auto____0;
lpdashboard$compliqs$state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$state_machine__36732__auto____1;
return lpdashboard$compliqs$state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41581 = f__36824__auto__();
(statearr_41581[(6)] = c__36823__auto__);

return statearr_41581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
}));

(lpdashboard.compliqs._LT_account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lpdashboard.compliqs._LT_account_state.cljs$lang$applyTo = (function (seq41545){
var G__41546 = cljs.core.first(seq41545);
var seq41545__$1 = cljs.core.next(seq41545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41546,seq41545__$1);
}));

lpdashboard.compliqs._LT_account_states = (function lpdashboard$compliqs$_LT_account_states(accounts,block_number){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41607){
var state_val_41608 = (state_41607[(1)]);
if((state_val_41608 === (1))){
var inst_41583 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_41584 = [accounts,block_number];
var inst_41585 = cljs.core.PersistentHashMap.fromArrays(inst_41583,inst_41584);
var inst_41586 = cljs.core.clj__GT_js(inst_41585);
var inst_41587 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_41586);
var inst_41588 = cljs.core.async.interop.p__GT_c(inst_41587);
var state_41607__$1 = state_41607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41607__$1,(2),inst_41588);
} else {
if((state_val_41608 === (2))){
var inst_41590 = (state_41607[(7)]);
var inst_41590__$1 = (state_41607[(2)]);
var inst_41591 = (inst_41590__$1 instanceof cljs.core.ExceptionInfo);
var inst_41592 = cljs.core.ex_data(inst_41590__$1);
var inst_41593 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41592);
var inst_41594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41593,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41595 = ((inst_41591) && (inst_41594));
var state_41607__$1 = (function (){var statearr_41609 = state_41607;
(statearr_41609[(7)] = inst_41590__$1);

return statearr_41609;
})();
if(cljs.core.truth_(inst_41595)){
var statearr_41610_41767 = state_41607__$1;
(statearr_41610_41767[(1)] = (3));

} else {
var statearr_41611_41768 = state_41607__$1;
(statearr_41611_41768[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41608 === (3))){
var inst_41590 = (state_41607[(7)]);
var inst_41597 = (function(){throw inst_41590})();
var state_41607__$1 = state_41607;
var statearr_41612_41769 = state_41607__$1;
(statearr_41612_41769[(2)] = inst_41597);

(statearr_41612_41769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41608 === (4))){
var inst_41590 = (state_41607[(7)]);
var state_41607__$1 = state_41607;
var statearr_41613_41770 = state_41607__$1;
(statearr_41613_41770[(2)] = inst_41590);

(statearr_41613_41770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41608 === (5))){
var inst_41600 = (state_41607[(2)]);
var inst_41601 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_41600);
var inst_41602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41601,"accounts");
var inst_41603 = (function (){var resp = inst_41601;
var account_resps = inst_41602;
return (function (p1__41582_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__41582_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_41604 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41603,inst_41602);
var inst_41605 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.compliqs.acc_state,inst_41604);
var state_41607__$1 = state_41607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41607__$1,inst_41605);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____0 = (function (){
var statearr_41614 = [null,null,null,null,null,null,null,null];
(statearr_41614[(0)] = lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__);

(statearr_41614[(1)] = (1));

return statearr_41614;
});
var lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____1 = (function (state_41607){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41607);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41615){var ex__36735__auto__ = e41615;
var statearr_41616_41771 = state_41607;
(statearr_41616_41771[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41607[(4)]))){
var statearr_41617_41772 = state_41607;
(statearr_41617_41772[(1)] = cljs.core.first((state_41607[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41773 = state_41607;
state_41607 = G__41773;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__ = function(state_41607){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____1.call(this,state_41607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_account_states_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41618 = f__36824__auto__();
(statearr_41618[(6)] = c__36823__auto__);

return statearr_41618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs._LT_account_state_range = (function lpdashboard$compliqs$_LT_account_state_range(accounts,start_block,end_block,block_step){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41619_SHARP_){
return lpdashboard.compliqs._LT_account_states(accounts,p1__41619_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,block_step))));
});
lpdashboard.compliqs.accum_comp_rewards = (function lpdashboard$compliqs$accum_comp_rewards(rewards_txs,data_points){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(rewards_txs))){
return data_points;
} else {
var current_tx = cljs.core.first(rewards_txs);
var prev_dp = cljs.core.last(data_points);
var prev_claimed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(data_points)))?(0):new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479).cljs$core$IFn$_invoke$arity$1(prev_dp));
var current_claim = parseFloat(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(current_tx));
var current_dp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),(prev_claimed + current_claim),new cljs.core.Keyword(null,"side","side",389652279),"Claimed Rewards",new cljs.core.Keyword(null,"comp-claim","comp-claim",-2135079250),current_claim,new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(current_tx)], null);
var G__41774 = cljs.core.rest(rewards_txs);
var G__41775 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__41774;
data_points = G__41775;
continue;
}
break;
}
});
lpdashboard.compliqs._LT_gov_account = (function lpdashboard$compliqs$_LT_gov_account(account){
var c__36823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36824__auto__ = (function (){var switch__36731__auto__ = (function (state_41630){
var state_val_41631 = (state_41630[(1)]);
if((state_val_41631 === (1))){
var inst_41620 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_41621 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41620),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_41622 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_41623 = [false];
var inst_41624 = cljs.core.PersistentHashMap.fromArrays(inst_41622,inst_41623);
var inst_41625 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_41621,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41624], 0));
var state_41630__$1 = state_41630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41630__$1,(2),inst_41625);
} else {
if((state_val_41631 === (2))){
var inst_41627 = (state_41630[(2)]);
var inst_41628 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41627);
var state_41630__$1 = state_41630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41630__$1,inst_41628);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__ = null;
var lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____0 = (function (){
var statearr_41632 = [null,null,null,null,null,null,null];
(statearr_41632[(0)] = lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__);

(statearr_41632[(1)] = (1));

return statearr_41632;
});
var lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____1 = (function (state_41630){
while(true){
var ret_value__36733__auto__ = (function (){try{while(true){
var result__36734__auto__ = switch__36731__auto__(state_41630);
if(cljs.core.keyword_identical_QMARK_(result__36734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36734__auto__;
}
break;
}
}catch (e41633){var ex__36735__auto__ = e41633;
var statearr_41634_41776 = state_41630;
(statearr_41634_41776[(2)] = ex__36735__auto__);


if(cljs.core.seq((state_41630[(4)]))){
var statearr_41635_41777 = state_41630;
(statearr_41635_41777[(1)] = cljs.core.first((state_41630[(4)])));

} else {
throw ex__36735__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41778 = state_41630;
state_41630 = G__41778;
continue;
} else {
return ret_value__36733__auto__;
}
break;
}
});
lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__ = function(state_41630){
switch(arguments.length){
case 0:
return lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____0.call(this);
case 1:
return lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____1.call(this,state_41630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____0;
lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto____1;
return lpdashboard$compliqs$_LT_gov_account_$_state_machine__36732__auto__;
})()
})();
var state__36825__auto__ = (function (){var statearr_41636 = f__36824__auto__();
(statearr_41636[(6)] = c__36823__auto__);

return statearr_41636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36825__auto__);
}));

return c__36823__auto__;
});
lpdashboard.compliqs.dai_loop_factor = (function lpdashboard$compliqs$dai_loop_factor(account_state){
var supplied = new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520).cljs$core$IFn$_invoke$arity$1(account_state);
var borrowed = new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862).cljs$core$IFn$_invoke$arity$1(account_state);
var account = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(account_state);
var factor = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(supplied,(0)))?(((borrowed > supplied))?(supplied / borrowed):(borrowed / supplied)):(0));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"account","account",718006320),account,new cljs.core.Keyword(null,"dai-borrow","dai-borrow",1519751672),borrowed,new cljs.core.Keyword(null,"dai-loop-factor","dai-loop-factor",1092966120),factor], null);
});
lpdashboard.compliqs.make_edn_blob = (function lpdashboard$compliqs$make_edn_blob(coll){
return (new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/edn"], null)));
});
lpdashboard.compliqs.download_blob = (function lpdashboard$compliqs$download_blob(blob,filename){
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
lpdashboard.compliqs.download_as_edn = (function lpdashboard$compliqs$download_as_edn(coll){
return URL.createObjectURL((new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),({"type": "text/edn"}))));
});

//# sourceMappingURL=lpdashboard.compliqs.js.map
