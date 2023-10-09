const firstDespT = document.getElementById('firstDespT');
const secDespT = document.getElementById('secDespT');
const thirdDespT = document.getElementById('thirdDespT');
const fourDespT = document.getElementById('fourDespT');

const firstDesp = document.getElementById('firstDesp');
const secDesp = document.getElementById('secDesp');
const thirdDesp = document.getElementById('thirdDesp');
const fourtDesp = document.getElementById('fourtDesp');

firstDesp.style.display='none';
secDesp.style.display='none';
thirdDesp.style.display='none';
fourtDesp.style.display='none';

firstDespT.addEventListener('click', () => {
    if(firstDesp.style.display==='none'){
        firstDesp.style.display='block';
    }else{
        firstDesp.style.display='none';
    }
});
secDespT.addEventListener('click', () => {
    if(secDesp.style.display==='none'){
        secDesp.style.display='block';
    }else{
        secDesp.style.display='none';
    }
});
thirdDespT.addEventListener('click', () => {
    if(thirdDesp.style.display==='none'){
        thirdDesp.style.display='block';
    }else{
        thirdDesp.style.display='none';
    }
});
fourDespT.addEventListener('click', () => {
    if(fourtDesp.style.display==='none'){
        fourtDesp.style.display='block';
    }else{
        fourtDesp.style.display='none';
    }
});
