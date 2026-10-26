import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate} from './calculate.mjs';
test('20 minutes a day for 7 days is 140 minutes',()=>assert.deepEqual(calculate({before:120,after:100,days:7}),{dailyMinutes:20,totalMinutes:140,hours:140/60}));
test('increases stay negative',()=>assert.equal(calculate({before:60,after:90,days:7}).totalMinutes,-210));
test('zero is a valid input',()=>assert.equal(calculate({before:0,after:0,days:1}).hours,0));
test('fractions and leap-year duration work',()=>assert.equal(calculate({before:1.5,after:1,days:366}).totalMinutes,183));
for(const invalid of [NaN,Infinity,-1,1441,undefined,'',null]) test(`invalid minutes: ${String(invalid)}`,()=>assert.throws(()=>calculate({before:invalid,after:10,days:7})));
for(const invalid of [0,367,1.2,NaN,'7']) test(`invalid days: ${String(invalid)}`,()=>assert.throws(()=>calculate({before:120,after:100,days:invalid})));
