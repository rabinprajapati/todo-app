const Bus = ({ value }) => {
  return <>{value === "goal" ? <Goal /> : <Missed />}</>;
};
const Goal = () => {
  return <>Goal</>;
};
const Missed = () => {
  return <>Missed</>;
};
export default Bus;
