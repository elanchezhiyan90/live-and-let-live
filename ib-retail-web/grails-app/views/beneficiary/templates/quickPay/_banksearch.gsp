<g:form id="getBankInfo">
        <fieldset class="ui-helper-reset">
      <g:hiddenField name="bankType" id="bankType" value="${bankType}"/>
 		<table width="100%" border="0" cellpadding="4" cellspacing="4" > 		
                              <tr>
                                
                                <g:textField name="getbankCode" id="getbankCode" placeholder="${g.message(code:'beneficiary.templates.quickPay.banksearch.bankcode.placeholder.text') }" />&nbsp;
                                <g:textField name="getbankName" id="getbankName" placeholder="Bank Name" />&nbsp;
                                <g:textField name="getbranchName" id="getbranchName" placeholder="Branch Name" />&nbsp;
                                <g:submitToRemote id="searchBank" value="Search" class="btn_next"  name="searchBank"
											action="searchBankCodeDetails"
											controller="beneficiary"		
											update = "updateSearchDiv" 		
											onSuccess= "showdata()"																					
									/>
                                                         
                              </tr>       
            </table>
            
            
    
            <vayana:pager action="searchBankCodeDetails" controller="beneficiary" update="updateSearchDiv" paramsModel="\'&bankType=\'+getViewBankType()+\'&getbankCode=\'+getBankCode()+\'&getbankName=\'+getBankName()+\'&getbranchName=\'+getBranchName()"></vayana:pager>
  
     	   <div id="updateSearchDiv">	
     	   		<g:render template="/beneficiary/templates/quickPay/bankSearchList"/>	                     
	        </div>
	        
        </fieldset>
        <div class="buttons">
       	 	<input type="button" value="Add" name="add" id="add" >
 			<input type="button" value="Cancel" name="cancelCode" id="cancelCode" class="cancelForm btn_next">
 		</div>
    </g:form>
<script>
$(function(){
	$("#bankType").val(getPayeeBankType());

	$(".previous")
		.button({
	   text: false,
	   icons: { primary: "ui-icon-triangle-1-w"}
	 	})
		.click(function() {
	          $(".pagenum").removeClass("form-ui-invalid")
	   })
	.next()
	.button({
	   text: false,
	   icons: { primary: "ui-icon-triangle-1-e"}
	 	}).click(function(){
	 		 $(".pagenum").removeClass("form-ui-invalid")
			}).parent()
	               .buttonset();
		
	$(".gobtn").button({
		text: false,
	   icons: { primary: "ui-icon-arrowreturnthick-1-e"}
	})
	
	 $(".pagenum").blur(function(){
		 var value=$(this).val();
		 var maxm=$(this).attr("max");
		 if(value>maxm){
		 $(this).addClass("form-ui-invalid")
		 }
	 });
		 
	pagerSuccess();
});
$("#add").click(function(){
	addBankInfo();
	$.fn.ceebox.closebox();
});
$("#cancelCode").click(function(){
	$.fn.ceebox.closebox();
});
function showdata(){
$("#updateSearchDiv").dynamicfieldupdate();
pagerSuccess();
}
function getViewBankType(){
	var val = $("#bankType").val();
	return val;
}
function getBankCode(){
	var val = $("#getbankCode").val();
	return val;
}
function getBankName(){
	var val = $("#getbankName").val();
	return val;
}
function getBranchName(){
	var val = $("#getbranchName").val();
	return val;
}
</script>