 const form=document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

 form.addEventListener('submit',(event:Event)=>{
    event.preventDefault()

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const contactNumber=(document.getElementById('contactNumber') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLTextAreaElement).value
    const experience=(document.getElementById('experience') as HTMLTextAreaElement).value
    const skills=(document.getElementById('skills') as HTMLTextAreaElement).value


    const resumeHTML=`
    <h2> Resume</h2>
    <h3> Personal Information</h3>
    <p> Name:${name}</p>
    <p> Name:${email}</p>
    <p> Name:${contactNumber}</p>
    
    <h3> Education </h3>
    <p> Name:${education}</p>

    <h3> Experience</h3>
    <p> Name:${experience}</p>

    <h3> Skills</h3>
    <p> Name:${skills}</p>`;
 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}
else {
    console.error('error');
}



 })