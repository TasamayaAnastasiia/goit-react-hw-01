import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = props => {
    return (
        <table className={css.table}>
            <thead className={css.containerTitle}>
                <tr className={css.rowTitle}>
                <th className={css.cellTitle}>Type</th>
                <th className={css.cellTitle}>Amount</th>
                <th className={css.cellTitle}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.containerRow}>
                {props.items.map(transaction => (
                    <tr className={css.rowData} key={transaction.id}>
                        <td className={css.cellData}>{transaction.type}</td>
                        <td className={css.cellData}>{transaction.amount}</td>
                        <td className={css.cellData}>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}
export default TransactionHistory;