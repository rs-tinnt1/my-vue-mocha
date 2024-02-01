<template>
  <div>
    <DataTable v-model:selection="selectedUser" :value="users" data-key="id" table-style="min-width: 50rem">
      <Column selection-mode="single" header-style="width: 3rem"></Column>
      <Column field="id" header="No"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, ref, watch } from "vue";

import { IUser } from "@/core/dto/userDto";
import ApiService from "@/core/services/api.service";

const users = ref<IUser[]>([]);
const props = defineProps<{
  user: IUser | null;
}>();

const selectedUser = ref<IUser | null>(props.user);
const emit = defineEmits(["update:user"]);

onMounted(async () => {
  const res = await ApiService.GET("/user", { params: { page: 1, limit: 10 } });
  users.value = res.data;
});

watch(selectedUser, (newVal) => {
  emit("update:user", newVal);
});
</script>
