<template>
    <div class="about">
        <h1>This is an Department page</h1>
        <button type="button" class="btn btn-primary m-2 float-start" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">Add Department</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        <div class="d-flex flex-row">
                            <input type="text" class="form-control m-2" v-model="DepartmentIdFilter" v-on:keyup="FilterFn()" placeholder="Filter" />

                            <button type="button" class="btn btn-light" @click="sortResult('DepartmentId', true)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                </svg>
                            </button>

                            <button type="button" class="btn btn-light" @click="sortResult('DepartmentId', false)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                </svg>
                            </button>
                        </div>
                        Department Id
                    </th>
                    <th>
                        <div class="d-flex flex-row">
                            <input type="text" class="form-control m-2" v-model="DepartmentIdFilter" v-on:keyup="FilterFn()" placeholder="Filter" />

                            <button type="button" class="btn btn-light" @click="sortResult('DepartmentName', true)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                </svg>
                            </button>

                            <button type="button" class="btn btn-light" @click="sortResult('DepartmentName', false)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                </svg>
                            </button>
                        </div>
                        Department Name
                    </th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in departments" :key="dep.DepartmentId">
                    <td>{{ dep.DepartmentId }}</td>
                    <td>{{ dep.DepartmentName }}</td>
                    <td>
                        <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(dep)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>
                        <button type="button" class="btn btn-light mr-1" @click="deleteClick(dep.DepartmentId)">
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
                        <div class="input-group mb-3">
                            <span class="input-group-text">Department Name</span>
                            <input type="text" class="form-control" v-model="DepartmentName" />
                        </div>
                        <button type="button" @click="createClick(dep)" v-if="DepartmentId == 0" class="btn btn-primary">Create</button>
                        <button type="button" @click="updateClick(dep)" v-if="DepartmentId != 0" class="btn btn-primary">Update</button>
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
        const departments = ref([]);
        const modalTitle = ref('');
        const DepartmentName = ref('');
        const DepartmentId = ref(0);
        const DepartmentNameFilter = ref('');
        const DepartmentIdFilter = ref('');
        const DepartmentWithoutFilter = ref([]);

        const refreshData = () => {
            axios.get(variables.API_URL + 'department').then((response) => {
                departments.value = response.data;
                DepartmentWithoutFilter.value = response.data;
            });
        };

        const addClick = () => {
            modalTitle.value = 'Add Department';
            DepartmentId.value = 0;
            DepartmentName.value = '';
        };

        const editClick = (dep) => {
            modalTitle.value = 'Edit Department';
            DepartmentId.value = dep.DepartmentId;
            DepartmentName.value = dep.DepartmentName;
        };

        const createClick = () => {
            axios.post(variables.API_URL + 'department', { DepartmentName: DepartmentName.value }).then((response) => {
                refreshData();
                alert(response.data);
            });
        };

        const updateClick = () => {
            axios
                .put(variables.API_URL + 'department', {
                    DepartmentId: DepartmentId.value,
                    DepartmentName: DepartmentName.value,
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
            axios.delete(variables.API_URL + 'department/' + id).then((response) => {
                refreshData();
                alert(response.data);
            });
        };

        const FilterFn = () => {
            DepartmentNameFilter;
            var DepartmentIdFilter = DepartmentIdFilter.value;
            var DepartmentNameFilter = DepartmentNameFilter.value;

            departments.value = DepartmentWithoutFilter.value.filter(function (el) {
                return el.DepartmentId.toString().toLowerCase().includes(DepartmentIdFilter.toString().trim().toLowerCase()) && el.DepartmentName.toString().toLowerCase().includes(DepartmentNameFilter.toString().trim().toLowerCase());
            });
        };

        const sortResult = (prop, asc) => {
            departments.value = DepartmentWithoutFilter.value.sort(function (a, b) {
                if (asc) {
                    return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
                } else {
                    return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
                }
            });
        };

        // 使用 onMounted 替代 Vue 2 的 created 鉤子
        onMounted(() => {
            refreshData();
        });

        // 在 setup 函數中返回對外公開的數據和方法
        return {
            departments,
            modalTitle,
            DepartmentName,
            DepartmentId,
            DepartmentNameFilter,
            DepartmentIdFilter,
            DepartmentWithoutFilter,
            refreshData,
            addClick,
            editClick,
            createClick,
            updateClick,
            deleteClick,
            FilterFn,
            sortResult,
        };
    },
};
</script>

<style>
.btn {
    margin: 0 6px;
}
</style>
