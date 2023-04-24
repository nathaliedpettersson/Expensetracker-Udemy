import ExpenseItem from './ExpenseItem';
import '../style/ExpensesList.css';

const ExpensesList = (props) => {
    // If selected year does not have items to show, use default h2-tag. Else, render item(s)
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
	}

	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;