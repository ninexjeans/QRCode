document.getElementById('partnerForm').addEventListener('submit',e=>{
e.preventDefault();
const data={
company:company.value,
person:person.value,
mobile:mobile.value,
location:location.value,
type:type.value,
timestamp:new Date().toISOString()
};
console.log(data);
document.getElementById('msg').innerText='Thank you! Registration submitted.';
e.target.reset();
});
