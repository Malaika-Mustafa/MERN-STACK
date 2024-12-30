
var selectedRow = null;


function onFormSubmit() {

        var formData = readFormData();
       
        if (selectedRow == null)
            insertNewRecord(formData);
    
        resetForm();
  
}

function onUpdatedFormSubmit() {
    const updateForm=document.getElementById('update-form'); 
    
         var updatedformData= readUpdatedFormData();
         if (selectedRow != null)
            updateRecord(updatedformData);
    updateForm.style.display ='None';
    resetForm();
    
}
function Student(name,email,phoneNo,address) {
   this.name = name;
   this.email = email;
   this.phoneNo = phoneNo;
   this.address = address;  
 }
 
function readFormData() {
    
    const name=document.getElementById("name").value;
    const email=document.getElementById('email').value;
    const phoneNo=document.getElementById('phoneNo').value;
    const address=document.getElementById('address').value;
    const student = new Student(name,email,phoneNo,address);
   return student;
    }
function readUpdatedFormData() {

    const name=document.getElementById("newName").value;
    const email=document.getElementById('newEmail').value;
    const phoneNo=document.getElementById('newPhoneNo').value;
    const address=document.getElementById('newAddress').value;
    const student_ = new Student(name,email,phoneNo,address);
    return student_;
    }

function toggleTableHeader() {
    const table = document.getElementById('studentList');
    const tbody = table.getElementsByTagName('tbody')[0];
    const thead = table.getElementsByTagName('thead')[0];
    if (tbody.rows.length === 0) {
        thead.style.display = 'none';
    } else {
        thead.style.display = 'table-header-group';
    }
}
    
function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneNo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>`;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = ` <button onClick="onDelete(this)">Delete</button>`;
    toggleTableHeader() 
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}


function onEdit(td) {
    const updateForm=document.getElementById('update-form'); 
    selectedRow = td.parentElement.parentElement;
    updateForm.style.display ='block';
    document.getElementById("newName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("newEmail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("newPhoneNo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("newAddress").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(updatedformData) {
    selectedRow.cells[0].innerHTML = updatedformData.name;
    selectedRow.cells[1].innerHTML = updatedformData.email;
    selectedRow.cells[2].innerHTML = updatedformData.phoneNo;
    selectedRow.cells[3].innerHTML = updatedformData.address;
}


function onDelete(td) {
    const deleteDiv =document.getElementById('delete');
    const yes =document.getElementById('yes');
    const no =document.getElementById('no');
    row = td.parentElement.parentElement;
    deleteDiv.style.display='block';
    yes.onclick = function(){
        
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
        toggleTableHeader() ;
        deleteDiv.style.display='none'; 
       
    };
    no.onclick = function(){
        deleteDiv.style.display='none';      
    };
    
}
document.addEventListener('DOMContentLoaded', toggleTableHeader);





