import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn">TAMBAH</button>
          <h1 className="header-title">Catatan Kerja</h1>
          <button className="header-btn main-red-color">HAPUS</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn main-black-color">TAMBAH</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
          <div className="todo">
            <span className="todo-text">Belajar react</span>
          </div>
        </section>
      </div>
    </div>
  );
}
