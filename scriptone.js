function savedata()
{
    localStorage.setItem("fname",document.getElementById("fnametwo").value);
    localStorage.setItem("mname",document.getElementById("mnametwo").value);
    localStorage.setItem("lname",document.getElementById("lnametwo").value);
    localStorage.setItem("pan",document.getElementById("pantwo").value);
    localStorage.setItem("date",document.getElementById("datetwo").value);
    localStorage.setItem("status",document.getElementById("statustwo").value);
    localStorage.setItem("add",document.getElementById("fnametwo1").value);
    localStorage.setItem("city",document.getElementById("mnametwo1").value);
    localStorage.setItem("pre",document.getElementById("lnametwo1").value);
    localStorage.setItem("road",document.getElementById("pantwo1").value);
    localStorage.setItem("area",document.getElementById("datetwo2").value);
    localStorage.setItem("state",document.getElementById("statustwo2").value);
    localStorage.setItem("country",document.getElementById("datetwo1").value);
    localStorage.setItem("pin",document.getElementById("statustwo1").value);
    localStorage.setItem("emp",document.getElementById("datetwo12").value);
    localStorage.setItem("res",document.getElementById("statustwo12").value);
    localStorage.setItem("ward",document.getElementById("datetwo111").value);
    localStorage.setItem("mobile",document.getElementById("statustwo111").value);
    localStorage.setItem("mobile2",document.getElementById("datetwo1111").value);
    localStorage.setItem("email",document.getElementById("statustwo1111").value);
    localStorage.setItem("email2",document.getElementById("email22").value);
}


function task()
{
    document.getElementById("fnametwo").value=localStorage.getItem("fname");
    document.getElementById("mnametwo").value=localStorage.getItem("mname");
    document.getElementById("lnametwo").value=localStorage.getItem("lname");
    document.getElementById("pantwo").value=localStorage.getItem("pan");
    document.getElementById("datetwo").value=localStorage.getItem("date");
    document.getElementById("statustwo").value=localStorage.getItem("status");
    document.getElementById("fnametwo1").value=localStorage.getItem("add");
    document.getElementById("mnametwo1").value=localStorage.getItem("city");
    document.getElementById("lnametwo1").value=localStorage.getItem("pre")
    document.getElementById("pantwo1").value=localStorage.getItem("road")
    document.getElementById("datetwo2").value=localStorage.getItem("area")
    document.getElementById("statustwo2").value=localStorage.getItem("state")
    document.getElementById("datetwo1").value=localStorage.getItem("country")
    document.getElementById("statustwo1").value=localStorage.getItem("pin")
    document.getElementById("datetwo12").value=localStorage.getItem("emp")
    document.getElementById("statustwo12").value=localStorage.getItem("res")
    document.getElementById("datetwo111").value=localStorage.getItem("ward")
    document.getElementById("statustwo111").value=localStorage.getItem("mobile")
    document.getElementById("datetwo1111").value=localStorage.getItem("mobile2")
    document.getElementById("statustwo1111").value=localStorage.getItem("email")
    document.getElementById("email22").value=localStorage.getItem("email2")
}
task();

