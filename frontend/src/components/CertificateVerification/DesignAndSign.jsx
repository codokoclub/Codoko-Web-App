
function DesignAndSign({signImg,designation,name})
{
    return(

        <div className="DesignAndSign  flex flex-col items-center justify-center">
<div className="DesignAndSignImg">
<img src={signImg} width="111px" height="49px" alt="sign_not_displayed" />
</div>
<div className="DesignAndSignDesignation font-extrabold">{designation}</div>
<div className="DesignAndSignName">{name}</div>
        </div>  
          )
}

export default DesignAndSign