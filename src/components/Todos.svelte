<script>
  import { onMount, onDestroy } from 'svelte';

  let todos = [];
  let newTodo = { task: "", isCompleted: false };
  let showTodos = false;

  const addTodo = () => {
    if (newTodo.task.trim() !== "") {
      todos = [...todos, { ...newTodo }];
      newTodo = { task: "", isCompleted: false };
    }
  };

  const removeTodo = (index) => {
    todos = todos.filter((_, i) => i !== index);
  };

  const toggleShowTodos = () => {
    event.stopPropagation();
    showTodos = !showTodos;
  };

  const toggleTodoCompletion = (index) => {
    todos[index].isCompleted = !todos[index].isCompleted;
  };
  const hideTodos = () => {
    showTodos = false;
  };


onMount(() => {
  window.addEventListener('click', hideTodos);
});

onDestroy(() => {
  window.removeEventListener('click', hideTodos);
});
</script>

<div class="todos">
  <button on:click={toggleShowTodos}>Todos</button>

  {#if showTodos}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="todos-popup" on:click|stopPropagation>
      <form on:submit|preventDefault={addTodo} class="todos-input">
        <input
          type="text"
          bind:value={newTodo.task}
          placeholder="What our main focus today?"
        />
      </form>
      <ul>
        {#each todos as todo, index (todo.task)}
          <li>
            <button
              class="todo-item"
              class:completed={todo.isCompleted}
              on:click={() => toggleTodoCompletion(index)}
            >
              {todo.task}
            </button>
            <button on:click={() => removeTodo(index)}>
              <img
                src="images/delete.png"
                alt="Delete todo"
                width="18px"
                height="18px"
              />
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .todos {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
  }

  .todos-popup {
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 20rem;
    max-width: 20rem;
  }

  .todos-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  input {
    /* remove default input styles */
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    outline: none;
    font-size: 1rem;
    width: 100%;
    padding: 0 0 4px 4px;
  }

  .todo-item {
    text-align: start;
  }

  .todo-item:hover {
    text-decoration: line-through;
    transition: text-decoration 3s ease;
  }

  button {
    /* remove default button styles */
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    font-size: 1rem;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    overflow-wrap: anywhere;
  }

  li:first-child {
    margin-top: 20px;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