function reset()
{

    document.getElementById("fnametwo").value=localStorage.clear("prav");
    document.getElementById("mnametwo").value=localStorage.clear("mname");
    document.getElementById("lnametwo").value=localStorage.clear("lname");
    document.getElementById("pantwo").value=localStorage.clear("pan");
    document.getElementById("datetwo").value=localStorage.clear("date");
    document.getElementById("statustwo").value=localStorage.clear("status");
    document.getElementById("fnametwo1").value=localStorage.clear("add");
    document.getElementById("mnametwo1").value=localStorage.clear("city");
    document.getElementById("lnametwo1").value=localStorage.clear("pre")
    document.getElementById("pantwo1").value=localStorage.clear("road")
    document.getElementById("datetwo2").value=localStorage.clear("area")
    document.getElementById("statustwo2").value=localStorage.clear("state")
    document.getElementById("datetwo1").value=localStorage.clear("country")
    document.getElementById("statustwo1").value=localStorage.clear("pin")
    document.getElementById("datetwo12").value=localStorage.clear("emp")
    document.getElementById("statustwo12").value=localStorage.clear("res")
    document.getElementById("datetwo111").value=localStorage.clear("ward")
    document.getElementById("statustwo111").value=localStorage.clear("mobile")
    document.getElementById("datetwo1111").value=localStorage.clear("mobile2")
    document.getElementById("statustwo1111").value=localStorage.clear("email")
    document.getElementById("email22").value=localStorage.clear("email2")   
    document.getElementById("fnametwo").value=""
    document.getElementById("mnametwo").value=""
    document.getElementById("lnametwo").value=""
    document.getElementById("pantwo").value=""
    document.getElementById("datetwo").value=""
    document.getElementById("statustwo").value=""
    document.getElementById("fnametwo1").value=""
    document.getElementById("mnametwo1").value=""
    document.getElementById("lnametwo1").value=""
    document.getElementById("pantwo1").value=""
    document.getElementById("datetwo2").value=""
    document.getElementById("statustwo2").value=""
    document.getElementById("datetwo1").value=""
    document.getElementById("statustwo1").value=""
    document.getElementById("datetwo12").value=""
    document.getElementById("statustwo12").value=""
    document.getElementById("datetwo111").value=""
    document.getElementById("statustwo111").value=""
    document.getElementById("datetwo1111").value=""
    document.getElementById("statustwo1111").value=""
    document.getElementById("email22").value=""   
}



//All the information
var lal=document.getElementById("rentt")
let age=document.getElementById("salary1");
let ci=document.getElementById("metro");
let cit=document.getElementById("nmetro");

let re=document.getElementById("rent");
let ren=document.getElementById("own")

let ba=document.getElementById("pl1");
let iin=document.getElementById("add12");
let din=document.getElementById("add22");
let rentals=document.getElementById("add32");
let rentt=document.getElementById("rentt1");
let other=document.getElementById("add42");
let sp=document.getElementById("sp1");
let hra=document.getElementById("hra1");
let da=document.getElementById("da1");
let epf=document.getElementById("epf1");
let real=document.getElementById("real1");
let uus=document.getElementById("us1");
let eq=document.getElementById("ei1");
let ppf=document.getElementById("ppf1");
let fd=document.getElementById("fd1");
let ins=document.getElementById("ins1");
let mf=document.getElementById("mf1");
let health=document.getElementById("hi1");
let nps=document.getElementById("nps1");
let ed=document.getElementById("ed1");
let hl=document.getElementById("don1");
let charity=document.getElementById("cha1");
let van=document.getElementById("particulars");
let sheet=document.getElementById("sheet")
let set=document.getElementById("reset");
let sett=document.getElementById("set");
let taxvalue=document.getElementById("value");
let ov=document.getElementById("ov");
let nv=document.getElementById("nv");
let valuen=document.getElementById("valuen")

var mon=-1
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        mon=0
      } else {
        mon=1
      }
    });
  });

  // The end

  // About the rent issues

  
  function rentissue()
  {
    lal.style.display="block";
    rentt.style.display="block";
  }
  function ownissue()
  {
    lal.style.display="none";
    rentt.style.display="none";
  }




