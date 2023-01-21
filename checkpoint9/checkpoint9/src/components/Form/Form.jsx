import React from "react";
import module from "./Form.module.css";
export default function Form() {
  return (
    <form className={module.secret}>
      <div class="form-group">
        <label for="exampleInput">Tell me a secret !</label>
        <input type="text" class="form-control" id="exampleInput" />
        <small id="note" class="form-text text-muted">
          We'll never share your secret with anyone else.
        </small>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
