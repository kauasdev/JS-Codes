const container = document.querySelector('.container');
container.addEventListener('submit', (e)=>{
	e.preventDefault();
});
function toggleBox(){
	container.classList.toggle('active');
}
function valitedSingInFields() {
	const email = document.querySelector('#singIn__userEmail').value;
	const singInNoEmail = document.querySelector('#singIn__noEmail');
	const singInErrorEmail = document.querySelector('#singIn__errorEmail');
	const password = document.querySelector('#singIn__password').value;
	const singInNoPass = document.querySelector('#singIn__noPass');
	
	emptyEmail(email, singInNoEmail);
	if(email){
		isEmail(email, singInErrorEmail);
	}
	emptyPass(password, singInNoPass);
}
function emptyEmail(email, singInNoEmail){
	if(email){
		singInNoEmail.style.display = 'none';
	}else{
		singInNoEmail.style.display = 'block';
		setInterval(()=>{
			singInNoEmail.style.display = 'none';
		}, 4000)
	}
}
function isEmail(email, singInErrorEmail){
	let space = ' ';
	let at = '@';
	
	if(email.indexOf(space) == -1 && email.indexOf(at) != -1){
		singInErrorEmail.style.display = 'none';
	}else{
		singInErrorEmail.style.display = 'block';
		setInterval(()=>{
			singInErrorEmail.style.display = 'none';
		}, 4000)
	}
}
function emptyPass(password, singInNoPass){
	if(password){
		singInNoPass.style.display = 'none';
	}else{
		singInNoPass.style.display = 'block';
		setInterval(()=>{
			singInNoPass.style.display = 'none';
		}, 4000)
	}
}