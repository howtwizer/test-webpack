<template>
    <form action="" @submit.prevent="submit">
        <span class="payment-errors"></span>
        <div class="form-group">
            <label>
                <span>Card Number</span>
                <input v-model="number" type="text" size="20" data-securionpay="number"/>
            </label>
        </div>

        <div class="form-group">
            <label>
                <span>CVC</span>
                <input v-model="cvc" type="text" size="4" data-securionpay="cvc"/>
            </label>
        </div>

        <div class="form-group">
            <label>
                <span>Expiration (MM/YYYY)</span>
                <input v-model="expMonth" type="text" size="2" data-securionpay="expMonth"/>
            </label>
            <span> / </span>
            <input v-model="expYear" type="text" size="4" data-securionpay="expYear"/>
        </div>

        <button name="button" type="submit" class="btn btn-primary btn-lg btn-block" :disabled="disabled"
                data-disable-with="<i class='fa fa-spinner fa-spin'></i> Updating...">
            Update Card
        </button>
    </form>
</template>

<script>
    export default {
        name   : 'CardForm',
        props  : {
            path  : {
                type    : String,
                required: true
            },
            planId: String
        },
        data   : function (){
            return {
                number  : '',
                cvc     : '',
                expMonth: '',
                expYear : '',
                disabled: false
            };
        },
        methods: {
            submit(e){
                this.disabled = true;

                const data = {
                    number  : this.number,
                    cvc     : this.cvc,
                    expMonth: this.expMonth,
                    expYear : this.expYear,
                    planId  : this.planId
                };

                this.$http(this.path, 'POST', data).then(
                    (success) => {
                        this.disabled = false;
                    },
                    (error) => {
                        this.disabled = false;
                    }
                );
            }
        }
    };
</script>

<style scoped>

</style>