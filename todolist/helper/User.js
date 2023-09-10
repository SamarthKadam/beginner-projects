 const parent=document.querySelector('.secondPart');
 class User{

    constructor(Name,Gender,Date,Email,Phone)
    {
        this.Name=Name;
        this.Gender=Gender;
        this.Date=Date;
        this.Email=Email;
        this.Phone=Phone;
    }
    render()
    {
        let html=`<div class="users">
        <img class="logo-person" src="/user.png" alt="">
        <div class="details">
          <div class="name">${this.Name}</div>
          <div class="email-phone"><img class="email-icon"  src="https://i.ibb.co/nRxd7pp/email.png" alt=""> ${this.Email} |<img class="phone-icon" src="https://i.ibb.co/16KtPr4/phone-call.png" alt=""> ${this.Phone}</div>
          <div class="view-details">View Details ></div>
        </div>
      </div>`
        parent.insertAdjacentHTML('beforeend',html);
    }
}
export default User;