function calci()
{
  if(age=="")
  alert("Enter your age");
  if(ba.value=="")
  alert("Enter the basic salary");
  if(iin.value=="")
  iin.value=0;
  if(din.value=="")
  din.value=0;
  if(rentals.value=="")
  if(rentt.value=="")
  rentt.value=0;
  if(rentals.value=="")
  rentals.value=0;
  if(other.value=="")
  other.value=0;
  if(sp.value=="")
  sp.value=0;
  if(da.value=="")
  da.value=0;
  if(hra.value=="")
  hra.value=0;
  if(real.value=="")
  real.value=0;
  if(uus.value=="")
  uus.value=0;
  if(eq.value=="")
  eq.value=0;
  if(ppf.value=="")
  ppf.value=0;
  if(fd.value=="")
  fd.value=0;
  if(ins.value=="")
  ins.value=0;
  if(mf.value=="")
  mf.value=0;
  if(health.value=="")
  health.value=0;
  if(nps.value=="")
  nps.value=0;
  if(ed.value=="")
  ed.value=0;
  if(hl.value=="")
  hl.value=0;
  if(charity.value=="")
  charity.value=0;


  //monthly

  if(mon==1)
  {
    ba.value=12*parseInt(ba.value);
    iin.value=12*parseInt(iin.value);
    din.value=12*parseInt(din.value);
    rentals.value=12*parseInt(rentals.value);
    other.value=12*parseInt(other.value);
    rentt.value=12*parseInt(rentt.value);
    sp.value=12*parseInt(sp.value);
    hra.value=12*parseInt(hra.value);
    da.value=12*parseInt(da.value);
  }

  let taxable;
  let ri=parseInt(rentals.value)-(0.3*parseInt(rentals.value))  // rental income
  var taxabler=parseInt(ba.value)+parseInt(iin.value)+parseInt(din.value)+parseInt(other.value)+parseInt(ri)+parseInt(sp.value)+parseInt(da.value)+parseInt(hra.value)+parseInt(real.value)+parseInt(uus.value)+parseInt(eq.value)-50000;
  if(re.checked)
  {
    var a=parseInt(hra.value);
    var b=parseInt(rentt.value)-(0.1*parseInt(ba.value));
    if(parseInt(b)<0)
    b=0;
    var c;
    if(ci.checked)
    {
      c=parseInt(0.5*parseInt(ba.value));
    }
    if(cit.checked)
    {
      c=parseInt(0.4*parseInt(ba.value));
    }
    hra.value=a-Math.min(a,b,c);
    if(parseInt(hra.value)<0)
    {
      hra.value=0
    }
  }

  var eighty=parseInt(ppf.value)+parseInt(fd.value)+parseInt(ins.value)+parseInt(mf.value);
  if(eighty>150000)
  {
    eighty=150000
  }

  if(parseInt(nps.value)>50000)
  {
    nps.value=50000;
  }
  if(parseInt(hl.value)>200000)
  {
    hl.value=200000;
  }
  var old=0;
  var newr=0;
  taxable=parseInt(ba.value)+parseInt(iin.value)+parseInt(din.value)+parseInt(other.value)+parseInt(ri)+parseInt(sp.value)+parseInt(da.value)+parseInt(hra.value)+parseInt(real.value)+parseInt(uus.value)+parseInt(eq.value)-eighty-parseInt(nps.value)-parseInt(ed.value)-parseInt(hl.value)-parseInt(charity.value)-50000;
  taxable+=0.04*taxable

  taxabler+=eighty-parseInt(nps.value)-parseInt(ed.value)-parseInt(hl.value)-parseInt(charity.value);
  taxabler+=0.04*taxabler
 
  if(age.value<60)
  {
    if(taxable<=250000)
    {
      old=0;
    }
    else if(taxable>250000 && taxable<=500000)
    {
      old=0.05*taxable;
    }
    else if(taxable>500000 && taxable<=100000)
    {
      old=12500+0.2*(taxable-500000)
    }
    else
    {
      old=112500+0.3*(taxable-1000000)
    }
  }
  if(age.value<60)
  {
    if(taxabler>=250000 && taxabler<=500000)
    {
      newr=0.05*taxabler;
    }
    else if(taxabler>500000 && taxabler<=750000)
    {
      newr=12500+0.1*(taxabler-500000);
    }
    else if(taxabler>750000 && taxabler<=1000000)
    {
      newr=37500+0.15*(taxabler-750000)
    }
    else if(taxabler>1000000 && taxabler<=1250000)
    {
      newr=75000+0.2*(taxabler-1000000)
    }
    else if(taxabler>1250000 && taxabler<=1500000)
    {
      newr=125000+0.25*(taxabler-1250000)
    }
    else
    {
      newr=187500+0.3*(taxabler-1500000);
    }
  }
  
  
  van.style.display="none"
  sheet.style.display="block";
  sett.style.display="block";
  taxvalue.innerHTML=taxable;
  valuen.innerHTML=taxabler
  ov.innerHTML=old;
  nv.innerHTML=newr



  
}

function resetting()
{
  van.style.display="block";
  sheet.style.display="none";
  sett.style.display="none";
  location.reload()
}