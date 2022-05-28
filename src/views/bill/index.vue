<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px; margin-bottom: 10px"
        type="primary"
        icon="el-icon-plus"
        size="small"
        @click="addDrawer('add')"
      >
        新增
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" width="80" label="序号" fixed>
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="账单类型" width="140" align="center">
        <template slot-scope="{ row }">
          {{ row.scheduleTime }}
        </template>
      </el-table-column>

      <el-table-column label="账单分类" width="140" align="center">
        <template slot-scope="{ row }">
          {{ row.scheduleTime }}
        </template>
      </el-table-column>

      <el-table-column label="账单时间" width="140" align="center">
        <template slot-scope="{ row }">
          {{ row.scheduleTime }}
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="{ row }">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="mini"
            @click="editDrawer('edit', row)"
          >
            编辑
          </el-button>
          <el-button
            icon="el-icon-delete-solid"
            type="primary"
            size="mini"
            @click="deleteItem(row.scheduleId)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="padding-top: 10px"
      background
      :hide-on-single-page="true"
      layout="total, prev, pager, next, jumper"
      :page-size="pageSize"
      :pager-count="11"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pageSize: 15, // 设置每页显示条目个数为15
      currentPage: 1, // 设置当前页默认为1
      total: 0,
      list: null,
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios
        .post('http://localhost:8080/api/bill/getBillList', {
          pageNum: this.currentPage,
          pageSize: this.pageSize
        })
        .then((res) => {
          console.log(res.data)
        })
    },
    // 翻页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.fetchData()
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

