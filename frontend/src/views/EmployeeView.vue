<template>
    <div class="about">
        <h1>This is an Employee page</h1>
        <button type="button" class="btn btn-primary m-2 float-start" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">Add Employee</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                    <th>DOJ</th>
                    <th>PhotoFile Name</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in Employees" :key="emp.EmployeeId">
                    <td>{{ emp.EmployeeId }}</td>
                    <td>{{ emp.EmployeeName }}</td>
                    <td>{{ emp.Department }}</td>
                    <td>{{ emp.DateOfJoin }}</td>
                    <td>{{ emp.PhotoFileName }}</td>
                    <td>
                        <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(emp)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>
                        <button type="button" class="btn btn-light mr-1" @click="deleteClick(emp.EmployeeId)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ modalTitle }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="p-2 2-50 bd-highlight">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Name</span>
                                    <input type="text" class="form-control" v-model="EmployeeName" />
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Department</span>
                                    <select v-model="Department">
                                        <option v-for="dep in departments" :key="dep.DepartmentId">
                                            {{ dep.DepartmentName }}
                                        </option>
                                    </select>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">DOG</span>
                                    <input type="date" class="form-control" v-model="DateOfJoin" />
                                </div>
                            </div>
                            <div class="p-2 w-50 bd-highlight">
                                <img width="250px" height="250px" :src="PhotoPath + PhotoFileName" alt="" />
                                <input type="file" class="m-2" @change="imageUpload" />
                            </div>
                        </div>
                        <button type="button" @click="createClick(emp)" v-if="EmployeeId == 0" class="btn btn-primary">Create</button>
                        <button type="button" @click="updateClick(emp)" v-if="EmployeeId != 0" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import variables from '../variables.js'; // 請替換成你的變數文件路徑

export default {
    setup() {
        const Departments = ref([]);
        const Employees = ref([]);
        const modalTitle = ref('');
        const EmployeeId = ref(0);
        const EmployeeName = ref('');
        const Department = ref('');
        const DateOfJoin = ref('');
        const PhotoFileName = ref('anonymous.png');
        const PhotoPath = variables.PHOTO_URL;

        const refreshData = () => {
            axios.get(variables.API_URL + 'employee').then((response) => {
                Employees.value = response.data;
            });

            axios.get(variables.API_URL + 'department').then((response) => {
                Departments.value = response.data;
            });
        };

        const addClick = () => {
            modalTitle.value = 'Add Employee';
            EmployeeId.value = 0;
            EmployeeName.value = '';
            Department.value = '';
            DateOfJoin.value = '';
            PhotoFileName.value = 'anonymous.png';
        };

        const editClick = (emp) => {
            modalTitle.value = 'Edit Employee';
            EmployeeId.value = emp.EmployeeId;
            EmployeeName.value = emp.EmployeeName;
            Department.value = emp.Department;
            DateOfJoin.value = emp.DateOfJoin;
            PhotoFileName.value = emp.PhotoFileName;
        };

        const createClick = () => {
            axios
                .post(variables.API_URL + 'employee', {
                    EmployeeName: EmployeeName.value,
                    Department: Department.value,
                    DateOfJoin: DateOfJoin.value,
                    PhotoFileName: PhotoFileName.value,
                })
                .then((response) => {
                    refreshData();
                    alert(response.data);
                });
        };

        const updateClick = () => {
            axios
                .put(variables.API_URL + 'employee', {
                    EmployeeId: EmployeeId.value,
                    EmployeeName: EmployeeName.value,
                    Department: Department.value,
                    DateOfJoin: DateOfJoin.value,
                    PhotoFileName: PhotoFileName.value,
                })
                .then((response) => {
                    refreshData();
                    alert(response.data);
                });
        };

        const deleteClick = (id) => {
            if (!confirm('Are you sure?')) {
                return;
            }
            axios.delete(variables.API_URL + 'employee/' + id).then((response) => {
                refreshData();
                alert(response.data);
            });
        };

        const imageUpload = (event) => {
            let formDate = new FormData();
            formDate.append('file', event.target.files[0]);
            axios.post(variables.API_URL + 'employee/savefile', formDate).then((response) => {
                PhotoFileName.value = response.data;
            });
        };

        // 使用 onMounted 替代 Vue 2 的 created 鉤子
        onMounted(() => {
            refreshData();
        });

        // 在 setup 函數中返回對外公開的數據和方法
        return {
            Employees,
            modalTitle,
            EmployeeId,
            EmployeeName,
            Department,
            DateOfJoin,
            PhotoFileName,
            PhotoPath,
            refreshData,
            addClick,
            editClick,
            createClick,
            updateClick,
            deleteClick,
            imageUpload,
        };
    },
};
</script>

<style>
.btn {
    margin: 0 6px;
}
</style>
