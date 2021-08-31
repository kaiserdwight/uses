export default {
  methods: {
    validateStartDate(event) {
      const selectedDate = this.moment(event.target.value).format("YYYY-MM-DD");
      const endDate = this.moment(this.form.end_date).format("YYYY-MM-DD");
      const dateNow = this.moment().format("YYYY-MM-DD");

      if (selectedDate > dateNow) {
        return this.$set(
          this.errors,
          "start_date",
          "The 'From' date must not be greater than today"
        );
      }

      if (selectedDate < endDate && selectedDate !== endDate) {
        this.$delete(this.errors, "end_date");
      }

      return this.$delete(this.errors, "start_date");
    },

    validateEndDate(event) {
      const selectedDate = this.moment(event.target.value).format("YYYY-MM-DD");
      const startDate = this.moment(this.form.start_date).format("YYYY-MM-DD");
      const dateNow = this.moment().format("YYYY-MM-DD");

      if (selectedDate > dateNow) {
        return this.$set(
          this.errors,
          "end_date",
          "The 'To' date must not be greater than today"
        );
      }

      if (selectedDate < startDate && selectedDate !== startDate) {
        return this.$set(
          this.errors,
          "end_date",
          "The 'To' date must not be less than 'From' date"
        );
      }

      return this.$delete(this.errors, "end_date");
    }
  }
}