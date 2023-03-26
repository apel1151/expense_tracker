import { useState } from "react";
import styled from "styled-components";

const Container = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    font-family: Montserrat;
    align-items: center;
    margin: 30px 0 10px;

`
const BalanceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & span{
        margin-right: 180px;
        font-weight: bold;
        padding: 5px;
        
    }
`
const AddTransaction = styled.button`
    background: green;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    border: none;
    
`
const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    box-shadow: 0px 0px 10px gray;
    gap: 10px;
    padding: 30px 20px;
    margin: 20px 20px;
    & input{
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
        
    }
    width: 100%;
    height: 200px;
`
const RadioBox = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   margin-top: 30px;
   align-items: center;
   & input {
    width: unset;
    margin: 0 15px;
    
   }
`
const AddTransactionView = (props) =>{
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");
    const addTransaction = () =>{
        props.addTransaction({
            amount: Number(amount),
            desc,
            type,
            id: Date.now(),
        });
        props.toggleAddTxn();
    };

    return(
       <AddTransactionContainer>
                    <input 
                        placeholder="Amount" 
                        value={amount} 
                        type ="number" 
                        onChange={(e)=>setAmount(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="Description" 
                        value={desc} onChange={(e)=>setDesc(e.target.value)}
                    />
                    <RadioBox>
                        <input type="radio" 
                            id="expense" 
                            name="type" 
                            value="EXPENSE" 
                            checked={type==="EXPENSE"} 
                            onChange={(e)=>setType(e.target.value)} 
                        />
                        <label htmlFor="expense">Expense</label>
                        <input 
                            type="radio" 
                            id="income" 
                            name="type" 
                            value="INCOME" 
                            checked={type==="INCOME"} 
                            onChange={(e)=>setType(e.target.value)} 
                        />
                        <label htmlFor="expense">Income</label>
                    </RadioBox>
                <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
       </AddTransactionContainer>
    )
}

// expense and balance container section

const ExpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 20px;
`
const ExpenseBox = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 4px;
   border: 3px solid #e6e6e6;
   padding: 15px 20px;
   width: 135px;
   font-size: 14px;


   & span{
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    color: ${props =>props.isIncome? "green": "red"};
   }
`

const OverviewComponent = (props) =>{
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    return(
        <Container>
          <BalanceBox>
              Balance   <span>${props.income-props.expense}</span> 
                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>
                     {isAddTxnVisible? "Cancel" : "Add"}
                </AddTransaction>
          </BalanceBox>
          {isAddTxnVisible && <AddTransactionView 
                                     toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}>
                              </AddTransactionView>}
         
          <ExpenseContainer>
              <ExpenseBox isIncome={false}>
                    Expense <span>${props.expense}</span>
              </ExpenseBox>
              <ExpenseBox isIncome={true}>
                    Income <span>${props.income}</span>
              </ExpenseBox>
          </ExpenseContainer>
        
        </Container>


    )
}
export default OverviewComponent