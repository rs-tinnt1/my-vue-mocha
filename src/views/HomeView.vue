<template>
  <div class="home max-w-1080 px-4 py-2">
    <div class="flex flex-row gap-5">
      <div class="w-9">
        <UserTable :user="user" />
      </div>
      <div class="w-3 h-min">
        <div class="w-full h-min flex justify-content-end mb-5">
          <PrimeButton label="Add" severity="success" class="mr-2" @click="mode = 'add'" />
          <PrimeButton label="Edit" severity="info" class="mr-2" @click="mode = 'edit'" />
          <PrimeButton label="Delete" severity="danger" class="mr-2" />
        </div>
        <div class="w-full h-min flex justify-content-end mb-5">
          <UserForm v-model:user="user" mode="view" />
        </div>
      </div>
    </div>
    <div v-if="mode !== 'view'" class="w-full flex justify-content-end gap-5">
      <PrimeButton label="Cancel" severity="secondary" />
      <PrimeButton label="Submit" />
    </div>
  </div>
</template>

<script lang="ts">
import UserForm from "@/components/UserForm.vue";
import UserTable from "@/components/UserTable.vue";
import { UserDto } from "@/core/dto/userDto";
import PrimeButton from "primevue/button";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    UserForm,
    UserTable,
    PrimeButton,
  },
  setup() {
    const user = ref<UserDto>({
      id: "1",
      name: "John Doe",
      email: "aeffe",
      code: "3",
      address: "",
      phone: "",
    });

    const mode = ref<"view" | "edit" | "add">("view");

    const errors = ref({
      name: "error fefeferw fae fefef  fef",
    });

    // const handleDeleteUser = () => {
    //   console.log("delete user");
    // };

    return { user, errors, mode };
  },
});
</script>
