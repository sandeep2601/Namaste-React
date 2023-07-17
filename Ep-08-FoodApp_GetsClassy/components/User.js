const User = (params) => {
  return (
    <div className="user-card">
      <h2>Name: {params.name}</h2>
      <h3>Location: {params.location}</h3>
      <h4>Contact: sandeepverma</h4>
    </div>
  );
};

export default User;
