import {calculate} from './calculate.mjs';
const $ = id=>document.getElementById(id);
const fields = ['before','after','days'];
const clearResult = ()=>{ $('result').hidden=true; $('error').textContent=''; };
fields.forEach(id=>$(id).addEventListener('input',clearResult));
$('calculator').addEventListener('submit',event=>{
  event.preventDefault(); clearResult();
  try{
    if(fields.some(id=>$(id).value.trim()==='')) throw new Error('Fill in all three numbers. Zero is fine.');
    const {dailyMinutes,totalMinutes,hours}=calculate(Object.fromEntries(fields.map(id=>[id,Number($(id).value)])));
    const direction=totalMinutes<0?'more':totalMinutes>0?'less':'difference';
    $('total').textContent=`${Math.abs(hours).toLocaleString(undefined,{maximumFractionDigits:1})} hours ${direction}`;
    $('breakdown').textContent=`${Math.abs(dailyMinutes).toLocaleString()} minutes ${direction==='difference'?'of change':direction} per day × ${$('days').value} days = ${Math.abs(totalMinutes).toLocaleString()} minutes.`;
    $('result').hidden=false;
  }catch(error){ $('error').textContent=error.message; }
});
if(new URLSearchParams(location.search).get('debug')==='1'){
  document.querySelector('meta[name="robots"]').setAttribute('content','noindex,follow');
  $('debug').hidden=false;
  const presets={plain:[68,28,18,'#6c38e0','#fff'],airy:[64,42,24,'#6c38e0','#fff'],loud:[84,32,28,'#5420bf','#fff'],compact:[48,18,12,'#6c38e0','#fff'],ink:[68,28,8,'#171717','#fff'],lilac:[64,30,22,'#5729bc','#faf7ff']};
  const apply=()=>{document.documentElement.style.setProperty('--heading',`${$('heading-size').value}px`);document.documentElement.style.setProperty('--space',`${$('spacing').value}px`);document.documentElement.style.setProperty('--radius',`${$('rounding').value}px`);};
  ['heading-size','spacing','rounding'].forEach(id=>$(id).addEventListener('input',apply));
  $('preset').addEventListener('change',()=>{const [h,s,r,a,p]=presets[$('preset').value];$('heading-size').value=h;$('spacing').value=s;$('rounding').value=r;document.documentElement.style.setProperty('--accent',a);document.documentElement.style.setProperty('--paper',p);apply();});
  $('motion').addEventListener('change',()=>document.body.classList.toggle('motion',$('motion').checked));
}
