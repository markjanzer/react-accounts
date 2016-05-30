class Record extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
      </tr>
    )
  }
}