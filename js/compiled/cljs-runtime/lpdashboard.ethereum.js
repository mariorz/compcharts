goog.provide('lpdashboard.ethereum');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$$compound_finance$compound_js$dist$nodejs$index=shadow.js.require("module$node_modules$$compound_finance$compound_js$dist$nodejs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.ethereum.web3provider = module$node_modules$ethers$dist$ethers_umd.providers.Web3Provider;
lpdashboard.ethereum.provider = (new lpdashboard.ethereum.web3provider(window.ethereum));
lpdashboard.ethereum.sashimi_abi = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function poolLength() view returns (uint256)","function poolInfo(uint256 _pid) view returns (address, uint256, uint256, uint256)","function userInfo(uint256 _pid, address owner) view returns (uint256, uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.lpbar_abi = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function lp() view returns (address)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function totalLp() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function lpBalance(address owner) view returns (uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.sr_abi = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function earned(address _account)  view returns (uint256)","function rewardsToken()  view returns (address)","function cream() view returns (address)","function token() view returns (address)","function sushi() view returns (address)","function sashimi() view returns (address)","function yam() view returns (address)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.erc20_abi = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","function deposit(uint256 pid, uint256 amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
lpdashboard.ethereum.pickle_jar_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function balance() view returns (uint256)"], null);
lpdashboard.ethereum.event_detector_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)","event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)","event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)","event Staked(address indexed user, uint256 amount, address payer)"], null);
lpdashboard.ethereum.event_w_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)"], null);
lpdashboard.ethereum.univ2_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Mint(address indexed sender, uint amount0, uint amount1)","event Burn(address indexed sender, uint amount0, uint amount1, address indexed to)"], null);
lpdashboard.ethereum.uni_detector_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Staked(address indexed user, uint256 amount)"], null);
lpdashboard.ethereum.sr_deposit_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256","uint256"], null);
lpdashboard.ethereum.debug_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256"], null);
lpdashboard.ethereum.cheff_deposit_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["address","uint256","uint256"], null);
lpdashboard.ethereum.comp_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)","event LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)","event Mint(address minter, uint mintAmount, uint mintTokens)","event Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)","event Redeem(address redeemer, uint redeemAmount, uint redeemTokens)"], null);
lpdashboard.ethereum.erc20_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi)));
lpdashboard.ethereum.sashimi_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi)));
lpdashboard.ethereum.detector_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.event_detector_abi)));
lpdashboard.ethereum.univ2_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.univ2_abi)));
lpdashboard.ethereum.make_edn_blob = (function lpdashboard$ethereum$make_edn_blob(coll){
return (new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/edn"], null)));
});
lpdashboard.ethereum.download_blob = (function lpdashboard$ethereum$download_blob(blob,filename){
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
lpdashboard.ethereum.download_as_edn = (function lpdashboard$ethereum$download_as_edn(coll){
return URL.createObjectURL((new Blob(cljs.core.clj__GT_js((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)],null))),({"type": "text/edn"}))));
});
lpdashboard.ethereum.lw_address = "0x909b443761bbd7fbb876ecde71a37e1433f6af6f";
lpdashboard.ethereum.cdai_init_block = (8983575);
lpdashboard.ethereum.cusdc_init_block = (7710760);
lpdashboard.ethereum.ceth_init_block = (7710758);
lpdashboard.ethereum.cusdt_init_block = (9879363);
lpdashboard.ethereum.wbtc_init_block = (6766284);
lpdashboard.ethereum.comp_last_block = (11333180);
lpdashboard.ethereum.caddress__GT_token = (function lpdashboard$ethereum$caddress__GT_token(caddress){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays(["0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9","0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4","0xc11b1268c1a384e55c48c2391d8d480264a3a7f4","0x39AA39c021dfbaE8faC545936693aC917d5E7563","0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407","0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e","0x35A18000230DA775CAc24873d00Ff85BccdeD550","0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643","0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5"],["USDT","COMP","WBTC","USDC","ZRX","BAT","UNI","DAI","ETH"]),caddress);
});
lpdashboard.ethereum.token__GT_address = (function lpdashboard$ethereum$token__GT_address(token){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, ["WETH","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","WBTC","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","BAT","0x0d8775f648430679a709e98d2b0cb6250d2887ef","COMP","0xc00e94cb662c3520282e6f5717214004a7f26888","UNI","0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","ZRX","0xe41d2489571d322189246dafa5ebde1f4699f498"], null),token);
});
lpdashboard.ethereum.make_erc20 = (function lpdashboard$ethereum$make_erc20(address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi),lpdashboard.ethereum.provider));
});
lpdashboard.ethereum.make_contract = (function lpdashboard$ethereum$make_contract(abi,address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(abi),lpdashboard.ethereum.provider));
});
lpdashboard.ethereum.comp_repayments = (function lpdashboard$ethereum$comp_repayments(caddress,start_block,end_block){
var comp_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.comp_abi,caddress);
var repay_filter = (comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.RepayBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.RepayBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77270){
var state_val_77271 = (state_77270[(1)]);
if((state_val_77271 === (1))){
var inst_77255 = lpdashboard.ethereum.provider.getLogs(repay_filter);
var inst_77256 = cljs.core.async.interop.p__GT_c(inst_77255);
var state_77270__$1 = state_77270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77270__$1,(2),inst_77256);
} else {
if((state_val_77271 === (2))){
var inst_77258 = (state_77270[(7)]);
var inst_77258__$1 = (state_77270[(2)]);
var inst_77259 = (inst_77258__$1 instanceof cljs.core.ExceptionInfo);
var inst_77260 = cljs.core.ex_data(inst_77258__$1);
var inst_77261 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77260);
var inst_77262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77261,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77263 = ((inst_77259) && (inst_77262));
var state_77270__$1 = (function (){var statearr_77272 = state_77270;
(statearr_77272[(7)] = inst_77258__$1);

return statearr_77272;
})();
if(cljs.core.truth_(inst_77263)){
var statearr_77273_78422 = state_77270__$1;
(statearr_77273_78422[(1)] = (3));

} else {
var statearr_77274_78423 = state_77270__$1;
(statearr_77274_78423[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77271 === (3))){
var inst_77258 = (state_77270[(7)]);
var inst_77265 = (function(){throw inst_77258})();
var state_77270__$1 = state_77270;
var statearr_77275_78424 = state_77270__$1;
(statearr_77275_78424[(2)] = inst_77265);

(statearr_77275_78424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77271 === (4))){
var inst_77258 = (state_77270[(7)]);
var state_77270__$1 = state_77270;
var statearr_77276_78425 = state_77270__$1;
(statearr_77276_78425[(2)] = inst_77258);

(statearr_77276_78425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77271 === (5))){
var inst_77268 = (state_77270[(2)]);
var state_77270__$1 = state_77270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77270__$1,inst_77268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____0 = (function (){
var statearr_77278 = [null,null,null,null,null,null,null,null];
(statearr_77278[(0)] = lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__);

(statearr_77278[(1)] = (1));

return statearr_77278;
});
var lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____1 = (function (state_77270){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77270);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77279){var ex__38753__auto__ = e77279;
var statearr_77280_78426 = state_77270;
(statearr_77280_78426[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77270[(4)]))){
var statearr_77281_78427 = state_77270;
(statearr_77281_78427[(1)] = cljs.core.first((state_77270[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78428 = state_77270;
state_77270 = G__78428;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__ = function(state_77270){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____1.call(this,state_77270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____0;
lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$comp_repayments_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77282 = f__38842__auto__();
(statearr_77282[(6)] = c__38841__auto__);

return statearr_77282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_liquidations = (function lpdashboard$ethereum$comp_liquidations(caddress,start_block,end_block){
var comp_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.comp_abi,caddress);
var repay_filter = (comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.LiquidateBorrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.LiquidateBorrow.call(null));
var _ = (repay_filter.fromBlock = start_block);
var ___$1 = (repay_filter.toBlock = end_block);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77298){
var state_val_77299 = (state_77298[(1)]);
if((state_val_77299 === (1))){
var inst_77283 = lpdashboard.ethereum.provider.getLogs(repay_filter);
var inst_77284 = cljs.core.async.interop.p__GT_c(inst_77283);
var state_77298__$1 = state_77298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77298__$1,(2),inst_77284);
} else {
if((state_val_77299 === (2))){
var inst_77286 = (state_77298[(7)]);
var inst_77286__$1 = (state_77298[(2)]);
var inst_77287 = (inst_77286__$1 instanceof cljs.core.ExceptionInfo);
var inst_77288 = cljs.core.ex_data(inst_77286__$1);
var inst_77289 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77288);
var inst_77290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77289,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77291 = ((inst_77287) && (inst_77290));
var state_77298__$1 = (function (){var statearr_77300 = state_77298;
(statearr_77300[(7)] = inst_77286__$1);

return statearr_77300;
})();
if(cljs.core.truth_(inst_77291)){
var statearr_77301_78455 = state_77298__$1;
(statearr_77301_78455[(1)] = (3));

} else {
var statearr_77302_78456 = state_77298__$1;
(statearr_77302_78456[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77299 === (3))){
var inst_77286 = (state_77298[(7)]);
var inst_77293 = (function(){throw inst_77286})();
var state_77298__$1 = state_77298;
var statearr_77303_78457 = state_77298__$1;
(statearr_77303_78457[(2)] = inst_77293);

(statearr_77303_78457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77299 === (4))){
var inst_77286 = (state_77298[(7)]);
var state_77298__$1 = state_77298;
var statearr_77304_78458 = state_77298__$1;
(statearr_77304_78458[(2)] = inst_77286);

(statearr_77304_78458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77299 === (5))){
var inst_77296 = (state_77298[(2)]);
var state_77298__$1 = state_77298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77298__$1,inst_77296);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____0 = (function (){
var statearr_77305 = [null,null,null,null,null,null,null,null];
(statearr_77305[(0)] = lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__);

(statearr_77305[(1)] = (1));

return statearr_77305;
});
var lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____1 = (function (state_77298){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77298);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77306){var ex__38753__auto__ = e77306;
var statearr_77307_78462 = state_77298;
(statearr_77307_78462[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77298[(4)]))){
var statearr_77308_78464 = state_77298;
(statearr_77308_78464[(1)] = cljs.core.first((state_77298[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78465 = state_77298;
state_77298 = G__78465;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__ = function(state_77298){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____1.call(this,state_77298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____0;
lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$comp_liquidations_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77309 = f__38842__auto__();
(statearr_77309[(6)] = c__38841__auto__);

return statearr_77309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_mints = (function lpdashboard$ethereum$comp_mints(caddress,start_block,end_block){
var comp_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.comp_abi,caddress);
var mint_filter = (comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Mint.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Mint.call(null));
var _ = (mint_filter.fromBlock = start_block);
var ___$1 = (mint_filter.toBlock = end_block);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77325){
var state_val_77326 = (state_77325[(1)]);
if((state_val_77326 === (1))){
var inst_77310 = lpdashboard.ethereum.provider.getLogs(mint_filter);
var inst_77311 = cljs.core.async.interop.p__GT_c(inst_77310);
var state_77325__$1 = state_77325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77325__$1,(2),inst_77311);
} else {
if((state_val_77326 === (2))){
var inst_77313 = (state_77325[(7)]);
var inst_77313__$1 = (state_77325[(2)]);
var inst_77314 = (inst_77313__$1 instanceof cljs.core.ExceptionInfo);
var inst_77315 = cljs.core.ex_data(inst_77313__$1);
var inst_77316 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77315);
var inst_77317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77316,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77318 = ((inst_77314) && (inst_77317));
var state_77325__$1 = (function (){var statearr_77327 = state_77325;
(statearr_77327[(7)] = inst_77313__$1);

return statearr_77327;
})();
if(cljs.core.truth_(inst_77318)){
var statearr_77328_78470 = state_77325__$1;
(statearr_77328_78470[(1)] = (3));

} else {
var statearr_77329_78471 = state_77325__$1;
(statearr_77329_78471[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77326 === (3))){
var inst_77313 = (state_77325[(7)]);
var inst_77320 = (function(){throw inst_77313})();
var state_77325__$1 = state_77325;
var statearr_77330_78474 = state_77325__$1;
(statearr_77330_78474[(2)] = inst_77320);

(statearr_77330_78474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77326 === (4))){
var inst_77313 = (state_77325[(7)]);
var state_77325__$1 = state_77325;
var statearr_77331_78476 = state_77325__$1;
(statearr_77331_78476[(2)] = inst_77313);

(statearr_77331_78476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77326 === (5))){
var inst_77323 = (state_77325[(2)]);
var state_77325__$1 = state_77325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77325__$1,inst_77323);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____0 = (function (){
var statearr_77332 = [null,null,null,null,null,null,null,null];
(statearr_77332[(0)] = lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__);

(statearr_77332[(1)] = (1));

return statearr_77332;
});
var lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____1 = (function (state_77325){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77325);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77333){var ex__38753__auto__ = e77333;
var statearr_77334_78478 = state_77325;
(statearr_77334_78478[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77325[(4)]))){
var statearr_77335_78479 = state_77325;
(statearr_77335_78479[(1)] = cljs.core.first((state_77325[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78480 = state_77325;
state_77325 = G__78480;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__ = function(state_77325){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____1.call(this,state_77325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____0;
lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$comp_mints_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77336 = f__38842__auto__();
(statearr_77336[(6)] = c__38841__auto__);

return statearr_77336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_borrows = (function lpdashboard$ethereum$comp_borrows(caddress,start_block,end_block){
var comp_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.comp_abi,caddress);
var borrow_filter = (comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Borrow.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Borrow.call(null));
var _ = (borrow_filter.fromBlock = start_block);
var ___$1 = (borrow_filter.toBlock = end_block);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77352){
var state_val_77353 = (state_77352[(1)]);
if((state_val_77353 === (1))){
var inst_77337 = lpdashboard.ethereum.provider.getLogs(borrow_filter);
var inst_77338 = cljs.core.async.interop.p__GT_c(inst_77337);
var state_77352__$1 = state_77352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77352__$1,(2),inst_77338);
} else {
if((state_val_77353 === (2))){
var inst_77340 = (state_77352[(7)]);
var inst_77340__$1 = (state_77352[(2)]);
var inst_77341 = (inst_77340__$1 instanceof cljs.core.ExceptionInfo);
var inst_77342 = cljs.core.ex_data(inst_77340__$1);
var inst_77343 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77342);
var inst_77344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77343,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77345 = ((inst_77341) && (inst_77344));
var state_77352__$1 = (function (){var statearr_77354 = state_77352;
(statearr_77354[(7)] = inst_77340__$1);

return statearr_77354;
})();
if(cljs.core.truth_(inst_77345)){
var statearr_77355_78487 = state_77352__$1;
(statearr_77355_78487[(1)] = (3));

} else {
var statearr_77356_78488 = state_77352__$1;
(statearr_77356_78488[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77353 === (3))){
var inst_77340 = (state_77352[(7)]);
var inst_77347 = (function(){throw inst_77340})();
var state_77352__$1 = state_77352;
var statearr_77357_78489 = state_77352__$1;
(statearr_77357_78489[(2)] = inst_77347);

(statearr_77357_78489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77353 === (4))){
var inst_77340 = (state_77352[(7)]);
var state_77352__$1 = state_77352;
var statearr_77358_78490 = state_77352__$1;
(statearr_77358_78490[(2)] = inst_77340);

(statearr_77358_78490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77353 === (5))){
var inst_77350 = (state_77352[(2)]);
var state_77352__$1 = state_77352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77352__$1,inst_77350);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____0 = (function (){
var statearr_77359 = [null,null,null,null,null,null,null,null];
(statearr_77359[(0)] = lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__);

(statearr_77359[(1)] = (1));

return statearr_77359;
});
var lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____1 = (function (state_77352){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77352);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77360){var ex__38753__auto__ = e77360;
var statearr_77361_78492 = state_77352;
(statearr_77361_78492[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77352[(4)]))){
var statearr_77362_78493 = state_77352;
(statearr_77362_78493[(1)] = cljs.core.first((state_77352[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78494 = state_77352;
state_77352 = G__78494;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__ = function(state_77352){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____1.call(this,state_77352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____0;
lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$comp_borrows_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77363 = f__38842__auto__();
(statearr_77363[(6)] = c__38841__auto__);

return statearr_77363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_redeems = (function lpdashboard$ethereum$comp_redeems(caddress,start_block,end_block){
var comp_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.comp_abi,caddress);
var redeem_filter = (comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0 ? comp_contract.filters.Redeem.cljs$core$IFn$_invoke$arity$0() : comp_contract.filters.Redeem.call(null));
var _ = (redeem_filter.fromBlock = start_block);
var ___$1 = (redeem_filter.toBlock = end_block);
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77379){
var state_val_77380 = (state_77379[(1)]);
if((state_val_77380 === (1))){
var inst_77364 = lpdashboard.ethereum.provider.getLogs(redeem_filter);
var inst_77365 = cljs.core.async.interop.p__GT_c(inst_77364);
var state_77379__$1 = state_77379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77379__$1,(2),inst_77365);
} else {
if((state_val_77380 === (2))){
var inst_77367 = (state_77379[(7)]);
var inst_77367__$1 = (state_77379[(2)]);
var inst_77368 = (inst_77367__$1 instanceof cljs.core.ExceptionInfo);
var inst_77369 = cljs.core.ex_data(inst_77367__$1);
var inst_77370 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77369);
var inst_77371 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77370,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77372 = ((inst_77368) && (inst_77371));
var state_77379__$1 = (function (){var statearr_77381 = state_77379;
(statearr_77381[(7)] = inst_77367__$1);

return statearr_77381;
})();
if(cljs.core.truth_(inst_77372)){
var statearr_77382_78495 = state_77379__$1;
(statearr_77382_78495[(1)] = (3));

} else {
var statearr_77383_78496 = state_77379__$1;
(statearr_77383_78496[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77380 === (3))){
var inst_77367 = (state_77379[(7)]);
var inst_77374 = (function(){throw inst_77367})();
var state_77379__$1 = state_77379;
var statearr_77384_78497 = state_77379__$1;
(statearr_77384_78497[(2)] = inst_77374);

(statearr_77384_78497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77380 === (4))){
var inst_77367 = (state_77379[(7)]);
var state_77379__$1 = state_77379;
var statearr_77385_78498 = state_77379__$1;
(statearr_77385_78498[(2)] = inst_77367);

(statearr_77385_78498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77380 === (5))){
var inst_77377 = (state_77379[(2)]);
var state_77379__$1 = state_77379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77379__$1,inst_77377);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____0 = (function (){
var statearr_77386 = [null,null,null,null,null,null,null,null];
(statearr_77386[(0)] = lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__);

(statearr_77386[(1)] = (1));

return statearr_77386;
});
var lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____1 = (function (state_77379){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77379);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77387){var ex__38753__auto__ = e77387;
var statearr_77388_78499 = state_77379;
(statearr_77388_78499[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77379[(4)]))){
var statearr_77389_78500 = state_77379;
(statearr_77389_78500[(1)] = cljs.core.first((state_77379[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78501 = state_77379;
state_77379 = G__78501;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__ = function(state_77379){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____1.call(this,state_77379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____0;
lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$comp_redeems_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77390 = f__38842__auto__();
(statearr_77390[(6)] = c__38841__auto__);

return statearr_77390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.comp_abi)));
lpdashboard.ethereum.make_comp_repayment = (function lpdashboard$ethereum$make_comp_repayment(tx,decimals){
var parsed_event = lpdashboard.ethereum.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"account-borrrows","account-borrrows",-395615768),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"payer","payer",443929743),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603)],[tx_hash,caddress,lpdashboard.utils.ebn__GT_bn(tx_args.accountBorrows,decimals),"repayment",block_number,tx_args.payer,lpdashboard.utils.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.borrower,lpdashboard.utils.ebn__GT_bn(tx_args.totalBorrows,decimals)]);
});
lpdashboard.ethereum.make_comp_liquidation = (function lpdashboard$ethereum$make_comp_liquidation(tx,decimals){
var parsed_event = lpdashboard.ethereum.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var caddress = tx.address;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"caddress","caddress",-209801369),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"seize-tokens","seize-tokens",-1982010893),new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),new cljs.core.Keyword(null,"liquidator","liquidator",676132375),new cljs.core.Keyword(null,"borrower","borrower",1776622391),new cljs.core.Keyword(null,"c-token-collateral","c-token-collateral",1555321853)],[tx_hash,caddress,"liquidation",block_number,lpdashboard.utils.ebn__GT_bn(tx_args.seizeTokens,decimals),lpdashboard.utils.ebn__GT_bn(tx_args.repayAmount,decimals),tx_args.liquidator,tx_args.borrower,tx_args.cTokenCollateral]);
});
lpdashboard.ethereum.make_comp_mint = (function lpdashboard$ethereum$make_comp_mint(tx,decimals){
var parsed_event = lpdashboard.ethereum.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"minter","minter",280863112),tx_args.minter,new cljs.core.Keyword(null,"mint-amount","mint-amount",961101419),lpdashboard.utils.ebn__GT_bn(tx_args.mintAmount,decimals),new cljs.core.Keyword(null,"mint-tokens","mint-tokens",1594108366),lpdashboard.utils.ebn__GT_bn(tx_args.mintTokens,decimals),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"type","type",1174270348),"mint",new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.ethereum.make_comp_borrow = (function lpdashboard$ethereum$make_comp_borrow(tx,decimals){
var parsed_event = lpdashboard.ethereum.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"borrower","borrower",1776622391),tx_args.borrower,new cljs.core.Keyword(null,"borrow-amount","borrow-amount",-909882063),lpdashboard.utils.ebn__GT_bn(tx_args.borrowAmount,decimals),new cljs.core.Keyword(null,"account-borrows","account-borrows",-286211829),lpdashboard.utils.ebn__GT_bn(tx_args.accountBorrows,decimals),new cljs.core.Keyword(null,"total-borrows","total-borrows",-872245603),lpdashboard.utils.ebn__GT_bn(tx_args.totalBorrows,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"borrow",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.ethereum.make_comp_redeem = (function lpdashboard$ethereum$make_comp_redeem(tx,decimals){
var parsed_event = lpdashboard.ethereum.comp_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var caddress = tx.address;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"redeemer","redeemer",-319029372),tx_args.redeemer,new cljs.core.Keyword(null,"redeem-amount","redeem-amount",541522884),lpdashboard.utils.ebn__GT_bn(tx_args.redeemAmount,decimals),new cljs.core.Keyword(null,"redeem-tokens","redeem-tokens",1379041193),lpdashboard.utils.ebn__GT_bn(tx_args.redeemTokens,decimals),new cljs.core.Keyword(null,"type","type",1174270348),"redeem",new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"caddress","caddress",-209801369),caddress,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number], null);
});
lpdashboard.ethereum._LT_fetch_comp_logs = (function lpdashboard$ethereum$_LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77391_SHARP_){
var G__77392 = caddress;
var G__77393 = p1__77391_SHARP_;
var G__77394 = (p1__77391_SHARP_ + (4999));
return (logsfn.cljs$core$IFn$_invoke$arity$3 ? logsfn.cljs$core$IFn$_invoke$arity$3(G__77392,G__77393,G__77394) : logsfn.call(null,G__77392,G__77393,G__77394));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(5000)))));
});
lpdashboard.ethereum._LT_pfetch_comp_logs = (function lpdashboard$ethereum$_LT_pfetch_comp_logs(logsfn,parsefn,caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77402){
var state_val_77403 = (state_77402[(1)]);
if((state_val_77403 === (1))){
var inst_77396 = lpdashboard.ethereum._LT_fetch_comp_logs(logsfn,caddress,start_block,end_block,decimals);
var state_77402__$1 = state_77402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77402__$1,(2),inst_77396);
} else {
if((state_val_77403 === (2))){
var inst_77398 = (state_77402[(2)]);
var inst_77399 = (function (){var fetched_logs = inst_77398;
return (function (p1__77395_SHARP_){
return (parsefn.cljs$core$IFn$_invoke$arity$2 ? parsefn.cljs$core$IFn$_invoke$arity$2(p1__77395_SHARP_,decimals) : parsefn.call(null,p1__77395_SHARP_,decimals));
});
})();
var inst_77400 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77399,inst_77398);
var state_77402__$1 = state_77402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77402__$1,inst_77400);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____0 = (function (){
var statearr_77404 = [null,null,null,null,null,null,null];
(statearr_77404[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__);

(statearr_77404[(1)] = (1));

return statearr_77404;
});
var lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____1 = (function (state_77402){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77402);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77405){var ex__38753__auto__ = e77405;
var statearr_77406_78539 = state_77402;
(statearr_77406_78539[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77402[(4)]))){
var statearr_77407_78541 = state_77402;
(statearr_77407_78541[(1)] = cljs.core.first((state_77402[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78543 = state_77402;
state_77402 = G__78543;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__ = function(state_77402){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____1.call(this,state_77402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_logs_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77408 = f__38842__auto__();
(statearr_77408[(6)] = c__38841__auto__);

return statearr_77408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_comp_repayments = (function lpdashboard$ethereum$_LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77413){
var state_val_77414 = (state_77413[(1)]);
if((state_val_77414 === (1))){
var inst_77409 = lpdashboard.ethereum._LT_pfetch_comp_logs(lpdashboard.ethereum.comp_repayments,lpdashboard.ethereum.make_comp_repayment,caddress,start_block,end_block,decimals);
var state_77413__$1 = state_77413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77413__$1,(2),inst_77409);
} else {
if((state_val_77414 === (2))){
var inst_77411 = (state_77413[(2)]);
var state_77413__$1 = state_77413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77413__$1,inst_77411);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____0 = (function (){
var statearr_77415 = [null,null,null,null,null,null,null];
(statearr_77415[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__);

(statearr_77415[(1)] = (1));

return statearr_77415;
});
var lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____1 = (function (state_77413){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77413);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77416){var ex__38753__auto__ = e77416;
var statearr_77417_78551 = state_77413;
(statearr_77417_78551[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77413[(4)]))){
var statearr_77418_78552 = state_77413;
(statearr_77418_78552[(1)] = cljs.core.first((state_77413[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78553 = state_77413;
state_77413 = G__78553;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__ = function(state_77413){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____1.call(this,state_77413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_repayments_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77419 = f__38842__auto__();
(statearr_77419[(6)] = c__38841__auto__);

return statearr_77419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_comp_mints = (function lpdashboard$ethereum$_LT_pfetch_comp_mints(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77424){
var state_val_77425 = (state_77424[(1)]);
if((state_val_77425 === (1))){
var inst_77420 = lpdashboard.ethereum._LT_pfetch_comp_logs(lpdashboard.ethereum.comp_mints,lpdashboard.ethereum.make_comp_mint,caddress,start_block,end_block,decimals);
var state_77424__$1 = state_77424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77424__$1,(2),inst_77420);
} else {
if((state_val_77425 === (2))){
var inst_77422 = (state_77424[(2)]);
var state_77424__$1 = state_77424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77424__$1,inst_77422);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____0 = (function (){
var statearr_77426 = [null,null,null,null,null,null,null];
(statearr_77426[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__);

(statearr_77426[(1)] = (1));

return statearr_77426;
});
var lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____1 = (function (state_77424){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77424);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77427){var ex__38753__auto__ = e77427;
var statearr_77428_78559 = state_77424;
(statearr_77428_78559[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77424[(4)]))){
var statearr_77429_78560 = state_77424;
(statearr_77429_78560[(1)] = cljs.core.first((state_77424[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78561 = state_77424;
state_77424 = G__78561;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__ = function(state_77424){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____1.call(this,state_77424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_mints_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77430 = f__38842__auto__();
(statearr_77430[(6)] = c__38841__auto__);

return statearr_77430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_comp_liquidations = (function lpdashboard$ethereum$_LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77435){
var state_val_77436 = (state_77435[(1)]);
if((state_val_77436 === (1))){
var inst_77431 = lpdashboard.ethereum._LT_pfetch_comp_logs(lpdashboard.ethereum.comp_liquidations,lpdashboard.ethereum.make_comp_liquidation,caddress,start_block,end_block,decimals);
var state_77435__$1 = state_77435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77435__$1,(2),inst_77431);
} else {
if((state_val_77436 === (2))){
var inst_77433 = (state_77435[(2)]);
var state_77435__$1 = state_77435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77435__$1,inst_77433);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____0 = (function (){
var statearr_77437 = [null,null,null,null,null,null,null];
(statearr_77437[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__);

(statearr_77437[(1)] = (1));

return statearr_77437;
});
var lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____1 = (function (state_77435){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77435);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77438){var ex__38753__auto__ = e77438;
var statearr_77439_78562 = state_77435;
(statearr_77439_78562[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77435[(4)]))){
var statearr_77440_78563 = state_77435;
(statearr_77440_78563[(1)] = cljs.core.first((state_77435[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78564 = state_77435;
state_77435 = G__78564;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__ = function(state_77435){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____1.call(this,state_77435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_liquidations_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77441 = f__38842__auto__();
(statearr_77441[(6)] = c__38841__auto__);

return statearr_77441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_comp_borrows = (function lpdashboard$ethereum$_LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77446){
var state_val_77447 = (state_77446[(1)]);
if((state_val_77447 === (1))){
var inst_77442 = lpdashboard.ethereum._LT_pfetch_comp_logs(lpdashboard.ethereum.comp_borrows,lpdashboard.ethereum.make_comp_borrow,caddress,start_block,end_block,decimals);
var state_77446__$1 = state_77446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77446__$1,(2),inst_77442);
} else {
if((state_val_77447 === (2))){
var inst_77444 = (state_77446[(2)]);
var state_77446__$1 = state_77446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77446__$1,inst_77444);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____0 = (function (){
var statearr_77448 = [null,null,null,null,null,null,null];
(statearr_77448[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__);

(statearr_77448[(1)] = (1));

return statearr_77448;
});
var lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____1 = (function (state_77446){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77446);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77449){var ex__38753__auto__ = e77449;
var statearr_77450_78569 = state_77446;
(statearr_77450_78569[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77446[(4)]))){
var statearr_77451_78570 = state_77446;
(statearr_77451_78570[(1)] = cljs.core.first((state_77446[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78571 = state_77446;
state_77446 = G__78571;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__ = function(state_77446){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____1.call(this,state_77446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_borrows_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77452 = f__38842__auto__();
(statearr_77452[(6)] = c__38841__auto__);

return statearr_77452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_comp_redeems = (function lpdashboard$ethereum$_LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77457){
var state_val_77458 = (state_77457[(1)]);
if((state_val_77458 === (1))){
var inst_77453 = lpdashboard.ethereum._LT_pfetch_comp_logs(lpdashboard.ethereum.comp_redeems,lpdashboard.ethereum.make_comp_redeem,caddress,start_block,end_block,decimals);
var state_77457__$1 = state_77457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77457__$1,(2),inst_77453);
} else {
if((state_val_77458 === (2))){
var inst_77455 = (state_77457[(2)]);
var state_77457__$1 = state_77457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77457__$1,inst_77455);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____0 = (function (){
var statearr_77459 = [null,null,null,null,null,null,null];
(statearr_77459[(0)] = lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__);

(statearr_77459[(1)] = (1));

return statearr_77459;
});
var lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____1 = (function (state_77457){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77457);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77460){var ex__38753__auto__ = e77460;
var statearr_77461_78572 = state_77457;
(statearr_77461_78572[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77457[(4)]))){
var statearr_77462_78573 = state_77457;
(statearr_77462_78573[(1)] = cljs.core.first((state_77457[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78574 = state_77457;
state_77457 = G__78574;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__ = function(state_77457){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____1.call(this,state_77457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_comp_redeems_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77463 = f__38842__auto__();
(statearr_77463[(6)] = c__38841__auto__);

return statearr_77463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pfetch_ctoken_events = (function lpdashboard$ethereum$_LT_pfetch_ctoken_events(caddress,start_block,end_block,decimals){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77482){
var state_val_77483 = (state_77482[(1)]);
if((state_val_77483 === (1))){
var inst_77464 = lpdashboard.ethereum._LT_pfetch_comp_repayments(caddress,start_block,end_block,decimals);
var state_77482__$1 = state_77482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77482__$1,(2),inst_77464);
} else {
if((state_val_77483 === (2))){
var inst_77466 = (state_77482[(2)]);
var inst_77467 = lpdashboard.ethereum._LT_pfetch_comp_mints(caddress,start_block,end_block,decimals);
var state_77482__$1 = (function (){var statearr_77484 = state_77482;
(statearr_77484[(7)] = inst_77466);

return statearr_77484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77482__$1,(3),inst_77467);
} else {
if((state_val_77483 === (3))){
var inst_77469 = (state_77482[(2)]);
var inst_77470 = lpdashboard.ethereum._LT_pfetch_comp_borrows(caddress,start_block,end_block,decimals);
var state_77482__$1 = (function (){var statearr_77485 = state_77482;
(statearr_77485[(8)] = inst_77469);

return statearr_77485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77482__$1,(4),inst_77470);
} else {
if((state_val_77483 === (4))){
var inst_77472 = (state_77482[(2)]);
var inst_77473 = lpdashboard.ethereum._LT_pfetch_comp_liquidations(caddress,start_block,end_block,decimals);
var state_77482__$1 = (function (){var statearr_77486 = state_77482;
(statearr_77486[(9)] = inst_77472);

return statearr_77486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77482__$1,(5),inst_77473);
} else {
if((state_val_77483 === (5))){
var inst_77475 = (state_77482[(2)]);
var inst_77476 = lpdashboard.ethereum._LT_pfetch_comp_redeems(caddress,start_block,end_block,decimals);
var state_77482__$1 = (function (){var statearr_77487 = state_77482;
(statearr_77487[(10)] = inst_77475);

return statearr_77487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77482__$1,(6),inst_77476);
} else {
if((state_val_77483 === (6))){
var inst_77475 = (state_77482[(10)]);
var inst_77466 = (state_77482[(7)]);
var inst_77469 = (state_77482[(8)]);
var inst_77472 = (state_77482[(9)]);
var inst_77478 = (state_77482[(2)]);
var inst_77479 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_77466,inst_77469,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77472,inst_77475,inst_77478], 0));
var inst_77480 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),inst_77479);
var state_77482__$1 = state_77482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77482__$1,inst_77480);
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
var lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____0 = (function (){
var statearr_77488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77488[(0)] = lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__);

(statearr_77488[(1)] = (1));

return statearr_77488;
});
var lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____1 = (function (state_77482){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77482);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77489){var ex__38753__auto__ = e77489;
var statearr_77490_78582 = state_77482;
(statearr_77490_78582[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77482[(4)]))){
var statearr_77491_78583 = state_77482;
(statearr_77491_78583[(1)] = cljs.core.first((state_77482[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78584 = state_77482;
state_77482 = G__78584;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__ = function(state_77482){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____1.call(this,state_77482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pfetch_ctoken_events_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77492 = f__38842__auto__();
(statearr_77492[(6)] = c__38841__auto__);

return statearr_77492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.account_ctoken_events = (function lpdashboard$ethereum$account_ctoken_events(ctoken_events,account){
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
lpdashboard.ethereum.block_num__GT_ts = (function lpdashboard$ethereum$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77493_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77493_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
lpdashboard.ethereum.ts__GT_geckoprice = (function lpdashboard$ethereum$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77494_SHARP_){
return (cljs.core.first(p1__77494_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77495_SHARP_){
return (cljs.core.first(p1__77495_SHARP_) > ts);
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
lpdashboard.ethereum.blocknum__GT_geckoprice = (function lpdashboard$ethereum$blocknum__GT_geckoprice(day_prices,blocks,block_num){
var ts = ((1000) * lpdashboard.ethereum.block_num__GT_ts(blocks,block_num));
var price = lpdashboard.ethereum.ts__GT_geckoprice(day_prices,ts);
return parseFloat(price);
});
lpdashboard.ethereum._LT_get_block = (function lpdashboard$ethereum$_LT_get_block(block_num){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77512){
var state_val_77513 = (state_77512[(1)]);
if((state_val_77513 === (1))){
var inst_77496 = lpdashboard.ethereum.provider.getBlock(block_num);
var inst_77497 = cljs.core.async.interop.p__GT_c(inst_77496);
var state_77512__$1 = state_77512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77512__$1,(2),inst_77497);
} else {
if((state_val_77513 === (2))){
var inst_77499 = (state_77512[(7)]);
var inst_77499__$1 = (state_77512[(2)]);
var inst_77500 = (inst_77499__$1 instanceof cljs.core.ExceptionInfo);
var inst_77501 = cljs.core.ex_data(inst_77499__$1);
var inst_77502 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77501);
var inst_77503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77502,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77504 = ((inst_77500) && (inst_77503));
var state_77512__$1 = (function (){var statearr_77514 = state_77512;
(statearr_77514[(7)] = inst_77499__$1);

return statearr_77514;
})();
if(cljs.core.truth_(inst_77504)){
var statearr_77515_78585 = state_77512__$1;
(statearr_77515_78585[(1)] = (3));

} else {
var statearr_77516_78586 = state_77512__$1;
(statearr_77516_78586[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (3))){
var inst_77499 = (state_77512[(7)]);
var inst_77506 = (function(){throw inst_77499})();
var state_77512__$1 = state_77512;
var statearr_77517_78587 = state_77512__$1;
(statearr_77517_78587[(2)] = inst_77506);

(statearr_77517_78587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (4))){
var inst_77499 = (state_77512[(7)]);
var state_77512__$1 = state_77512;
var statearr_77518_78588 = state_77512__$1;
(statearr_77518_78588[(2)] = inst_77499);

(statearr_77518_78588[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (5))){
var inst_77509 = (state_77512[(2)]);
var inst_77510 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_77509);
var state_77512__$1 = state_77512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77512__$1,inst_77510);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____0 = (function (){
var statearr_77519 = [null,null,null,null,null,null,null,null];
(statearr_77519[(0)] = lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__);

(statearr_77519[(1)] = (1));

return statearr_77519;
});
var lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____1 = (function (state_77512){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77512);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77520){var ex__38753__auto__ = e77520;
var statearr_77521_78606 = state_77512;
(statearr_77521_78606[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77512[(4)]))){
var statearr_77522_78621 = state_77512;
(statearr_77522_78621[(1)] = cljs.core.first((state_77512[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78624 = state_77512;
state_77512 = G__78624;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__ = function(state_77512){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____1.call(this,state_77512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_get_block_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77523 = f__38842__auto__();
(statearr_77523[(6)] = c__38841__auto__);

return statearr_77523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_fetch_blocks = (function lpdashboard$ethereum$_LT_fetch_blocks(block_numbers){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(block_numbers)], 0));

return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77524_SHARP_){
return lpdashboard.ethereum._LT_get_block(p1__77524_SHARP_);
}),block_numbers)));
});
lpdashboard.ethereum._LT_dolarize_liquidations = (function lpdashboard$ethereum$_LT_dolarize_liquidations(liquidations,token){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77537){
var state_val_77538 = (state_77537[(1)]);
if((state_val_77538 === (1))){
var inst_77525 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),liquidations);
var inst_77526 = cljs.core.set(inst_77525);
var inst_77527 = lpdashboard.ethereum._LT_fetch_blocks(inst_77526);
var state_77537__$1 = state_77537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77537__$1,(2),inst_77527);
} else {
if((state_val_77538 === (2))){
var inst_77529 = (state_77537[(2)]);
var inst_77530 = lpdashboard.ethereum.token__GT_address(token);
var inst_77531 = lpdashboard.coingecko._LT_historic_token_prices(inst_77530);
var state_77537__$1 = (function (){var statearr_77539 = state_77537;
(statearr_77539[(7)] = inst_77529);

return statearr_77539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77537__$1,(3),inst_77531);
} else {
if((state_val_77538 === (3))){
var inst_77529 = (state_77537[(7)]);
var inst_77533 = (state_77537[(2)]);
var inst_77534 = (function (){var liq_blocks = inst_77529;
var day_prices = inst_77533;
return (function (lq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lq,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988),bignumber.core._STAR_(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(lq),lpdashboard.utils.bn(lpdashboard.ethereum.blocknum__GT_geckoprice(day_prices,liq_blocks,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(lq))))], null));
});
})();
var inst_77535 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77534,liquidations);
var state_77537__$1 = state_77537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77537__$1,inst_77535);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____0 = (function (){
var statearr_77540 = [null,null,null,null,null,null,null,null];
(statearr_77540[(0)] = lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__);

(statearr_77540[(1)] = (1));

return statearr_77540;
});
var lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____1 = (function (state_77537){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77537);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77541){var ex__38753__auto__ = e77541;
var statearr_77542_78635 = state_77537;
(statearr_77542_78635[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77537[(4)]))){
var statearr_77543_78636 = state_77537;
(statearr_77543_78636[(1)] = cljs.core.first((state_77537[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78638 = state_77537;
state_77537 = G__78638;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__ = function(state_77537){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____1.call(this,state_77537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_dolarize_liquidations_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77544 = f__38842__auto__();
(statearr_77544[(6)] = c__38841__auto__);

return statearr_77544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.mistake_init_block = (11282800);
lpdashboard.ethereum.mistake_last_block = (11283600);
lpdashboard.ethereum.format_event = (function lpdashboard$ethereum$format_event(e){
var etype = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
var token = lpdashboard.ethereum.caddress__GT_token(new cljs.core.Keyword(null,"caddress","caddress",-209801369).cljs$core$IFn$_invoke$arity$1(e));
var block = new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(e);
var hash = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(e);
var G__77547 = etype;
switch (G__77547) {
case "mint":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mint-amount","mint-amount",961101419).cljs$core$IFn$_invoke$arity$1(e)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');

break;
case "borrow":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow-amount","borrow-amount",-909882063).cljs$core$IFn$_invoke$arity$1(e)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');

break;
case "redeem":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"redeem-amount","redeem-amount",541522884).cljs$core$IFn$_invoke$arity$1(e)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');

break;
case "repayment":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repay-amount","repay-amount",1863667988).cljs$core$IFn$_invoke$arity$1(e)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77547)].join('')));

}
});
lpdashboard.ethereum._LT_market_history = (function lpdashboard$ethereum$_LT_market_history(asset,min_ts,max_ts,buckets){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([min_ts,max_ts,buckets], 0));

var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77568){
var state_val_77569 = (state_77568[(1)]);
if((state_val_77569 === (1))){
var inst_77548 = [new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"min_block_timestamp","min_block_timestamp",-1625081007),new cljs.core.Keyword(null,"max_block_timestamp","max_block_timestamp",646870419),new cljs.core.Keyword(null,"num_buckets","num_buckets",587131036)];
var inst_77549 = ["0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",min_ts,max_ts,buckets];
var inst_77550 = cljs.core.PersistentHashMap.fromArrays(inst_77548,inst_77549);
var inst_77551 = cljs.core.clj__GT_js(inst_77550);
var inst_77552 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.marketHistory(inst_77551);
var inst_77553 = cljs.core.async.interop.p__GT_c(inst_77552);
var state_77568__$1 = state_77568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77568__$1,(2),inst_77553);
} else {
if((state_val_77569 === (2))){
var inst_77555 = (state_77568[(7)]);
var inst_77555__$1 = (state_77568[(2)]);
var inst_77556 = (inst_77555__$1 instanceof cljs.core.ExceptionInfo);
var inst_77557 = cljs.core.ex_data(inst_77555__$1);
var inst_77558 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77557);
var inst_77559 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77558,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77560 = ((inst_77556) && (inst_77559));
var state_77568__$1 = (function (){var statearr_77570 = state_77568;
(statearr_77570[(7)] = inst_77555__$1);

return statearr_77570;
})();
if(cljs.core.truth_(inst_77560)){
var statearr_77571_78651 = state_77568__$1;
(statearr_77571_78651[(1)] = (3));

} else {
var statearr_77572_78652 = state_77568__$1;
(statearr_77572_78652[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77569 === (3))){
var inst_77555 = (state_77568[(7)]);
var inst_77562 = (function(){throw inst_77555})();
var state_77568__$1 = state_77568;
var statearr_77573_78653 = state_77568__$1;
(statearr_77573_78653[(2)] = inst_77562);

(statearr_77573_78653[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77569 === (4))){
var inst_77555 = (state_77568[(7)]);
var state_77568__$1 = state_77568;
var statearr_77574_78654 = state_77568__$1;
(statearr_77574_78654[(2)] = inst_77555);

(statearr_77574_78654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77569 === (5))){
var inst_77565 = (state_77568[(2)]);
var inst_77566 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_77565);
var state_77568__$1 = state_77568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77568__$1,inst_77566);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____0 = (function (){
var statearr_77575 = [null,null,null,null,null,null,null,null];
(statearr_77575[(0)] = lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__);

(statearr_77575[(1)] = (1));

return statearr_77575;
});
var lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____1 = (function (state_77568){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77568);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77576){var ex__38753__auto__ = e77576;
var statearr_77577_78670 = state_77568;
(statearr_77577_78670[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77568[(4)]))){
var statearr_77578_78677 = state_77568;
(statearr_77578_78677[(1)] = cljs.core.first((state_77568[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78694 = state_77568;
state_77568 = G__78694;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__ = function(state_77568){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____1.call(this,state_77568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_market_history_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77579 = f__38842__auto__();
(statearr_77579[(6)] = c__38841__auto__);

return statearr_77579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_price_history = (function lpdashboard$ethereum$_LT_price_history(asset,min_ts,max_ts,buckets){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77587){
var state_val_77588 = (state_77587[(1)]);
if((state_val_77588 === (1))){
var inst_77580 = lpdashboard.ethereum._LT_market_history(asset,min_ts,max_ts,buckets);
var state_77587__$1 = state_77587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77587__$1,(2),inst_77580);
} else {
if((state_val_77588 === (2))){
var inst_77582 = (state_77587[(2)]);
var inst_77583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77582,"prices_usd");
var inst_77584 = (function (){var mh = inst_77582;
var prices_usd = inst_77583;
return (function (p){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 1, ["price-usd",parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,"price"),"value"))], null));
});
})();
var inst_77585 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77584,inst_77583);
var state_77587__$1 = state_77587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77587__$1,inst_77585);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____0 = (function (){
var statearr_77589 = [null,null,null,null,null,null,null];
(statearr_77589[(0)] = lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__);

(statearr_77589[(1)] = (1));

return statearr_77589;
});
var lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____1 = (function (state_77587){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77587);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77590){var ex__38753__auto__ = e77590;
var statearr_77591_78798 = state_77587;
(statearr_77591_78798[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77587[(4)]))){
var statearr_77592_78801 = state_77587;
(statearr_77592_78801[(1)] = cljs.core.first((state_77587[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78802 = state_77587;
state_77587 = G__78802;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__ = function(state_77587){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____1.call(this,state_77587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_price_history_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77593 = f__38842__auto__();
(statearr_77593[(6)] = c__38841__auto__);

return statearr_77593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.last_block = (11333300);
lpdashboard.ethereum.first_block = (11332733);
lpdashboard.ethereum._LT_ctoken_state = (function lpdashboard$ethereum$_LT_ctoken_state(address,block_number){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77618){
var state_val_77619 = (state_77618[(1)]);
if((state_val_77619 === (1))){
var inst_77595 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_77596 = [address,block_number];
var inst_77597 = cljs.core.PersistentHashMap.fromArrays(inst_77595,inst_77596);
var inst_77598 = cljs.core.clj__GT_js(inst_77597);
var inst_77599 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.cToken(inst_77598);
var inst_77600 = cljs.core.async.interop.p__GT_c(inst_77599);
var state_77618__$1 = state_77618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77618__$1,(2),inst_77600);
} else {
if((state_val_77619 === (2))){
var inst_77602 = (state_77618[(7)]);
var inst_77602__$1 = (state_77618[(2)]);
var inst_77603 = (inst_77602__$1 instanceof cljs.core.ExceptionInfo);
var inst_77604 = cljs.core.ex_data(inst_77602__$1);
var inst_77605 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77604);
var inst_77606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77605,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77607 = ((inst_77603) && (inst_77606));
var state_77618__$1 = (function (){var statearr_77620 = state_77618;
(statearr_77620[(7)] = inst_77602__$1);

return statearr_77620;
})();
if(cljs.core.truth_(inst_77607)){
var statearr_77621_78809 = state_77618__$1;
(statearr_77621_78809[(1)] = (3));

} else {
var statearr_77622_78810 = state_77618__$1;
(statearr_77622_78810[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77619 === (3))){
var inst_77602 = (state_77618[(7)]);
var inst_77609 = (function(){throw inst_77602})();
var state_77618__$1 = state_77618;
var statearr_77623_78812 = state_77618__$1;
(statearr_77623_78812[(2)] = inst_77609);

(statearr_77623_78812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77619 === (4))){
var inst_77602 = (state_77618[(7)]);
var state_77618__$1 = state_77618;
var statearr_77624_78814 = state_77618__$1;
(statearr_77624_78814[(2)] = inst_77602);

(statearr_77624_78814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77619 === (5))){
var inst_77612 = (state_77618[(2)]);
var inst_77613 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_77612);
var inst_77614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77613,"cToken");
var inst_77615 = (function (){var resp = inst_77613;
var ctoken_resps = inst_77614;
return (function (p1__77594_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__77594_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_77616 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77615,inst_77614);
var state_77618__$1 = state_77618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77618__$1,inst_77616);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____0 = (function (){
var statearr_77625 = [null,null,null,null,null,null,null,null];
(statearr_77625[(0)] = lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__);

(statearr_77625[(1)] = (1));

return statearr_77625;
});
var lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____1 = (function (state_77618){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77618);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77626){var ex__38753__auto__ = e77626;
var statearr_77627_78821 = state_77618;
(statearr_77627_78821[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77618[(4)]))){
var statearr_77628_78823 = state_77618;
(statearr_77628_78823[(1)] = cljs.core.first((state_77618[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78825 = state_77618;
state_77618 = G__78825;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__ = function(state_77618){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____1.call(this,state_77618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_ctoken_state_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77629 = f__38842__auto__();
(statearr_77629[(6)] = c__38841__auto__);

return statearr_77629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_ctoken_state_range = (function lpdashboard$ethereum$_LT_ctoken_state_range(address,start_block,end_block){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77630_SHARP_){
return lpdashboard.ethereum._LT_ctoken_state(address,p1__77630_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,(1)))));
});
lpdashboard.ethereum.block__GT_dai_price = (function lpdashboard$ethereum$block__GT_dai_price(dai_prices,block_num){
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77631_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77631_SHARP_,"block_number"),block_num);
}),dai_prices));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,"price-usd");
});
lpdashboard.ethereum.account_state = (function lpdashboard$ethereum$account_state(var_args){
var args__4742__auto__ = [];
var len__4736__auto___78830 = arguments.length;
var i__4737__auto___78831 = (0);
while(true){
if((i__4737__auto___78831 < len__4736__auto___78830)){
args__4742__auto__.push((arguments[i__4737__auto___78831]));

var G__78833 = (i__4737__auto___78831 + (1));
i__4737__auto___78831 = G__78833;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return lpdashboard.ethereum.account_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(lpdashboard.ethereum.account_state.cljs$core$IFn$_invoke$arity$variadic = (function (address,p__77636){
var map__77637 = p__77636;
var map__77637__$1 = (((((!((map__77637 == null))))?(((((map__77637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77637):map__77637);
var block_number = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77637__$1,new cljs.core.Keyword(null,"block-number","block-number",-935510961),(0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([address,block_number], 0));

var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77659){
var state_val_77660 = (state_77659[(1)]);
if((state_val_77660 === (1))){
var inst_77639 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_77640 = [address,block_number];
var inst_77641 = cljs.core.PersistentHashMap.fromArrays(inst_77639,inst_77640);
var inst_77642 = cljs.core.clj__GT_js(inst_77641);
var inst_77643 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_77642);
var inst_77644 = cljs.core.async.interop.p__GT_c(inst_77643);
var state_77659__$1 = state_77659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77659__$1,(2),inst_77644);
} else {
if((state_val_77660 === (2))){
var inst_77646 = (state_77659[(7)]);
var inst_77646__$1 = (state_77659[(2)]);
var inst_77647 = (inst_77646__$1 instanceof cljs.core.ExceptionInfo);
var inst_77648 = cljs.core.ex_data(inst_77646__$1);
var inst_77649 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77648);
var inst_77650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77649,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77651 = ((inst_77647) && (inst_77650));
var state_77659__$1 = (function (){var statearr_77661 = state_77659;
(statearr_77661[(7)] = inst_77646__$1);

return statearr_77661;
})();
if(cljs.core.truth_(inst_77651)){
var statearr_77662_78843 = state_77659__$1;
(statearr_77662_78843[(1)] = (3));

} else {
var statearr_77663_78844 = state_77659__$1;
(statearr_77663_78844[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77660 === (3))){
var inst_77646 = (state_77659[(7)]);
var inst_77653 = (function(){throw inst_77646})();
var state_77659__$1 = state_77659;
var statearr_77664_78846 = state_77659__$1;
(statearr_77664_78846[(2)] = inst_77653);

(statearr_77664_78846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77660 === (4))){
var inst_77646 = (state_77659[(7)]);
var state_77659__$1 = state_77659;
var statearr_77665_78848 = state_77659__$1;
(statearr_77665_78848[(2)] = inst_77646);

(statearr_77665_78848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77660 === (5))){
var inst_77656 = (state_77659[(2)]);
var inst_77657 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_77656);
var state_77659__$1 = state_77659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77659__$1,inst_77657);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_77666 = [null,null,null,null,null,null,null,null];
(statearr_77666[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_77666[(1)] = (1));

return statearr_77666;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_77659){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77659);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77667){var ex__38753__auto__ = e77667;
var statearr_77668_78853 = state_77659;
(statearr_77668_78853[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77659[(4)]))){
var statearr_77669_78854 = state_77659;
(statearr_77669_78854[(1)] = cljs.core.first((state_77659[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78855 = state_77659;
state_77659 = G__78855;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_77659){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_77659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77670 = f__38842__auto__();
(statearr_77670[(6)] = c__38841__auto__);

return statearr_77670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}));

(lpdashboard.ethereum.account_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lpdashboard.ethereum.account_state.cljs$lang$applyTo = (function (seq77634){
var G__77635 = cljs.core.first(seq77634);
var seq77634__$1 = cljs.core.next(seq77634);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77635,seq77634__$1);
}));

var c__38841__auto___78860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77676){
var state_val_77677 = (state_77676[(1)]);
if((state_val_77677 === (1))){
var inst_77671 = lpdashboard.ethereum.account_state(lpdashboard.ethereum.lw_address);
var state_77676__$1 = state_77676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77676__$1,(2),inst_77671);
} else {
if((state_val_77677 === (2))){
var inst_77673 = (state_77676[(2)]);
var inst_77674 = lpdashboard.ethereum.current_lw_state = inst_77673;
var state_77676__$1 = state_77676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77676__$1,inst_77674);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_77678 = [null,null,null,null,null,null,null];
(statearr_77678[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_77678[(1)] = (1));

return statearr_77678;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_77676){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77676);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77679){var ex__38753__auto__ = e77679;
var statearr_77680_78867 = state_77676;
(statearr_77680_78867[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77676[(4)]))){
var statearr_77681_78868 = state_77676;
(statearr_77681_78868[(1)] = cljs.core.first((state_77676[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78870 = state_77676;
state_77676 = G__78870;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_77676){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_77676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77682 = f__38842__auto__();
(statearr_77682[(6)] = c__38841__auto___78860);

return statearr_77682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

var c__38841__auto___78874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77688){
var state_val_77689 = (state_77688[(1)]);
if((state_val_77689 === (1))){
var inst_77683 = lpdashboard.ethereum.account_state.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.ethereum.lw_address,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block-number","block-number",-935510961),(11333036)], 0));
var state_77688__$1 = state_77688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77688__$1,(2),inst_77683);
} else {
if((state_val_77689 === (2))){
var inst_77685 = (state_77688[(2)]);
var inst_77686 = lpdashboard.ethereum.pre_event_lw_state = inst_77685;
var state_77688__$1 = state_77688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77688__$1,inst_77686);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_77690 = [null,null,null,null,null,null,null];
(statearr_77690[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_77690[(1)] = (1));

return statearr_77690;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_77688){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77688);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77691){var ex__38753__auto__ = e77691;
var statearr_77692_78878 = state_77688;
(statearr_77692_78878[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77688[(4)]))){
var statearr_77693_78879 = state_77688;
(statearr_77693_78879[(1)] = cljs.core.first((state_77688[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78881 = state_77688;
state_77688 = G__78881;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_77688){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_77688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77694 = f__38842__auto__();
(statearr_77694[(6)] = c__38841__auto___78874);

return statearr_77694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

var c__38841__auto___78883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77700){
var state_val_77701 = (state_77700[(1)]);
if((state_val_77701 === (1))){
var inst_77695 = lpdashboard.ethereum.account_state.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.ethereum.lw_address,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block-number","block-number",-935510961),(11333037)], 0));
var state_77700__$1 = state_77700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77700__$1,(2),inst_77695);
} else {
if((state_val_77701 === (2))){
var inst_77697 = (state_77700[(2)]);
var inst_77698 = lpdashboard.ethereum.post_event_lw_state = inst_77697;
var state_77700__$1 = state_77700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77700__$1,inst_77698);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_77702 = [null,null,null,null,null,null,null];
(statearr_77702[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_77702[(1)] = (1));

return statearr_77702;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_77700){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77700);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77703){var ex__38753__auto__ = e77703;
var statearr_77704_78889 = state_77700;
(statearr_77704_78889[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77700[(4)]))){
var statearr_77705_78891 = state_77700;
(statearr_77705_78891[(1)] = cljs.core.first((state_77700[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78893 = state_77700;
state_77700 = G__78893;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_77700){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_77700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77706 = f__38842__auto__();
(statearr_77706[(6)] = c__38841__auto___78883);

return statearr_77706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

(((17875730) + (108514354)) - ((506640) + (93219856)));
lpdashboard.ethereum.lw2 = "0x926e78b8df67e129011750dd7b975f8e50d3d7ad";
var c__38841__auto___78896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77712){
var state_val_77713 = (state_77712[(1)]);
if((state_val_77713 === (1))){
var inst_77707 = lpdashboard.ethereum.account_state(lpdashboard.ethereum.lw2);
var state_77712__$1 = state_77712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77712__$1,(2),inst_77707);
} else {
if((state_val_77713 === (2))){
var inst_77709 = (state_77712[(2)]);
var inst_77710 = lpdashboard.ethereum.current_account2_state = inst_77709;
var state_77712__$1 = state_77712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77712__$1,inst_77710);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_77714 = [null,null,null,null,null,null,null];
(statearr_77714[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_77714[(1)] = (1));

return statearr_77714;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_77712){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77712);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77715){var ex__38753__auto__ = e77715;
var statearr_77716_78901 = state_77712;
(statearr_77716_78901[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77712[(4)]))){
var statearr_77717_78902 = state_77712;
(statearr_77717_78902[(1)] = cljs.core.first((state_77712[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78904 = state_77712;
state_77712 = G__78904;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_77712){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_77712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77718 = f__38842__auto__();
(statearr_77718[(6)] = c__38841__auto___78896);

return statearr_77718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

lpdashboard.ethereum.dai_debt = (function lpdashboard$ethereum$dai_debt(account_res){
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(account_res,"tokens");
var symbols = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77719_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77719_SHARP_,"symbol");
}),tokens));
var cdai_entry = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77720_SHARP_,"symbol"),"cDAI");
}),tokens));
var cdai_borrow = (cljs.core.truth_(cdai_entry)?lpdashboard.utils.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cdai_entry,"borrow_balance_underlying"),"value")):lpdashboard.utils.bn("0"));
return cdai_borrow;
});
lpdashboard.ethereum.nondai_collateral_QMARK_ = (function lpdashboard$ethereum$nondai_collateral_QMARK_(account_res){
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(account_res,"tokens");
var nondai_collateral = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77721_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77721_SHARP_,"symbol"),"cDAI")){
return bignumber.core._GT_(lpdashboard.utils.bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77721_SHARP_,"supply_balance_underlying"),"value")),lpdashboard.utils.bn("0"));
} else {
return false;
}
}),tokens);
return (cljs.core.count(nondai_collateral) > (0));
});
lpdashboard.ethereum.tracked_accounts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x554bd2947df1c8d8d38897bdc92b3b97692b2845"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0xccb06b8026cb33ee501476af87d5ccaf56883112"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x7e6f6621388047c8a481d963210b514dbd5ea1b9"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x909b443761bbd7fbb876ecde71a37e1433f6af6f"], null)], null);
lpdashboard.ethereum.acc_health = (function lpdashboard$ethereum$acc_health(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"health"),"value"));
});
lpdashboard.ethereum.acc_address = (function lpdashboard$ethereum$acc_address(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"address");
});
lpdashboard.ethereum.total_borrow_eth = (function lpdashboard$ethereum$total_borrow_eth(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_borrow_value_in_eth"),"value"));
});
lpdashboard.ethereum.total_collateral_eth = (function lpdashboard$ethereum$total_collateral_eth(a){
return parseFloat(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"total_collateral_value_in_eth"),"value"));
});
lpdashboard.ethereum.block_number = (function lpdashboard$ethereum$block_number(a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,"block-number");
});
lpdashboard.ethereum.token_borrow_underlying = (function lpdashboard$ethereum$token_borrow_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__77726_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"borrow_balance_underlying","borrow_balance_underlying",1052683239).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return 0.0;
}
});
lpdashboard.ethereum.token_supply_underlying = (function lpdashboard$ethereum$token_supply_underlying(a,token){
var token_state = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__77727_SHARP_),token);
}),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(a)));
if(cljs.core.truth_(token_state)){
return parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"supply_balance_underlying","supply_balance_underlying",1572069900).cljs$core$IFn$_invoke$arity$1(token_state)));
} else {
return 0.0;
}
});
lpdashboard.ethereum.acc_state = (function lpdashboard$ethereum$acc_state(a){
var a_SINGLEQUOTE_ = clojure.walk.keywordize_keys(a);
var dai_borrowed = lpdashboard.ethereum.token_borrow_underlying(a_SINGLEQUOTE_,"cDAI");
var dai_supplied = lpdashboard.ethereum.token_supply_underlying(a_SINGLEQUOTE_,"cDAI");
var usdc_borrowed = lpdashboard.ethereum.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdc_supplied = lpdashboard.ethereum.token_supply_underlying(a_SINGLEQUOTE_,"cUSDC");
var usdt_borrowed = lpdashboard.ethereum.token_borrow_underlying(a_SINGLEQUOTE_,"cUSDT");
var usdt_supplied = lpdashboard.ethereum.token_supply_underlying(a_SINGLEQUOTE_,"cUSDT");
var usd_value_borrowed = ((dai_borrowed + usdc_borrowed) + usdt_borrowed);
var usd_value_supplied = ((dai_supplied + usdc_supplied) + usdt_supplied);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"usdt-supplied","usdt-supplied",-1381666491),new cljs.core.Keyword(null,"usdc-supplied","usdc-supplied",1402295336),new cljs.core.Keyword(null,"total-collateral-eth","total-collateral-eth",1350714568),new cljs.core.Keyword(null,"total-borrow-eth","total-borrow-eth",572401609),new cljs.core.Keyword(null,"usdt-borrowed","usdt-borrowed",959076076),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"usd-value-supplied","usd-value-supplied",-1319614801),new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"dai-supplied","dai-supplied",-847457520),new cljs.core.Keyword(null,"usdc-borrowed","usdc-borrowed",625226641),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"usd-value-borrowed","usd-value-borrowed",512517208),new cljs.core.Keyword(null,"dai-borrowed","dai-borrowed",-587333862),new cljs.core.Keyword(null,"health-computed","health-computed",848235134)],[usdt_supplied,usdc_supplied,lpdashboard.ethereum.total_collateral_eth(a),lpdashboard.ethereum.total_borrow_eth(a),usdt_borrowed,lpdashboard.ethereum.block_number(a),usd_value_supplied,lpdashboard.ethereum.acc_address(a),dai_supplied,usdc_borrowed,lpdashboard.ethereum.acc_health(a),usd_value_borrowed,dai_borrowed,(lpdashboard.ethereum.total_collateral_eth(a) / lpdashboard.ethereum.total_borrow_eth(a))]);
});
lpdashboard.ethereum._LT_account_states = (function lpdashboard$ethereum$_LT_account_states(accounts,block_number){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77753){
var state_val_77754 = (state_77753[(1)]);
if((state_val_77754 === (1))){
var inst_77729 = [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"block_number","block_number",-248050481)];
var inst_77730 = [accounts,block_number];
var inst_77731 = cljs.core.PersistentHashMap.fromArrays(inst_77729,inst_77730);
var inst_77732 = cljs.core.clj__GT_js(inst_77731);
var inst_77733 = module$node_modules$$compound_finance$compound_js$dist$nodejs$index.api.account(inst_77732);
var inst_77734 = cljs.core.async.interop.p__GT_c(inst_77733);
var state_77753__$1 = state_77753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77753__$1,(2),inst_77734);
} else {
if((state_val_77754 === (2))){
var inst_77736 = (state_77753[(7)]);
var inst_77736__$1 = (state_77753[(2)]);
var inst_77737 = (inst_77736__$1 instanceof cljs.core.ExceptionInfo);
var inst_77738 = cljs.core.ex_data(inst_77736__$1);
var inst_77739 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77738);
var inst_77740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77739,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77741 = ((inst_77737) && (inst_77740));
var state_77753__$1 = (function (){var statearr_77755 = state_77753;
(statearr_77755[(7)] = inst_77736__$1);

return statearr_77755;
})();
if(cljs.core.truth_(inst_77741)){
var statearr_77756_78929 = state_77753__$1;
(statearr_77756_78929[(1)] = (3));

} else {
var statearr_77757_78930 = state_77753__$1;
(statearr_77757_78930[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77754 === (3))){
var inst_77736 = (state_77753[(7)]);
var inst_77743 = (function(){throw inst_77736})();
var state_77753__$1 = state_77753;
var statearr_77758_78932 = state_77753__$1;
(statearr_77758_78932[(2)] = inst_77743);

(statearr_77758_78932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77754 === (4))){
var inst_77736 = (state_77753[(7)]);
var state_77753__$1 = state_77753;
var statearr_77759_78933 = state_77753__$1;
(statearr_77759_78933[(2)] = inst_77736);

(statearr_77759_78933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77754 === (5))){
var inst_77746 = (state_77753[(2)]);
var inst_77747 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_77746);
var inst_77748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77747,"accounts");
var inst_77749 = (function (){var resp = inst_77747;
var account_resps = inst_77748;
return (function (p1__77728_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__77728_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["block-number",block_number], null));
});
})();
var inst_77750 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77749,inst_77748);
var inst_77751 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.acc_state,inst_77750);
var state_77753__$1 = state_77753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77753__$1,inst_77751);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____0 = (function (){
var statearr_77760 = [null,null,null,null,null,null,null,null];
(statearr_77760[(0)] = lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__);

(statearr_77760[(1)] = (1));

return statearr_77760;
});
var lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____1 = (function (state_77753){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77753);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77761){var ex__38753__auto__ = e77761;
var statearr_77762_78970 = state_77753;
(statearr_77762_78970[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77753[(4)]))){
var statearr_77763_78973 = state_77753;
(statearr_77763_78973[(1)] = cljs.core.first((state_77753[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78974 = state_77753;
state_77753 = G__78974;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__ = function(state_77753){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____1.call(this,state_77753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_account_states_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77764 = f__38842__auto__();
(statearr_77764[(6)] = c__38841__auto__);

return statearr_77764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_account_state_range = (function lpdashboard$ethereum$_LT_account_state_range(accounts,start_block,end_block,block_step){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([accounts], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["num-requests",cljs.core.count(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,block_step))], 0));

return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77765_SHARP_){
return lpdashboard.ethereum._LT_account_states(accounts,p1__77765_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3(start_block,end_block,block_step))));
});
lpdashboard.ethereum.current_block = (11415254);
lpdashboard.ethereum.pre_event_block = (11333036);
lpdashboard.ethereum.block_step = (10000);
lpdashboard.ethereum.account_activity_block = ((10250758) - lpdashboard.ethereum.block_step);
lpdashboard.ethereum.account_finish_chart = (lpdashboard.ethereum.pre_event_block + lpdashboard.ethereum.block_step);
lpdashboard.ethereum.comp_unitroller = "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B";
lpdashboard.ethereum.accum_comp_rewards = (function lpdashboard$ethereum$accum_comp_rewards(rewards_txs,data_points){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(rewards_txs))){
return data_points;
} else {
var current_tx = cljs.core.first(rewards_txs);
var prev_dp = cljs.core.last(data_points);
var prev_claimed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(data_points)))?(0):new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479).cljs$core$IFn$_invoke$arity$1(prev_dp));
var current_claim = parseFloat(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(current_tx));
var current_dp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comp-claimed","comp-claimed",-1341868479),(prev_claimed + current_claim),new cljs.core.Keyword(null,"side","side",389652279),"Claimed Rewards",new cljs.core.Keyword(null,"comp-claim","comp-claim",-2135079250),current_claim,new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(current_tx)], null);
var G__78980 = cljs.core.rest(rewards_txs);
var G__78981 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_dp], null));
rewards_txs = G__78980;
data_points = G__78981;
continue;
}
break;
}
});
lpdashboard.ethereum.ts__GT_price = (function lpdashboard$ethereum$ts__GT_price(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77769_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__77769_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77770_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__77770_SHARP_) > ts);
}),day_prices_SINGLEQUOTE_));
if(cljs.core.truth_((function (){var and__4115__auto__ = prev_day;
if(cljs.core.truth_(and__4115__auto__)){
return next_day;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(prev_day);
} else {
return null;
}
});
lpdashboard.ethereum.blocknum__GT_price = (function lpdashboard$ethereum$blocknum__GT_price(day_prices,blocks,block_num){
var ts = lpdashboard.ethereum.block_num__GT_ts(blocks,block_num);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ts], 0));
var price = lpdashboard.ethereum.ts__GT_price(day_prices,ts);
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([price], 0));
return parseFloat(price);
});
lpdashboard.ethereum.ctoken_underlying_prices = new cljs.core.PersistentArrayMap(null, 6, ["cDAI",(1),"cUSDT",(1),"cUSDC",(1),"cBAT",0.208242,"cETH",559.39,"cZRX",0.3705], null);
lpdashboard.ethereum.interest_diff = (function lpdashboard$ethereum$interest_diff(token_state){
var token = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token_state);
var paid = lpdashboard.utils.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lifetime_borrow_interest_accrued","lifetime_borrow_interest_accrued",-617305137).cljs$core$IFn$_invoke$arity$1(token_state)));
var received = lpdashboard.utils.bn(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lifetime_supply_interest_accrued","lifetime_supply_interest_accrued",-1310209471).cljs$core$IFn$_invoke$arity$1(token_state)));
var diff = bignumber.core._(received,paid);
var diff_usd = (diff * cljs.core.get.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.ctoken_underlying_prices,token));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token,diff_usd]);
});
lpdashboard.ethereum.interest_values = (function lpdashboard$ethereum$interest_values(account_state){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(account_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.interest_diff,tokens));
});
lpdashboard.ethereum.claimed_block_diffs = (function lpdashboard$ethereum$claimed_block_diffs(var_args){
var G__77772 = arguments.length;
switch (G__77772) {
case 1:
return lpdashboard.ethereum.claimed_block_diffs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lpdashboard.ethereum.claimed_block_diffs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lpdashboard.ethereum.claimed_block_diffs.cljs$core$IFn$_invoke$arity$1 = (function (block_nums){
return lpdashboard.ethereum.claimed_block_diffs.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(block_nums),cljs.core.first(block_nums),cljs.core.PersistentVector.EMPTY);
}));

(lpdashboard.ethereum.claimed_block_diffs.cljs$core$IFn$_invoke$arity$3 = (function (block_nums,prev_block,diffs){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_nums),(0))){
return diffs;
} else {
var current_block = cljs.core.first(block_nums);
var current_diff = (current_block - prev_block);
var G__78992 = cljs.core.rest(block_nums);
var G__78993 = current_block;
var G__78994 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(diffs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_diff], null));
block_nums = G__78992;
prev_block = G__78993;
diffs = G__78994;
continue;
}
break;
}
}));

(lpdashboard.ethereum.claimed_block_diffs.cljs$lang$maxFixedArity = 3);

lpdashboard.ethereum._LT_gov_account = (function lpdashboard$ethereum$_LT_gov_account(account){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77787){
var state_val_77788 = (state_77787[(1)]);
if((state_val_77788 === (1))){
var inst_77777 = ["https://api.compound.finance/api/v2/governance/comp/account","?address="].join('');
var inst_77778 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_77777),cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join('');
var inst_77779 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_77780 = [false];
var inst_77781 = cljs.core.PersistentHashMap.fromArrays(inst_77779,inst_77780);
var inst_77782 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_77778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77781], 0));
var state_77787__$1 = state_77787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77787__$1,(2),inst_77782);
} else {
if((state_val_77788 === (2))){
var inst_77784 = (state_77787[(2)]);
var inst_77785 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77784);
var state_77787__$1 = state_77787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77787__$1,inst_77785);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____0 = (function (){
var statearr_77789 = [null,null,null,null,null,null,null];
(statearr_77789[(0)] = lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__);

(statearr_77789[(1)] = (1));

return statearr_77789;
});
var lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____1 = (function (state_77787){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77787);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77790){var ex__38753__auto__ = e77790;
var statearr_77791_79019 = state_77787;
(statearr_77791_79019[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77787[(4)]))){
var statearr_77792_79022 = state_77787;
(statearr_77792_79022[(1)] = cljs.core.first((state_77787[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79023 = state_77787;
state_77787 = G__79023;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__ = function(state_77787){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____1.call(this,state_77787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_gov_account_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77793 = f__38842__auto__();
(statearr_77793[(6)] = c__38841__auto__);

return statearr_77793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
lpdashboard.ethereum.lw_exchange_accounts = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["0xd578653Be7CC96d254CeBC45151Fa8f193d6263B",null,"0x0f71DCff39Ab3A817d02b6b3b808FFA21d3f67c1",null,"0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f",null], null), null);
lpdashboard.ethereum.lw_address2 = "0x0f71DCff39Ab3A817d02b6b3b808FFA21d3f67c1";
lpdashboard.ethereum._LT_erc20_info = (function lpdashboard$ethereum$_LT_erc20_info(address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77844){
var state_val_77845 = (state_77844[(1)]);
if((state_val_77845 === (7))){
var inst_77815 = (state_77844[(7)]);
var inst_77822 = (function(){throw inst_77815})();
var state_77844__$1 = state_77844;
var statearr_77846_79026 = state_77844__$1;
(statearr_77846_79026[(2)] = inst_77822);

(statearr_77846_79026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (1))){
var inst_77797 = (state_77844[(8)]);
var inst_77797__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,address);
var inst_77798 = inst_77797__$1.decimals();
var inst_77799 = cljs.core.async.interop.p__GT_c(inst_77798);
var state_77844__$1 = (function (){var statearr_77847 = state_77844;
(statearr_77847[(8)] = inst_77797__$1);

return statearr_77847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77844__$1,(2),inst_77799);
} else {
if((state_val_77845 === (4))){
var inst_77801 = (state_77844[(9)]);
var state_77844__$1 = state_77844;
var statearr_77848_79030 = state_77844__$1;
(statearr_77848_79030[(2)] = inst_77801);

(statearr_77848_79030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (13))){
var inst_77811 = (state_77844[(10)]);
var inst_77825 = (state_77844[(11)]);
var inst_77839 = (state_77844[(2)]);
var inst_77840 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_77841 = [address,inst_77825,inst_77839,inst_77811];
var inst_77842 = cljs.core.PersistentHashMap.fromArrays(inst_77840,inst_77841);
var state_77844__$1 = state_77844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77844__$1,inst_77842);
} else {
if((state_val_77845 === (6))){
var inst_77815 = (state_77844[(7)]);
var inst_77815__$1 = (state_77844[(2)]);
var inst_77816 = (inst_77815__$1 instanceof cljs.core.ExceptionInfo);
var inst_77817 = cljs.core.ex_data(inst_77815__$1);
var inst_77818 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77817);
var inst_77819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77818,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77820 = ((inst_77816) && (inst_77819));
var state_77844__$1 = (function (){var statearr_77849 = state_77844;
(statearr_77849[(7)] = inst_77815__$1);

return statearr_77849;
})();
if(cljs.core.truth_(inst_77820)){
var statearr_77850_79034 = state_77844__$1;
(statearr_77850_79034[(1)] = (7));

} else {
var statearr_77851_79035 = state_77844__$1;
(statearr_77851_79035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (3))){
var inst_77801 = (state_77844[(9)]);
var inst_77808 = (function(){throw inst_77801})();
var state_77844__$1 = state_77844;
var statearr_77852_79038 = state_77844__$1;
(statearr_77852_79038[(2)] = inst_77808);

(statearr_77852_79038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (12))){
var inst_77829 = (state_77844[(12)]);
var state_77844__$1 = state_77844;
var statearr_77853_79040 = state_77844__$1;
(statearr_77853_79040[(2)] = inst_77829);

(statearr_77853_79040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (2))){
var inst_77801 = (state_77844[(9)]);
var inst_77801__$1 = (state_77844[(2)]);
var inst_77802 = (inst_77801__$1 instanceof cljs.core.ExceptionInfo);
var inst_77803 = cljs.core.ex_data(inst_77801__$1);
var inst_77804 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77803);
var inst_77805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77804,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77806 = ((inst_77802) && (inst_77805));
var state_77844__$1 = (function (){var statearr_77854 = state_77844;
(statearr_77854[(9)] = inst_77801__$1);

return statearr_77854;
})();
if(cljs.core.truth_(inst_77806)){
var statearr_77855_79042 = state_77844__$1;
(statearr_77855_79042[(1)] = (3));

} else {
var statearr_77856_79043 = state_77844__$1;
(statearr_77856_79043[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (11))){
var inst_77829 = (state_77844[(12)]);
var inst_77836 = (function(){throw inst_77829})();
var state_77844__$1 = state_77844;
var statearr_77857_79044 = state_77844__$1;
(statearr_77857_79044[(2)] = inst_77836);

(statearr_77857_79044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (9))){
var inst_77797 = (state_77844[(8)]);
var inst_77825 = (state_77844[(2)]);
var inst_77826 = inst_77797.symbol();
var inst_77827 = cljs.core.async.interop.p__GT_c(inst_77826);
var state_77844__$1 = (function (){var statearr_77858 = state_77844;
(statearr_77858[(11)] = inst_77825);

return statearr_77858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77844__$1,(10),inst_77827);
} else {
if((state_val_77845 === (5))){
var inst_77797 = (state_77844[(8)]);
var inst_77811 = (state_77844[(2)]);
var inst_77812 = inst_77797.name();
var inst_77813 = cljs.core.async.interop.p__GT_c(inst_77812);
var state_77844__$1 = (function (){var statearr_77859 = state_77844;
(statearr_77859[(10)] = inst_77811);

return statearr_77859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77844__$1,(6),inst_77813);
} else {
if((state_val_77845 === (10))){
var inst_77829 = (state_77844[(12)]);
var inst_77829__$1 = (state_77844[(2)]);
var inst_77830 = (inst_77829__$1 instanceof cljs.core.ExceptionInfo);
var inst_77831 = cljs.core.ex_data(inst_77829__$1);
var inst_77832 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77831);
var inst_77833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77832,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77834 = ((inst_77830) && (inst_77833));
var state_77844__$1 = (function (){var statearr_77860 = state_77844;
(statearr_77860[(12)] = inst_77829__$1);

return statearr_77860;
})();
if(cljs.core.truth_(inst_77834)){
var statearr_77861_79078 = state_77844__$1;
(statearr_77861_79078[(1)] = (11));

} else {
var statearr_77862_79079 = state_77844__$1;
(statearr_77862_79079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77845 === (8))){
var inst_77815 = (state_77844[(7)]);
var state_77844__$1 = state_77844;
var statearr_77863_79080 = state_77844__$1;
(statearr_77863_79080[(2)] = inst_77815);

(statearr_77863_79080[(1)] = (9));


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
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____0 = (function (){
var statearr_77864 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77864[(0)] = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__);

(statearr_77864[(1)] = (1));

return statearr_77864;
});
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____1 = (function (state_77844){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77844);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77865){var ex__38753__auto__ = e77865;
var statearr_77866_79083 = state_77844;
(statearr_77866_79083[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77844[(4)]))){
var statearr_77867_79084 = state_77844;
(statearr_77867_79084[(1)] = cljs.core.first((state_77844[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79086 = state_77844;
state_77844 = G__79086;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__ = function(state_77844){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____1.call(this,state_77844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77868 = f__38842__auto__();
(statearr_77868[(6)] = c__38841__auto__);

return statearr_77868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_token_decimals = (function lpdashboard$ethereum$_LT_token_decimals(address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77895){
var state_val_77896 = (state_77895[(1)]);
if((state_val_77896 === (7))){
var inst_77880 = (state_77895[(7)]);
var inst_77887 = (function(){throw inst_77880})();
var state_77895__$1 = state_77895;
var statearr_77897_79090 = state_77895__$1;
(statearr_77897_79090[(2)] = inst_77887);

(statearr_77897_79090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (1))){
var inst_77869 = lpdashboard.ethereum.make_erc20(address);
var state_77895__$1 = (function (){var statearr_77898 = state_77895;
(statearr_77898[(8)] = inst_77869);

return statearr_77898;
})();
var statearr_77899_79092 = state_77895__$1;
(statearr_77899_79092[(2)] = null);

(statearr_77899_79092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (4))){
var inst_77870 = (state_77895[(2)]);
var inst_77871 = console.log("No decimals method for:",address);
var state_77895__$1 = (function (){var statearr_77900 = state_77895;
(statearr_77900[(9)] = inst_77871);

(statearr_77900[(10)] = inst_77870);

return statearr_77900;
})();
var statearr_77901_79096 = state_77895__$1;
(statearr_77901_79096[(2)] = (18));

(statearr_77901_79096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (6))){
var inst_77880 = (state_77895[(7)]);
var inst_77880__$1 = (state_77895[(2)]);
var inst_77881 = (inst_77880__$1 instanceof cljs.core.ExceptionInfo);
var inst_77882 = cljs.core.ex_data(inst_77880__$1);
var inst_77883 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77882);
var inst_77884 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77883,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77885 = ((inst_77881) && (inst_77884));
var state_77895__$1 = (function (){var statearr_77902 = state_77895;
(statearr_77902[(7)] = inst_77880__$1);

return statearr_77902;
})();
if(cljs.core.truth_(inst_77885)){
var statearr_77903_79099 = state_77895__$1;
(statearr_77903_79099[(1)] = (7));

} else {
var statearr_77904_79100 = state_77895__$1;
(statearr_77904_79100[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (3))){
var inst_77893 = (state_77895[(2)]);
var state_77895__$1 = state_77895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77895__$1,inst_77893);
} else {
if((state_val_77896 === (2))){
var inst_77869 = (state_77895[(8)]);
var _ = (function (){var statearr_77906 = state_77895;
(statearr_77906[(4)] = cljs.core.cons((5),(state_77895[(4)])));

return statearr_77906;
})();
var inst_77877 = inst_77869.decimals();
var inst_77878 = cljs.core.async.interop.p__GT_c(inst_77877);
var state_77895__$1 = state_77895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77895__$1,(6),inst_77878);
} else {
if((state_val_77896 === (9))){
var inst_77890 = (state_77895[(2)]);
var _ = (function (){var statearr_77907 = state_77895;
(statearr_77907[(4)] = cljs.core.rest((state_77895[(4)])));

return statearr_77907;
})();
var state_77895__$1 = state_77895;
var statearr_77908_79105 = state_77895__$1;
(statearr_77908_79105[(2)] = inst_77890);

(statearr_77908_79105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (5))){
var _ = (function (){var statearr_77909 = state_77895;
(statearr_77909[(4)] = cljs.core.rest((state_77895[(4)])));

return statearr_77909;
})();
var state_77895__$1 = state_77895;
var ex77905 = (state_77895__$1[(2)]);
var statearr_77910_79107 = state_77895__$1;
(statearr_77910_79107[(5)] = ex77905);


if((ex77905 instanceof Error)){
var statearr_77911_79108 = state_77895__$1;
(statearr_77911_79108[(1)] = (4));

(statearr_77911_79108[(5)] = null);

} else {
throw ex77905;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77896 === (8))){
var inst_77880 = (state_77895[(7)]);
var state_77895__$1 = state_77895;
var statearr_77912_79109 = state_77895__$1;
(statearr_77912_79109[(2)] = inst_77880);

(statearr_77912_79109[(1)] = (9));


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
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____0 = (function (){
var statearr_77913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77913[(0)] = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__);

(statearr_77913[(1)] = (1));

return statearr_77913;
});
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____1 = (function (state_77895){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77895);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77914){var ex__38753__auto__ = e77914;
var statearr_77915_79123 = state_77895;
(statearr_77915_79123[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77895[(4)]))){
var statearr_77916_79132 = state_77895;
(statearr_77916_79132[(1)] = cljs.core.first((state_77895[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79134 = state_77895;
state_77895 = G__79134;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__ = function(state_77895){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____1.call(this,state_77895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77917 = f__38842__auto__();
(statearr_77917[(6)] = c__38841__auto__);

return statearr_77917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.decode_event_data = (function lpdashboard$ethereum$decode_event_data(event){
try{var event_obj = lpdashboard.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e77918){if((e77918 instanceof Error)){
var err = e77918;
return null;
} else {
throw e77918;

}
}});
lpdashboard.ethereum.decode_burn_data = (function lpdashboard$ethereum$decode_burn_data(event,token1_decimals,token2_decimals){
try{var event_obj = lpdashboard.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
var to_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(3));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e77919){if((e77919 instanceof Error)){
var err = e77919;
return null;
} else {
throw e77919;

}
}});
lpdashboard.ethereum.decode_mint_data = (function lpdashboard$ethereum$decode_mint_data(event,token1_decimals,token2_decimals){
try{var event_obj = lpdashboard.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e77920){if((e77920 instanceof Error)){
var err = e77920;
return null;
} else {
throw e77920;

}
}});
lpdashboard.ethereum.decode_transfer_data = (function lpdashboard$ethereum$decode_transfer_data(event,token_decimals){
try{var event_obj = lpdashboard.ethereum.erc20_iface.parseLog(event);
var token_address = event.address;
var args = event_obj.args;
var from_address = cljs.core.first(args);
var to_address = cljs.core.second(args);
var amount = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"token-address","token-address",872304132),token_address,new cljs.core.Keyword(null,"amount","amount",364489504),amount], null);
}catch (e77921){if((e77921 instanceof Error)){
var err = e77921;
return null;
} else {
throw e77921;

}
}});
lpdashboard.ethereum._LT_resolve_address = (function lpdashboard$ethereum$_LT_resolve_address(address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77937){
var state_val_77938 = (state_77937[(1)]);
if((state_val_77938 === (1))){
var inst_77922 = lpdashboard.ethereum.provider.resolveName(address);
var inst_77923 = cljs.core.async.interop.p__GT_c(inst_77922);
var state_77937__$1 = state_77937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77937__$1,(2),inst_77923);
} else {
if((state_val_77938 === (2))){
var inst_77925 = (state_77937[(7)]);
var inst_77925__$1 = (state_77937[(2)]);
var inst_77926 = (inst_77925__$1 instanceof cljs.core.ExceptionInfo);
var inst_77927 = cljs.core.ex_data(inst_77925__$1);
var inst_77928 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77927);
var inst_77929 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77928,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77930 = ((inst_77926) && (inst_77929));
var state_77937__$1 = (function (){var statearr_77939 = state_77937;
(statearr_77939[(7)] = inst_77925__$1);

return statearr_77939;
})();
if(cljs.core.truth_(inst_77930)){
var statearr_77940_79147 = state_77937__$1;
(statearr_77940_79147[(1)] = (3));

} else {
var statearr_77941_79148 = state_77937__$1;
(statearr_77941_79148[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77938 === (3))){
var inst_77925 = (state_77937[(7)]);
var inst_77932 = (function(){throw inst_77925})();
var state_77937__$1 = state_77937;
var statearr_77942_79149 = state_77937__$1;
(statearr_77942_79149[(2)] = inst_77932);

(statearr_77942_79149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77938 === (4))){
var inst_77925 = (state_77937[(7)]);
var state_77937__$1 = state_77937;
var statearr_77943_79150 = state_77937__$1;
(statearr_77943_79150[(2)] = inst_77925);

(statearr_77943_79150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77938 === (5))){
var inst_77935 = (state_77937[(2)]);
var state_77937__$1 = state_77937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77937__$1,inst_77935);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____0 = (function (){
var statearr_77944 = [null,null,null,null,null,null,null,null];
(statearr_77944[(0)] = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__);

(statearr_77944[(1)] = (1));

return statearr_77944;
});
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____1 = (function (state_77937){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77937);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77945){var ex__38753__auto__ = e77945;
var statearr_77946_79185 = state_77937;
(statearr_77946_79185[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77937[(4)]))){
var statearr_77947_79186 = state_77937;
(statearr_77947_79186[(1)] = cljs.core.first((state_77937[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79187 = state_77937;
state_77937 = G__79187;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__ = function(state_77937){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____1.call(this,state_77937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77948 = f__38842__auto__();
(statearr_77948[(6)] = c__38841__auto__);

return statearr_77948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_user_token_balance = (function lpdashboard$ethereum$_LT_user_token_balance(user_address,token_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_77981){
var state_val_77982 = (state_77981[(1)]);
if((state_val_77982 === (7))){
var inst_77968 = (state_77981[(7)]);
var inst_77975 = (function(){throw inst_77968})();
var state_77981__$1 = state_77981;
var statearr_77983_79190 = state_77981__$1;
(statearr_77983_79190[(2)] = inst_77975);

(statearr_77983_79190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77982 === (1))){
var inst_77949 = (state_77981[(8)]);
var inst_77949__$1 = lpdashboard.ethereum.make_erc20(token_address);
var inst_77950 = inst_77949__$1.decimals();
var inst_77951 = cljs.core.async.interop.p__GT_c(inst_77950);
var state_77981__$1 = (function (){var statearr_77984 = state_77981;
(statearr_77984[(8)] = inst_77949__$1);

return statearr_77984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77981__$1,(2),inst_77951);
} else {
if((state_val_77982 === (4))){
var inst_77953 = (state_77981[(9)]);
var state_77981__$1 = state_77981;
var statearr_77985_79193 = state_77981__$1;
(statearr_77985_79193[(2)] = inst_77953);

(statearr_77985_79193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77982 === (6))){
var inst_77968 = (state_77981[(7)]);
var inst_77968__$1 = (state_77981[(2)]);
var inst_77969 = (inst_77968__$1 instanceof cljs.core.ExceptionInfo);
var inst_77970 = cljs.core.ex_data(inst_77968__$1);
var inst_77971 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77970);
var inst_77972 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77971,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77973 = ((inst_77969) && (inst_77972));
var state_77981__$1 = (function (){var statearr_77986 = state_77981;
(statearr_77986[(7)] = inst_77968__$1);

return statearr_77986;
})();
if(cljs.core.truth_(inst_77973)){
var statearr_77987_79197 = state_77981__$1;
(statearr_77987_79197[(1)] = (7));

} else {
var statearr_77988_79198 = state_77981__$1;
(statearr_77988_79198[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77982 === (3))){
var inst_77953 = (state_77981[(9)]);
var inst_77960 = (function(){throw inst_77953})();
var state_77981__$1 = state_77981;
var statearr_77989_79199 = state_77981__$1;
(statearr_77989_79199[(2)] = inst_77960);

(statearr_77989_79199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77982 === (2))){
var inst_77953 = (state_77981[(9)]);
var inst_77953__$1 = (state_77981[(2)]);
var inst_77954 = (inst_77953__$1 instanceof cljs.core.ExceptionInfo);
var inst_77955 = cljs.core.ex_data(inst_77953__$1);
var inst_77956 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77955);
var inst_77957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77956,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77958 = ((inst_77954) && (inst_77957));
var state_77981__$1 = (function (){var statearr_77990 = state_77981;
(statearr_77990[(9)] = inst_77953__$1);

return statearr_77990;
})();
if(cljs.core.truth_(inst_77958)){
var statearr_77991_79203 = state_77981__$1;
(statearr_77991_79203[(1)] = (3));

} else {
var statearr_77992_79204 = state_77981__$1;
(statearr_77992_79204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77982 === (9))){
var inst_77963 = (state_77981[(10)]);
var inst_77978 = (state_77981[(2)]);
var inst_77979 = lpdashboard.utils.ebn__GT_bn(inst_77978,inst_77963);
var state_77981__$1 = state_77981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77981__$1,inst_77979);
} else {
if((state_val_77982 === (5))){
var inst_77949 = (state_77981[(8)]);
var inst_77963 = (state_77981[(2)]);
var inst_77964 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_address], 0));
var inst_77965 = inst_77949.balanceOf(user_address);
var inst_77966 = cljs.core.async.interop.p__GT_c(inst_77965);
var state_77981__$1 = (function (){var statearr_77993 = state_77981;
(statearr_77993[(10)] = inst_77963);

(statearr_77993[(11)] = inst_77964);

return statearr_77993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77981__$1,(6),inst_77966);
} else {
if((state_val_77982 === (8))){
var inst_77968 = (state_77981[(7)]);
var state_77981__$1 = state_77981;
var statearr_77994_79208 = state_77981__$1;
(statearr_77994_79208[(2)] = inst_77968);

(statearr_77994_79208[(1)] = (9));


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
var lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____0 = (function (){
var statearr_77995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77995[(0)] = lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__);

(statearr_77995[(1)] = (1));

return statearr_77995;
});
var lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____1 = (function (state_77981){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_77981);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e77996){var ex__38753__auto__ = e77996;
var statearr_77997_79212 = state_77981;
(statearr_77997_79212[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_77981[(4)]))){
var statearr_77998_79213 = state_77981;
(statearr_77998_79213[(1)] = cljs.core.first((state_77981[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79215 = state_77981;
state_77981 = G__79215;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__ = function(state_77981){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____1.call(this,state_77981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_token_balance_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_77999 = f__38842__auto__();
(statearr_77999[(6)] = c__38841__auto__);

return statearr_77999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_token_total_supply = (function lpdashboard$ethereum$_LT_token_total_supply(token_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78031){
var state_val_78032 = (state_78031[(1)]);
if((state_val_78032 === (7))){
var inst_78018 = (state_78031[(7)]);
var inst_78025 = (function(){throw inst_78018})();
var state_78031__$1 = state_78031;
var statearr_78033_79224 = state_78031__$1;
(statearr_78033_79224[(2)] = inst_78025);

(statearr_78033_79224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78032 === (1))){
var inst_78000 = (state_78031[(8)]);
var inst_78000__$1 = lpdashboard.ethereum.make_erc20(token_address);
var inst_78001 = inst_78000__$1.decimals();
var inst_78002 = cljs.core.async.interop.p__GT_c(inst_78001);
var state_78031__$1 = (function (){var statearr_78034 = state_78031;
(statearr_78034[(8)] = inst_78000__$1);

return statearr_78034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78031__$1,(2),inst_78002);
} else {
if((state_val_78032 === (4))){
var inst_78004 = (state_78031[(9)]);
var state_78031__$1 = state_78031;
var statearr_78035_79243 = state_78031__$1;
(statearr_78035_79243[(2)] = inst_78004);

(statearr_78035_79243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78032 === (6))){
var inst_78018 = (state_78031[(7)]);
var inst_78018__$1 = (state_78031[(2)]);
var inst_78019 = (inst_78018__$1 instanceof cljs.core.ExceptionInfo);
var inst_78020 = cljs.core.ex_data(inst_78018__$1);
var inst_78021 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78020);
var inst_78022 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78021,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78023 = ((inst_78019) && (inst_78022));
var state_78031__$1 = (function (){var statearr_78036 = state_78031;
(statearr_78036[(7)] = inst_78018__$1);

return statearr_78036;
})();
if(cljs.core.truth_(inst_78023)){
var statearr_78037_79259 = state_78031__$1;
(statearr_78037_79259[(1)] = (7));

} else {
var statearr_78038_79260 = state_78031__$1;
(statearr_78038_79260[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78032 === (3))){
var inst_78004 = (state_78031[(9)]);
var inst_78011 = (function(){throw inst_78004})();
var state_78031__$1 = state_78031;
var statearr_78039_79261 = state_78031__$1;
(statearr_78039_79261[(2)] = inst_78011);

(statearr_78039_79261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78032 === (2))){
var inst_78004 = (state_78031[(9)]);
var inst_78004__$1 = (state_78031[(2)]);
var inst_78005 = (inst_78004__$1 instanceof cljs.core.ExceptionInfo);
var inst_78006 = cljs.core.ex_data(inst_78004__$1);
var inst_78007 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78006);
var inst_78008 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78007,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78009 = ((inst_78005) && (inst_78008));
var state_78031__$1 = (function (){var statearr_78040 = state_78031;
(statearr_78040[(9)] = inst_78004__$1);

return statearr_78040;
})();
if(cljs.core.truth_(inst_78009)){
var statearr_78041_79265 = state_78031__$1;
(statearr_78041_79265[(1)] = (3));

} else {
var statearr_78042_79266 = state_78031__$1;
(statearr_78042_79266[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78032 === (9))){
var inst_78014 = (state_78031[(10)]);
var inst_78028 = (state_78031[(2)]);
var inst_78029 = lpdashboard.utils.ebn__GT_bn(inst_78028,inst_78014);
var state_78031__$1 = state_78031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78031__$1,inst_78029);
} else {
if((state_val_78032 === (5))){
var inst_78000 = (state_78031[(8)]);
var inst_78014 = (state_78031[(2)]);
var inst_78015 = inst_78000.totalSupply();
var inst_78016 = cljs.core.async.interop.p__GT_c(inst_78015);
var state_78031__$1 = (function (){var statearr_78043 = state_78031;
(statearr_78043[(10)] = inst_78014);

return statearr_78043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78031__$1,(6),inst_78016);
} else {
if((state_val_78032 === (8))){
var inst_78018 = (state_78031[(7)]);
var state_78031__$1 = state_78031;
var statearr_78044_79268 = state_78031__$1;
(statearr_78044_79268[(2)] = inst_78018);

(statearr_78044_79268[(1)] = (9));


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
var lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____0 = (function (){
var statearr_78045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78045[(0)] = lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__);

(statearr_78045[(1)] = (1));

return statearr_78045;
});
var lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____1 = (function (state_78031){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78031);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78046){var ex__38753__auto__ = e78046;
var statearr_78047_79270 = state_78031;
(statearr_78047_79270[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78031[(4)]))){
var statearr_78048_79271 = state_78031;
(statearr_78048_79271[(1)] = cljs.core.first((state_78031[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79273 = state_78031;
state_78031 = G__79273;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__ = function(state_78031){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____1.call(this,state_78031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_token_total_supply_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78049 = f__38842__auto__();
(statearr_78049[(6)] = c__38841__auto__);

return statearr_78049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_pickle_jar_balance = (function lpdashboard$ethereum$_LT_pickle_jar_balance(token_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78082){
var state_val_78083 = (state_78082[(1)]);
if((state_val_78083 === (7))){
var inst_78069 = (state_78082[(7)]);
var inst_78076 = (function(){throw inst_78069})();
var state_78082__$1 = state_78082;
var statearr_78084_79277 = state_78082__$1;
(statearr_78084_79277[(2)] = inst_78076);

(statearr_78084_79277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78083 === (1))){
var inst_78051 = (state_78082[(8)]);
var inst_78050 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.erc20_abi,lpdashboard.ethereum.pickle_jar_abi);
var inst_78051__$1 = lpdashboard.ethereum.make_contract(inst_78050,token_address);
var inst_78052 = inst_78051__$1.decimals();
var inst_78053 = cljs.core.async.interop.p__GT_c(inst_78052);
var state_78082__$1 = (function (){var statearr_78085 = state_78082;
(statearr_78085[(8)] = inst_78051__$1);

return statearr_78085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78082__$1,(2),inst_78053);
} else {
if((state_val_78083 === (4))){
var inst_78055 = (state_78082[(9)]);
var state_78082__$1 = state_78082;
var statearr_78086_79280 = state_78082__$1;
(statearr_78086_79280[(2)] = inst_78055);

(statearr_78086_79280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78083 === (6))){
var inst_78069 = (state_78082[(7)]);
var inst_78069__$1 = (state_78082[(2)]);
var inst_78070 = (inst_78069__$1 instanceof cljs.core.ExceptionInfo);
var inst_78071 = cljs.core.ex_data(inst_78069__$1);
var inst_78072 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78071);
var inst_78073 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78072,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78074 = ((inst_78070) && (inst_78073));
var state_78082__$1 = (function (){var statearr_78087 = state_78082;
(statearr_78087[(7)] = inst_78069__$1);

return statearr_78087;
})();
if(cljs.core.truth_(inst_78074)){
var statearr_78088_79282 = state_78082__$1;
(statearr_78088_79282[(1)] = (7));

} else {
var statearr_78089_79283 = state_78082__$1;
(statearr_78089_79283[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78083 === (3))){
var inst_78055 = (state_78082[(9)]);
var inst_78062 = (function(){throw inst_78055})();
var state_78082__$1 = state_78082;
var statearr_78090_79285 = state_78082__$1;
(statearr_78090_79285[(2)] = inst_78062);

(statearr_78090_79285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78083 === (2))){
var inst_78055 = (state_78082[(9)]);
var inst_78055__$1 = (state_78082[(2)]);
var inst_78056 = (inst_78055__$1 instanceof cljs.core.ExceptionInfo);
var inst_78057 = cljs.core.ex_data(inst_78055__$1);
var inst_78058 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78057);
var inst_78059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78058,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78060 = ((inst_78056) && (inst_78059));
var state_78082__$1 = (function (){var statearr_78091 = state_78082;
(statearr_78091[(9)] = inst_78055__$1);

return statearr_78091;
})();
if(cljs.core.truth_(inst_78060)){
var statearr_78092_79289 = state_78082__$1;
(statearr_78092_79289[(1)] = (3));

} else {
var statearr_78093_79290 = state_78082__$1;
(statearr_78093_79290[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78083 === (9))){
var inst_78065 = (state_78082[(10)]);
var inst_78079 = (state_78082[(2)]);
var inst_78080 = lpdashboard.utils.ebn__GT_bn(inst_78079,inst_78065);
var state_78082__$1 = state_78082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78082__$1,inst_78080);
} else {
if((state_val_78083 === (5))){
var inst_78051 = (state_78082[(8)]);
var inst_78065 = (state_78082[(2)]);
var inst_78066 = inst_78051.balance();
var inst_78067 = cljs.core.async.interop.p__GT_c(inst_78066);
var state_78082__$1 = (function (){var statearr_78094 = state_78082;
(statearr_78094[(10)] = inst_78065);

return statearr_78094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78082__$1,(6),inst_78067);
} else {
if((state_val_78083 === (8))){
var inst_78069 = (state_78082[(7)]);
var state_78082__$1 = state_78082;
var statearr_78095_79292 = state_78082__$1;
(statearr_78095_79292[(2)] = inst_78069);

(statearr_78095_79292[(1)] = (9));


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
var lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____0 = (function (){
var statearr_78096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78096[(0)] = lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__);

(statearr_78096[(1)] = (1));

return statearr_78096;
});
var lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____1 = (function (state_78082){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78082);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78097){var ex__38753__auto__ = e78097;
var statearr_78098_79312 = state_78082;
(statearr_78098_79312[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78082[(4)]))){
var statearr_78099_79323 = state_78082;
(statearr_78099_79323[(1)] = cljs.core.first((state_78082[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79334 = state_78082;
state_78082 = G__79334;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__ = function(state_78082){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____1.call(this,state_78082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_pickle_jar_balance_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78100 = f__38842__auto__();
(statearr_78100[(6)] = c__38841__auto__);

return statearr_78100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.make_token_deposit = (function lpdashboard$ethereum$make_token_deposit(tx){
var parsed_event = lpdashboard.ethereum.detector_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),tx_args.user,new cljs.core.Keyword(null,"pid","pid",1018387698),parseInt(module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(tx_args.pid,(0))),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash], null);
});
lpdashboard.ethereum.make_token_tx = (function lpdashboard$ethereum$make_token_tx(tx,decimals){
var parsed_event = lpdashboard.ethereum.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),lpdashboard.utils.ebn__GT_bn(tx_args.amount,decimals)], null);
});
lpdashboard.ethereum._LT_user_token_deposits = (function lpdashboard$ethereum$_LT_user_token_deposits(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Deposit.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78119){
var state_val_78120 = (state_78119[(1)]);
if((state_val_78120 === (1))){
var inst_78102 = provider.getLogs(user_filter);
var inst_78103 = cljs.core.async.interop.p__GT_c(inst_78102);
var state_78119__$1 = state_78119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78119__$1,(2),inst_78103);
} else {
if((state_val_78120 === (2))){
var inst_78105 = (state_78119[(7)]);
var inst_78105__$1 = (state_78119[(2)]);
var inst_78106 = (inst_78105__$1 instanceof cljs.core.ExceptionInfo);
var inst_78107 = cljs.core.ex_data(inst_78105__$1);
var inst_78108 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78107);
var inst_78109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78108,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78110 = ((inst_78106) && (inst_78109));
var state_78119__$1 = (function (){var statearr_78121 = state_78119;
(statearr_78121[(7)] = inst_78105__$1);

return statearr_78121;
})();
if(cljs.core.truth_(inst_78110)){
var statearr_78122_79359 = state_78119__$1;
(statearr_78122_79359[(1)] = (3));

} else {
var statearr_78123_79360 = state_78119__$1;
(statearr_78123_79360[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78120 === (3))){
var inst_78105 = (state_78119[(7)]);
var inst_78112 = (function(){throw inst_78105})();
var state_78119__$1 = state_78119;
var statearr_78124_79361 = state_78119__$1;
(statearr_78124_79361[(2)] = inst_78112);

(statearr_78124_79361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78120 === (4))){
var inst_78105 = (state_78119[(7)]);
var state_78119__$1 = state_78119;
var statearr_78125_79363 = state_78119__$1;
(statearr_78125_79363[(2)] = inst_78105);

(statearr_78125_79363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78120 === (5))){
var inst_78115 = (state_78119[(2)]);
var inst_78116 = (function (){var filtered_txs = inst_78115;
return (function (p1__78101_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__78101_SHARP_);
});
})();
var inst_78117 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78116,inst_78115);
var state_78119__$1 = state_78119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78119__$1,inst_78117);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____0 = (function (){
var statearr_78126 = [null,null,null,null,null,null,null,null];
(statearr_78126[(0)] = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__);

(statearr_78126[(1)] = (1));

return statearr_78126;
});
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____1 = (function (state_78119){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78119);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78127){var ex__38753__auto__ = e78127;
var statearr_78128_79367 = state_78119;
(statearr_78128_79367[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78119[(4)]))){
var statearr_78129_79368 = state_78119;
(statearr_78129_79368[(1)] = cljs.core.first((state_78119[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79371 = state_78119;
state_78119 = G__79371;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__ = function(state_78119){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____1.call(this,state_78119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78130 = f__38842__auto__();
(statearr_78130[(6)] = c__38841__auto__);

return statearr_78130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_user_token_withdrawals = (function lpdashboard$ethereum$_LT_user_token_withdrawals(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,token_address);
var user_filter = (contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Withdraw.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78149){
var state_val_78150 = (state_78149[(1)]);
if((state_val_78150 === (1))){
var inst_78132 = provider.getLogs(user_filter);
var inst_78133 = cljs.core.async.interop.p__GT_c(inst_78132);
var state_78149__$1 = state_78149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78149__$1,(2),inst_78133);
} else {
if((state_val_78150 === (2))){
var inst_78135 = (state_78149[(7)]);
var inst_78135__$1 = (state_78149[(2)]);
var inst_78136 = (inst_78135__$1 instanceof cljs.core.ExceptionInfo);
var inst_78137 = cljs.core.ex_data(inst_78135__$1);
var inst_78138 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78137);
var inst_78139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78138,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78140 = ((inst_78136) && (inst_78139));
var state_78149__$1 = (function (){var statearr_78151 = state_78149;
(statearr_78151[(7)] = inst_78135__$1);

return statearr_78151;
})();
if(cljs.core.truth_(inst_78140)){
var statearr_78152_79378 = state_78149__$1;
(statearr_78152_79378[(1)] = (3));

} else {
var statearr_78153_79379 = state_78149__$1;
(statearr_78153_79379[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78150 === (3))){
var inst_78135 = (state_78149[(7)]);
var inst_78142 = (function(){throw inst_78135})();
var state_78149__$1 = state_78149;
var statearr_78154_79381 = state_78149__$1;
(statearr_78154_79381[(2)] = inst_78142);

(statearr_78154_79381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78150 === (4))){
var inst_78135 = (state_78149[(7)]);
var state_78149__$1 = state_78149;
var statearr_78155_79383 = state_78149__$1;
(statearr_78155_79383[(2)] = inst_78135);

(statearr_78155_79383[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78150 === (5))){
var inst_78145 = (state_78149[(2)]);
var inst_78146 = (function (){var filtered_txs = inst_78145;
return (function (p1__78131_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__78131_SHARP_);
});
})();
var inst_78147 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78146,inst_78145);
var state_78149__$1 = state_78149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78149__$1,inst_78147);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____0 = (function (){
var statearr_78156 = [null,null,null,null,null,null,null,null];
(statearr_78156[(0)] = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__);

(statearr_78156[(1)] = (1));

return statearr_78156;
});
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____1 = (function (state_78149){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78149);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78157){var ex__38753__auto__ = e78157;
var statearr_78158_79387 = state_78149;
(statearr_78158_79387[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78149[(4)]))){
var statearr_78159_79388 = state_78149;
(statearr_78159_79388[(1)] = cljs.core.first((state_78149[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79391 = state_78149;
state_78149 = G__79391;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__ = function(state_78149){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____1.call(this,state_78149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78160 = f__38842__auto__();
(statearr_78160[(6)] = c__38841__auto__);

return statearr_78160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_user_token_transfers = (function lpdashboard$ethereum$_LT_user_token_transfers(var_args){
var G__78163 = arguments.length;
switch (G__78163) {
case 3:
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
if((token_address == null)){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78166){
var state_val_78167 = (state_78166[(1)]);
if((state_val_78167 === (1))){
var inst_78164 = cljs.core.PersistentVector.EMPTY;
var state_78166__$1 = state_78166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78166__$1,inst_78164);
} else {
return null;
}
});
return (function() {
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_78168 = [null,null,null,null,null,null,null];
(statearr_78168[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_78168[(1)] = (1));

return statearr_78168;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_78166){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78166);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78169){var ex__38753__auto__ = e78169;
var statearr_78170_79395 = state_78166;
(statearr_78170_79395[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78166[(4)]))){
var statearr_78171_79396 = state_78166;
(statearr_78171_79396[(1)] = cljs.core.first((state_78166[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79397 = state_78166;
state_78166 = G__79397;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_78166){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_78166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78172 = f__38842__auto__();
(statearr_78172[(6)] = c__38841__auto__);

return statearr_78172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
} else {
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78204){
var state_val_78205 = (state_78204[(1)]);
if((state_val_78205 === (7))){
var inst_78184 = (state_78204[(7)]);
var inst_78191 = (function(){throw inst_78184})();
var state_78204__$1 = state_78204;
var statearr_78206_79398 = state_78204__$1;
(statearr_78206_79398[(2)] = inst_78191);

(statearr_78206_79398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (1))){
var state_78204__$1 = state_78204;
var statearr_78207_79399 = state_78204__$1;
(statearr_78207_79399[(2)] = null);

(statearr_78207_79399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (4))){
var inst_78173 = (state_78204[(2)]);
var inst_78174 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_78175 = cljs.core.PersistentVector.EMPTY;
var state_78204__$1 = (function (){var statearr_78208 = state_78204;
(statearr_78208[(8)] = inst_78173);

(statearr_78208[(9)] = inst_78174);

return statearr_78208;
})();
var statearr_78209_79405 = state_78204__$1;
(statearr_78209_79405[(2)] = inst_78175);

(statearr_78209_79405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (6))){
var inst_78184 = (state_78204[(7)]);
var inst_78184__$1 = (state_78204[(2)]);
var inst_78185 = (inst_78184__$1 instanceof cljs.core.ExceptionInfo);
var inst_78186 = cljs.core.ex_data(inst_78184__$1);
var inst_78187 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78186);
var inst_78188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78187,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78189 = ((inst_78185) && (inst_78188));
var state_78204__$1 = (function (){var statearr_78210 = state_78204;
(statearr_78210[(7)] = inst_78184__$1);

return statearr_78210;
})();
if(cljs.core.truth_(inst_78189)){
var statearr_78211_79426 = state_78204__$1;
(statearr_78211_79426[(1)] = (7));

} else {
var statearr_78212_79429 = state_78204__$1;
(statearr_78212_79429[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (3))){
var inst_78202 = (state_78204[(2)]);
var state_78204__$1 = state_78204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78204__$1,inst_78202);
} else {
if((state_val_78205 === (2))){
var ___$2 = (function (){var statearr_78214 = state_78204;
(statearr_78214[(4)] = cljs.core.cons((5),(state_78204[(4)])));

return statearr_78214;
})();
var inst_78181 = provider.getLogs(user_filter);
var inst_78182 = cljs.core.async.interop.p__GT_c(inst_78181);
var state_78204__$1 = state_78204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78204__$1,(6),inst_78182);
} else {
if((state_val_78205 === (9))){
var inst_78194 = (state_78204[(2)]);
var inst_78195 = lpdashboard.ethereum._LT_token_decimals(token_address);
var state_78204__$1 = (function (){var statearr_78215 = state_78204;
(statearr_78215[(10)] = inst_78194);

return statearr_78215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78204__$1,(10),inst_78195);
} else {
if((state_val_78205 === (5))){
var ___$2 = (function (){var statearr_78216 = state_78204;
(statearr_78216[(4)] = cljs.core.rest((state_78204[(4)])));

return statearr_78216;
})();
var state_78204__$1 = state_78204;
var ex78213 = (state_78204__$1[(2)]);
var statearr_78217_79431 = state_78204__$1;
(statearr_78217_79431[(5)] = ex78213);


if((ex78213 instanceof Error)){
var statearr_78218_79432 = state_78204__$1;
(statearr_78218_79432[(1)] = (4));

(statearr_78218_79432[(5)] = null);

} else {
throw ex78213;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (10))){
var inst_78194 = (state_78204[(10)]);
var inst_78197 = (state_78204[(2)]);
var inst_78198 = (function (){var filtered_txs = inst_78194;
var decimals = inst_78197;
return (function (p1__78161_SHARP_){
return lpdashboard.ethereum.make_token_tx(p1__78161_SHARP_,decimals);
});
})();
var inst_78199 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78198,inst_78194);
var ___$2 = (function (){var statearr_78219 = state_78204;
(statearr_78219[(4)] = cljs.core.rest((state_78204[(4)])));

return statearr_78219;
})();
var state_78204__$1 = state_78204;
var statearr_78220_79436 = state_78204__$1;
(statearr_78220_79436[(2)] = inst_78199);

(statearr_78220_79436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (8))){
var inst_78184 = (state_78204[(7)]);
var state_78204__$1 = state_78204;
var statearr_78221_79438 = state_78204__$1;
(statearr_78221_79438[(2)] = inst_78184);

(statearr_78221_79438[(1)] = (9));


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
var lpdashboard$ethereum$state_machine__38750__auto__ = null;
var lpdashboard$ethereum$state_machine__38750__auto____0 = (function (){
var statearr_78222 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78222[(0)] = lpdashboard$ethereum$state_machine__38750__auto__);

(statearr_78222[(1)] = (1));

return statearr_78222;
});
var lpdashboard$ethereum$state_machine__38750__auto____1 = (function (state_78204){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78204);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78223){var ex__38753__auto__ = e78223;
var statearr_78224_79440 = state_78204;
(statearr_78224_79440[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78204[(4)]))){
var statearr_78225_79445 = state_78204;
(statearr_78225_79445[(1)] = cljs.core.first((state_78204[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79456 = state_78204;
state_78204 = G__79456;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__38750__auto__ = function(state_78204){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__38750__auto____1.call(this,state_78204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__38750__auto____0;
lpdashboard$ethereum$state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__38750__auto____1;
return lpdashboard$ethereum$state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78226 = f__38842__auto__();
(statearr_78226[(6)] = c__38841__auto__);

return statearr_78226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}
}));

(lpdashboard.ethereum._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

lpdashboard.ethereum._LT_user_lp_mint_transfers = (function lpdashboard$ethereum$_LT_user_lp_mint_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(null,user_address) : contract.filters.Transfer.call(null,null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78243){
var state_val_78244 = (state_78243[(1)]);
if((state_val_78244 === (1))){
var inst_78227 = provider.getLogs(user_filter);
var inst_78228 = cljs.core.async.interop.p__GT_c(inst_78227);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78243__$1,(2),inst_78228);
} else {
if((state_val_78244 === (2))){
var inst_78230 = (state_78243[(7)]);
var inst_78230__$1 = (state_78243[(2)]);
var inst_78231 = (inst_78230__$1 instanceof cljs.core.ExceptionInfo);
var inst_78232 = cljs.core.ex_data(inst_78230__$1);
var inst_78233 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78232);
var inst_78234 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78233,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78235 = ((inst_78231) && (inst_78234));
var state_78243__$1 = (function (){var statearr_78245 = state_78243;
(statearr_78245[(7)] = inst_78230__$1);

return statearr_78245;
})();
if(cljs.core.truth_(inst_78235)){
var statearr_78246_79468 = state_78243__$1;
(statearr_78246_79468[(1)] = (3));

} else {
var statearr_78247_79470 = state_78243__$1;
(statearr_78247_79470[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (3))){
var inst_78230 = (state_78243[(7)]);
var inst_78237 = (function(){throw inst_78230})();
var state_78243__$1 = state_78243;
var statearr_78248_79472 = state_78243__$1;
(statearr_78248_79472[(2)] = inst_78237);

(statearr_78248_79472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (4))){
var inst_78230 = (state_78243[(7)]);
var state_78243__$1 = state_78243;
var statearr_78249_79473 = state_78243__$1;
(statearr_78249_79473[(2)] = inst_78230);

(statearr_78249_79473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (5))){
var inst_78240 = (state_78243[(2)]);
var inst_78241 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_78240);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78243__$1,inst_78241);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____0 = (function (){
var statearr_78250 = [null,null,null,null,null,null,null,null];
(statearr_78250[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__);

(statearr_78250[(1)] = (1));

return statearr_78250;
});
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____1 = (function (state_78243){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78243);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78251){var ex__38753__auto__ = e78251;
var statearr_78252_79477 = state_78243;
(statearr_78252_79477[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78243[(4)]))){
var statearr_78253_79479 = state_78243;
(statearr_78253_79479[(1)] = cljs.core.first((state_78243[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79480 = state_78243;
state_78243 = G__79480;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__ = function(state_78243){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____1.call(this,state_78243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78254 = f__38842__auto__();
(statearr_78254[(6)] = c__38841__auto__);

return statearr_78254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_user_lp_burn_transfers = (function lpdashboard$ethereum$_LT_user_lp_burn_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,null) : contract.filters.Transfer.call(null,user_address,null));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78271){
var state_val_78272 = (state_78271[(1)]);
if((state_val_78272 === (1))){
var inst_78255 = provider.getLogs(user_filter);
var inst_78256 = cljs.core.async.interop.p__GT_c(inst_78255);
var state_78271__$1 = state_78271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78271__$1,(2),inst_78256);
} else {
if((state_val_78272 === (2))){
var inst_78258 = (state_78271[(7)]);
var inst_78258__$1 = (state_78271[(2)]);
var inst_78259 = (inst_78258__$1 instanceof cljs.core.ExceptionInfo);
var inst_78260 = cljs.core.ex_data(inst_78258__$1);
var inst_78261 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78260);
var inst_78262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78261,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78263 = ((inst_78259) && (inst_78262));
var state_78271__$1 = (function (){var statearr_78273 = state_78271;
(statearr_78273[(7)] = inst_78258__$1);

return statearr_78273;
})();
if(cljs.core.truth_(inst_78263)){
var statearr_78274_79486 = state_78271__$1;
(statearr_78274_79486[(1)] = (3));

} else {
var statearr_78275_79487 = state_78271__$1;
(statearr_78275_79487[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78272 === (3))){
var inst_78258 = (state_78271[(7)]);
var inst_78265 = (function(){throw inst_78258})();
var state_78271__$1 = state_78271;
var statearr_78276_79488 = state_78271__$1;
(statearr_78276_79488[(2)] = inst_78265);

(statearr_78276_79488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78272 === (4))){
var inst_78258 = (state_78271[(7)]);
var state_78271__$1 = state_78271;
var statearr_78277_79490 = state_78271__$1;
(statearr_78277_79490[(2)] = inst_78258);

(statearr_78277_79490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78272 === (5))){
var inst_78268 = (state_78271[(2)]);
var inst_78269 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_78268);
var state_78271__$1 = state_78271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78271__$1,inst_78269);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____0 = (function (){
var statearr_78278 = [null,null,null,null,null,null,null,null];
(statearr_78278[(0)] = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__);

(statearr_78278[(1)] = (1));

return statearr_78278;
});
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____1 = (function (state_78271){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78271);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78279){var ex__38753__auto__ = e78279;
var statearr_78280_79491 = state_78271;
(statearr_78280_79491[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78271[(4)]))){
var statearr_78281_79492 = state_78271;
(statearr_78281_79492[(1)] = cljs.core.first((state_78271[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79493 = state_78271;
state_78271 = G__79493;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__ = function(state_78271){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____1.call(this,state_78271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78282 = f__38842__auto__();
(statearr_78282[(6)] = c__38841__auto__);

return statearr_78282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_user_lp_mint_deposits = (function lpdashboard$ethereum$_LT_user_lp_mint_deposits(provider,pair_address,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,pair_address) : contract.filters.Transfer.call(null,user_address,pair_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78299){
var state_val_78300 = (state_78299[(1)]);
if((state_val_78300 === (1))){
var inst_78283 = provider.getLogs(user_filter);
var inst_78284 = cljs.core.async.interop.p__GT_c(inst_78283);
var state_78299__$1 = state_78299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78299__$1,(2),inst_78284);
} else {
if((state_val_78300 === (2))){
var inst_78286 = (state_78299[(7)]);
var inst_78286__$1 = (state_78299[(2)]);
var inst_78287 = (inst_78286__$1 instanceof cljs.core.ExceptionInfo);
var inst_78288 = cljs.core.ex_data(inst_78286__$1);
var inst_78289 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78288);
var inst_78290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78289,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78291 = ((inst_78287) && (inst_78290));
var state_78299__$1 = (function (){var statearr_78301 = state_78299;
(statearr_78301[(7)] = inst_78286__$1);

return statearr_78301;
})();
if(cljs.core.truth_(inst_78291)){
var statearr_78302_79533 = state_78299__$1;
(statearr_78302_79533[(1)] = (3));

} else {
var statearr_78303_79534 = state_78299__$1;
(statearr_78303_79534[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78300 === (3))){
var inst_78286 = (state_78299[(7)]);
var inst_78293 = (function(){throw inst_78286})();
var state_78299__$1 = state_78299;
var statearr_78304_79535 = state_78299__$1;
(statearr_78304_79535[(2)] = inst_78293);

(statearr_78304_79535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78300 === (4))){
var inst_78286 = (state_78299[(7)]);
var state_78299__$1 = state_78299;
var statearr_78305_79537 = state_78299__$1;
(statearr_78305_79537[(2)] = inst_78286);

(statearr_78305_79537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78300 === (5))){
var inst_78296 = (state_78299[(2)]);
var inst_78297 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_78296);
var state_78299__$1 = state_78299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78299__$1,inst_78297);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____0 = (function (){
var statearr_78306 = [null,null,null,null,null,null,null,null];
(statearr_78306[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__);

(statearr_78306[(1)] = (1));

return statearr_78306;
});
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____1 = (function (state_78299){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78299);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78307){var ex__38753__auto__ = e78307;
var statearr_78308_79540 = state_78299;
(statearr_78308_79540[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78299[(4)]))){
var statearr_78309_79541 = state_78299;
(statearr_78309_79541[(1)] = cljs.core.first((state_78299[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79543 = state_78299;
state_78299 = G__79543;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__ = function(state_78299){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____1.call(this,state_78299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78310 = f__38842__auto__();
(statearr_78310[(6)] = c__38841__auto__);

return statearr_78310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_get_tx_receipt = (function lpdashboard$ethereum$_LT_get_tx_receipt(txhash){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78326){
var state_val_78327 = (state_78326[(1)]);
if((state_val_78327 === (1))){
var inst_78311 = lpdashboard.ethereum.provider.getTransactionReceipt(txhash);
var inst_78312 = cljs.core.async.interop.p__GT_c(inst_78311);
var state_78326__$1 = state_78326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78326__$1,(2),inst_78312);
} else {
if((state_val_78327 === (2))){
var inst_78314 = (state_78326[(7)]);
var inst_78314__$1 = (state_78326[(2)]);
var inst_78315 = (inst_78314__$1 instanceof cljs.core.ExceptionInfo);
var inst_78316 = cljs.core.ex_data(inst_78314__$1);
var inst_78317 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78316);
var inst_78318 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78317,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78319 = ((inst_78315) && (inst_78318));
var state_78326__$1 = (function (){var statearr_78328 = state_78326;
(statearr_78328[(7)] = inst_78314__$1);

return statearr_78328;
})();
if(cljs.core.truth_(inst_78319)){
var statearr_78329_79547 = state_78326__$1;
(statearr_78329_79547[(1)] = (3));

} else {
var statearr_78330_79548 = state_78326__$1;
(statearr_78330_79548[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78327 === (3))){
var inst_78314 = (state_78326[(7)]);
var inst_78321 = (function(){throw inst_78314})();
var state_78326__$1 = state_78326;
var statearr_78331_79549 = state_78326__$1;
(statearr_78331_79549[(2)] = inst_78321);

(statearr_78331_79549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78327 === (4))){
var inst_78314 = (state_78326[(7)]);
var state_78326__$1 = state_78326;
var statearr_78332_79551 = state_78326__$1;
(statearr_78332_79551[(2)] = inst_78314);

(statearr_78332_79551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78327 === (5))){
var inst_78324 = (state_78326[(2)]);
var state_78326__$1 = state_78326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78326__$1,inst_78324);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____0 = (function (){
var statearr_78333 = [null,null,null,null,null,null,null,null];
(statearr_78333[(0)] = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__);

(statearr_78333[(1)] = (1));

return statearr_78333;
});
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____1 = (function (state_78326){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78326);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78334){var ex__38753__auto__ = e78334;
var statearr_78335_79555 = state_78326;
(statearr_78335_79555[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78326[(4)]))){
var statearr_78336_79557 = state_78326;
(statearr_78336_79557[(1)] = cljs.core.first((state_78326[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79558 = state_78326;
state_78326 = G__79558;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__ = function(state_78326){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____1.call(this,state_78326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78337 = f__38842__auto__();
(statearr_78337[(6)] = c__38841__auto__);

return statearr_78337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_get_tx = (function lpdashboard$ethereum$_LT_get_tx(txhash){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78353){
var state_val_78354 = (state_78353[(1)]);
if((state_val_78354 === (1))){
var inst_78338 = lpdashboard.ethereum.provider.getTransaction(txhash);
var inst_78339 = cljs.core.async.interop.p__GT_c(inst_78338);
var state_78353__$1 = state_78353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78353__$1,(2),inst_78339);
} else {
if((state_val_78354 === (2))){
var inst_78341 = (state_78353[(7)]);
var inst_78341__$1 = (state_78353[(2)]);
var inst_78342 = (inst_78341__$1 instanceof cljs.core.ExceptionInfo);
var inst_78343 = cljs.core.ex_data(inst_78341__$1);
var inst_78344 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78343);
var inst_78345 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78344,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78346 = ((inst_78342) && (inst_78345));
var state_78353__$1 = (function (){var statearr_78355 = state_78353;
(statearr_78355[(7)] = inst_78341__$1);

return statearr_78355;
})();
if(cljs.core.truth_(inst_78346)){
var statearr_78356_79561 = state_78353__$1;
(statearr_78356_79561[(1)] = (3));

} else {
var statearr_78357_79562 = state_78353__$1;
(statearr_78357_79562[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78354 === (3))){
var inst_78341 = (state_78353[(7)]);
var inst_78348 = (function(){throw inst_78341})();
var state_78353__$1 = state_78353;
var statearr_78358_79563 = state_78353__$1;
(statearr_78358_79563[(2)] = inst_78348);

(statearr_78358_79563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78354 === (4))){
var inst_78341 = (state_78353[(7)]);
var state_78353__$1 = state_78353;
var statearr_78359_79581 = state_78353__$1;
(statearr_78359_79581[(2)] = inst_78341);

(statearr_78359_79581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78354 === (5))){
var inst_78351 = (state_78353[(2)]);
var state_78353__$1 = state_78353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78353__$1,inst_78351);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____0 = (function (){
var statearr_78360 = [null,null,null,null,null,null,null,null];
(statearr_78360[(0)] = lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__);

(statearr_78360[(1)] = (1));

return statearr_78360;
});
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____1 = (function (state_78353){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78353);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78361){var ex__38753__auto__ = e78361;
var statearr_78362_79584 = state_78353;
(statearr_78362_79584[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78353[(4)]))){
var statearr_78363_79585 = state_78353;
(statearr_78363_79585[(1)] = cljs.core.first((state_78353[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79586 = state_78353;
state_78353 = G__79586;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__ = function(state_78353){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____1.call(this,state_78353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78364 = f__38842__auto__();
(statearr_78364[(6)] = c__38841__auto__);

return statearr_78364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_get_tx_with_receipt = (function lpdashboard$ethereum$_LT_get_tx_with_receipt(txhash){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78375){
var state_val_78376 = (state_78375[(1)]);
if((state_val_78376 === (1))){
var inst_78365 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_78366 = lpdashboard.ethereum._LT_get_tx(txhash);
var state_78375__$1 = (function (){var statearr_78377 = state_78375;
(statearr_78377[(7)] = inst_78365);

return statearr_78377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78375__$1,(2),inst_78366);
} else {
if((state_val_78376 === (2))){
var inst_78368 = (state_78375[(2)]);
var inst_78369 = lpdashboard.ethereum._LT_get_tx_receipt(txhash);
var state_78375__$1 = (function (){var statearr_78378 = state_78375;
(statearr_78378[(8)] = inst_78368);

return statearr_78378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78375__$1,(3),inst_78369);
} else {
if((state_val_78376 === (3))){
var inst_78365 = (state_78375[(7)]);
var inst_78368 = (state_78375[(8)]);
var inst_78371 = (state_78375[(2)]);
var inst_78372 = [inst_78368,inst_78371];
var inst_78373 = cljs.core.PersistentHashMap.fromArrays(inst_78365,inst_78372);
var state_78375__$1 = state_78375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78375__$1,inst_78373);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____0 = (function (){
var statearr_78379 = [null,null,null,null,null,null,null,null,null];
(statearr_78379[(0)] = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__);

(statearr_78379[(1)] = (1));

return statearr_78379;
});
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____1 = (function (state_78375){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78375);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78380){var ex__38753__auto__ = e78380;
var statearr_78381_79594 = state_78375;
(statearr_78381_79594[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78375[(4)]))){
var statearr_78382_79595 = state_78375;
(statearr_78382_79595[(1)] = cljs.core.first((state_78375[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79597 = state_78375;
state_78375 = G__79597;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__ = function(state_78375){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____1.call(this,state_78375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78383 = f__38842__auto__();
(statearr_78383[(6)] = c__38841__auto__);

return statearr_78383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum._LT_get_trxs = (function lpdashboard$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78388){
var state_val_78389 = (state_78388[(1)]);
if((state_val_78389 === (1))){
var inst_78384 = lpdashboard.ethereum._LT_get_tx_with_receipt(x);
var state_78388__$1 = state_78388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78388__$1,(2),inst_78384);
} else {
if((state_val_78389 === (2))){
var inst_78386 = (state_78388[(2)]);
var state_78388__$1 = state_78388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78388__$1,inst_78386);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____0 = (function (){
var statearr_78390 = [null,null,null,null,null,null,null];
(statearr_78390[(0)] = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__);

(statearr_78390[(1)] = (1));

return statearr_78390;
});
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____1 = (function (state_78388){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78388);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78391){var ex__38753__auto__ = e78391;
var statearr_78392_79600 = state_78388;
(statearr_78392_79600[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78388[(4)]))){
var statearr_78393_79609 = state_78388;
(statearr_78393_79609[(1)] = cljs.core.first((state_78388[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79631 = state_78388;
state_78388 = G__79631;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__ = function(state_78388){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____1.call(this,state_78388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78394 = f__38842__auto__();
(statearr_78394[(6)] = c__38841__auto__);

return statearr_78394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
lpdashboard.ethereum.total_gas_paid = (function lpdashboard$ethereum$total_gas_paid(tx_with_receipt){
var tx = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_price = lpdashboard.utils.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx,"gasPrice"),(18));
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_used = lpdashboard.utils.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"gasUsed"),(0));
var eth_spent = bignumber.core._STAR_(gas_price,gas_used);
return eth_spent;
});
lpdashboard.ethereum._LT_user_token_destinations = (function lpdashboard$ethereum$_LT_user_token_destinations(provider,token_address,user_address){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78404){
var state_val_78405 = (state_78404[(1)]);
if((state_val_78405 === (1))){
var inst_78396 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_78404__$1 = state_78404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78404__$1,(2),inst_78396);
} else {
if((state_val_78405 === (2))){
var inst_78398 = (state_78404[(2)]);
var inst_78399 = (function (){var user_txs = inst_78398;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_78400 = (function (){var user_txs = inst_78398;
return (function (p1__78395_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__78395_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_78401 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78400,inst_78398);
var inst_78402 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78399,inst_78401);
var state_78404__$1 = state_78404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78404__$1,inst_78402);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____0 = (function (){
var statearr_78406 = [null,null,null,null,null,null,null];
(statearr_78406[(0)] = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__);

(statearr_78406[(1)] = (1));

return statearr_78406;
});
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____1 = (function (state_78404){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78404);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78407){var ex__38753__auto__ = e78407;
var statearr_78408_79644 = state_78404;
(statearr_78408_79644[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78404[(4)]))){
var statearr_78409_79645 = state_78404;
(statearr_78409_79645[(1)] = cljs.core.first((state_78404[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79647 = state_78404;
state_78404 = G__79647;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__ = function(state_78404){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____1.call(this,state_78404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78410 = f__38842__auto__();
(statearr_78410[(6)] = c__38841__auto__);

return statearr_78410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
});
lpdashboard.ethereum.decode_tx_data_args = (function lpdashboard$ethereum$decode_tx_data_args(fn_abi,hexdata){
var args_part = module$node_modules$ethers$dist$ethers_umd.utils.hexDataSlice(hexdata,(4));
var _ = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_part], 0));
return module$node_modules$ethers$dist$ethers_umd.utils.defaultAbiCoder.decode(cljs.core.clj__GT_js(fn_abi),args_part);
});
lpdashboard.ethereum._LT_erc20_infos = (function lpdashboard$ethereum$_LT_erc20_infos(tokens){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__38841__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38842__auto__ = (function (){var switch__38749__auto__ = (function (state_78415){
var state_val_78416 = (state_78415[(1)]);
if((state_val_78416 === (1))){
var inst_78411 = lpdashboard.ethereum._LT_erc20_info(a);
var state_78415__$1 = state_78415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78415__$1,(2),inst_78411);
} else {
if((state_val_78416 === (2))){
var inst_78413 = (state_78415[(2)]);
var state_78415__$1 = state_78415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78415__$1,inst_78413);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____0 = (function (){
var statearr_78417 = [null,null,null,null,null,null,null];
(statearr_78417[(0)] = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__);

(statearr_78417[(1)] = (1));

return statearr_78417;
});
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____1 = (function (state_78415){
while(true){
var ret_value__38751__auto__ = (function (){try{while(true){
var result__38752__auto__ = switch__38749__auto__(state_78415);
if(cljs.core.keyword_identical_QMARK_(result__38752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38752__auto__;
}
break;
}
}catch (e78418){var ex__38753__auto__ = e78418;
var statearr_78419_79650 = state_78415;
(statearr_78419_79650[(2)] = ex__38753__auto__);


if(cljs.core.seq((state_78415[(4)]))){
var statearr_78420_79653 = state_78415;
(statearr_78420_79653[(1)] = cljs.core.first((state_78415[(4)])));

} else {
throw ex__38753__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79655 = state_78415;
state_78415 = G__79655;
continue;
} else {
return ret_value__38751__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__ = function(state_78415){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____1.call(this,state_78415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____0;
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto____1;
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__38750__auto__;
})()
})();
var state__38843__auto__ = (function (){var statearr_78421 = f__38842__auto__();
(statearr_78421[(6)] = c__38841__auto__);

return statearr_78421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38843__auto__);
}));

return c__38841__auto__;
}),tokens)));
});

//# sourceMappingURL=lpdashboard.ethereum.js.map
