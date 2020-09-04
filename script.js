class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}
    BankAccount.prototype.withdraw = function(amount) {
    return this.balance-=amount;

}
    BankAccount.prototype.deposit = function(amount) {
    return this.balance+=amount;

}
var bankAccount = new BankAccount("", 0)

$(document).ready(function (e) {
    $("#register").submit(function (e) {

        e.preventDefault();

        var nameInput = $("#name").val();
        var balInput = parseInt($("#initial-balance").val());
        bankAccount.name = nameInput;
        bankAccount.balance = balInput;

        $("#current-bal").append(bankAccount.balance);

        var nameInput = $("#name").val("");
        var balInput = $("#initial-balance").val("");

    });
    $("#amount-deposit").submit(function (e) {

        e.preventDefault();

        var depositInput = parseInt($("#deposit").val());
        bankAccount.deposit(depositInput);
        $("#current-bal").empty();
        $("#current-bal").append(bankAccount.balance);

        var depositInput = $("#deposit").val("");

    });

    $("#amount-withdrawn").submit(function (e) {

        e.preventDefault();
        var withdrawInput = parseInt($("#withdraw").val());
        if (withdrawInput > bankAccount.balance) {
            alert("You have insufficient balance in your account")
        } else {
            bankAccount.withdraw(withdrawInput);
            $("#current-bal").empty();
            $("#current-bal").append(bankAccount.balance);

            var withdrawInput = $("#withdraw").val("");

        }

    });
});


