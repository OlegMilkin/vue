<template>
    <div class="row">
        <div class="col-lg-4">
            <select class="form-control" v-model="localSelected">
                <option disabled value="">How many items per page</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
            </select>
            <br>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'UserDropdownComponent',
        data: () => ({
            localSelected: null,
        }),
        model: {
            prop: 'selected',
            event: 'change'
        },
        props: {
            selected: {
                type: Number,
                required: true
            }
        },
        watch: {
            selected: {
               handler(){
                    if( this.selected === this.localSelected ) {
                        return
                    }

                   this.localSelected = this.selected;
               }
            },
            localSelected: {
                handler() {
                    this.$emit('change', Number(this.localSelected));
                }
            }
        },
        created() {
            this.localSelected = this.selected;
        }
    }
</script>
