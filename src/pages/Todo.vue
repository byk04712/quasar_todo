<!--
 * @Author: Do not edit
 * @Date: 2020-11-19 23:23:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-21 00:23:24
 * @Description:
 * @FilePath: /quasar_todo/src/pages/Todo.vue
-->
<template>
  <q-page class="bg-grey-1">
    <div class="q-pa-md bg-primary">
      <q-input class="bg-white" v-model="task" @keyup.enter="handleAddTask" filled square dense label="Add Task" placeholder="Typing task here">
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="handleAddTask" />
        </template>
      </q-input>
    </div>
    <q-separator />
    <q-list v-if="tasks.length" bordered separator>
      <q-item v-for="(task, index) of tasks" :class="{ 'done': task.done }" :key="task.title" class="bg-white" tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.done"></q-checkbox>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section side="">
          <q-btn @click.stop="handleDelete(index)" flat round icon="delete"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="absolute-center text-grey-5">
      <q-icon name="check" size="100px"></q-icon>
      <div class="text-h5">No tasks</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      task: '',
      tasks: []
    }
  },
  methods: {
    handleAddTask () {
      this.tasks.push({
        done: false,
        title: this.task
      })
      this.task = ''
    },
    handleDelete (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really Delele ?',
        cancel: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Task deleted !')
      }).onCancel(() => {
      })
    }
  }
}
</script>
<style lang="stylus">
.done
  background-color $blue-1 !important
  color $grey-7
  .q-item__label
    text-decoration line-through
</style>
