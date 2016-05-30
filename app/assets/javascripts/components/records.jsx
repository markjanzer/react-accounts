class Records extends React.Component {
  constructor(props, context) {
    // Calls React.Component's constructor with our parameters
    // In comparison to the coffeeScript, I believe state is context and props is props
    super(props, context);
    this.records = props.data;
    this.state = {
      records: this.records
    }
  }

  addRecord(record) {
    let records = this.state.records.slice();
    records.push(record);
    this.setState({records: records});
  }

  credits() {
    const credits = this.state.records.filter((record) => record.amount >= 0);
    return credits.reduce((prev, curr) => prev + curr.amount, 0);
  }

  debits() {
    const debits = this.state.records.filter((record) =>  record.amount < 0);
    return debits.reduce((prev, curr) => prev + curr.amount, 0);
  }

  balance() {
    return this.credits() + this.debits();
  }

  render() {
    return (
      <div className="records">
        <h2 className="title col-md-12">Records</h2>

        <div className="row">
          <AmountBox type="success" amount={this.credits()} text="Credit" />
          <AmountBox type="danger" amount={this.debits()} text="Debit" />
          <AmountBox type="info" amount={this.balance()} text="Balance" />
        </div>

        <RecordForm handleNewRecord={this.addRecord} />

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            { this.state.records.map((record) =>
              <Record key={record.id} record={record} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}