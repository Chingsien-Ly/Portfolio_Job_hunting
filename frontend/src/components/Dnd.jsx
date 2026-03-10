import React, { useMemo, useState } from "react";
import Dot2 from "../assets/dot2.svg";
import Edit from "../assets/edit.svg"; // ✅ adjust path
import RadioButton from "./RadioButton"; // ✅ adjust path

export default function Dnd() {
  const [lists, setLists] = useState([
    {
      id: "1",
      title: "To Do",
      cards: [
        { id: "11", title: "Design login page UI", completed: false },
        { id: "12", title: "Fix navbar alignment issue", completed: true },
        {
          id: "13",
          title: "Write unit tests for auth module",
          completed: false,
        },
      ],
    },
    {
      id: "2",
      title: "In Progress",
      cards: [
        { id: "21", title: "Implement drag & drop feature", completed: true },
        { id: "22", title: "Optimize API response time", completed: false },
      ],
    },
  ]);

  // ✅ edit state (used by your new card UI)
  const [onClickEdit, setOnClickEdit] = useState("");

  // store drag info (source list + index + card id)
  const [dragging, setDragging] = useState(null); // { fromListId, fromIndex, cardId }
  const [over, setOver] = useState(null); // { toListId, toIndex }

  const listOrder = useMemo(() => lists.map((l) => l.id), [lists]);

  function findListById(listId) {
    return lists.find((l) => l.id === listId);
  }

  function onDragStart(e, fromListId, fromIndex) {
    const fromList = findListById(fromListId);
    const card = fromList.cards[fromIndex];

    setDragging({ fromListId, fromIndex, cardId: card.id });

    // Required for Firefox
    // e.dataTransfer.setData("text/plain", card.id);
    // e.dataTransfer.effectAllowed = "move";
  }

  function onDragOver(e, toListId, toIndex) {
    e.preventDefault(); // allow drop
    setOver({ toListId, toIndex });
    e.dataTransfer.dropEffect = "move";
  }

  function onDrop(e, toListId, toIndex) {
    e.preventDefault();
    if (!dragging) return;

    const { fromListId, fromIndex } = dragging;

    setLists((prev) => {
      // shallow copy outer list array
      const next = prev.map((l) => ({ ...l, cards: [...l.cards] }));

      const fromList = next.find((l) => l.id === fromListId);
      const toList = next.find((l) => l.id === toListId);

      if (!fromList || !toList) return prev;

      // remove from source
      const [moved] = fromList.cards.splice(fromIndex, 1);

      // compute insert index (same list shift fix)
      let insertIndex = toIndex;
      if (fromListId === toListId && fromIndex < toIndex) insertIndex -= 1;

      // insert into target
      toList.cards.splice(insertIndex, 0, moved);

      return next;
    });

    setDragging(null);
    setOver(null);
  }

  function onDragEnd() {
    setDragging(null);
    setOver(null);
  }

  return (
    <div className="flex gap-5">
      {listOrder.map((listId) => {
        const list = findListById(listId);
        if (!list) return null;

        return (
          <div
            key={list.id}
            className="p-4 w-[350px] min-h-[20%] max-h-[calc(100%-20px)] rounded-lg bg-[#101204] flex flex-col"
            onDragOver={(e) => onDragOver(e, list.id, list.cards.length)}
            onDrop={(e) => onDrop(e, list.id, list.cards.length)}
          >
            {/* Header */}
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-lg text-[#cecfd2]">
                {list.title}
              </div>
              <img src={Dot2} alt="options" className="size-5 cursor-pointer" />
            </div>

            {/* ✅ REPLACED MIDDLE PART (cards rendering) */}
            <div className="flex-1 min-h-0 mt-3 ">
              {list?.cards?.map((card, index) => {
                const isDropTarget =
                  over?.toListId === list.id && over?.toIndex === index;

                const isDraggingThis = dragging?.cardId === card.id;

                return (
                  <div key={card.id}>
                    {/* drop indicator line */}
                    <div
                      className={`h-2 rounded ${
                        isDropTarget ? "bg-amber-500" : "bg-transparent"
                      }`}
                      onDragOver={(e) => onDragOver(e, list.id, index)}
                      onDrop={(e) => onDrop(e, list.id, index)}
                    />

                    <div
                      draggable
                      onDragStart={(e) => onDragStart(e, list.id, index)}
                      onDragEnd={onDragEnd}
                      className={[
                        "hover:border-primary hover:border border border-transparent group flex items-center gap-2 bg-[#242528] text-white p-3 rounded-md shadow-sm mb-3 min-h-12 max-h-[100px]  select-none transition ",
                        // ✅ hide original while dragging to avoid “duplicate” look
                        isDraggingThis ? "opacity-0" : "",
                      ].join(" ")}
                    >
                      {/* Radio wrapper */}
                      {onClickEdit === "" && (
                        <RadioButton
                          completed={card.completed}
                          isDefault={false}
                        />
                      )}

                      {/* Title */}
                      {onClickEdit === card.id ? (
                        <input
                          type="text"
                          value={card.title}
                          className="w-full h-full p-1 bg-transparent outline-none"
                          onChange={(e) => {
                            const newTitle = e.target.value;

                            setLists((prev) =>
                              prev.map((l) =>
                                l.id === list.id
                                  ? {
                                      ...l,
                                      cards: l.cards.map((c) =>
                                        c.id === card.id
                                          ? { ...c, title: newTitle }
                                          : c
                                      ),
                                    }
                                  : l
                              )
                            );
                          }}
                          onBlur={() => setOnClickEdit("")}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") setOnClickEdit("");
                            if (e.key === "Escape") setOnClickEdit("");
                          }}
                          autoFocus
                        />
                      ) : (
                        <div
                          onClick={() =>
                            document.getElementById("my_modal_4")?.showModal?.()
                          }
                          className="flex-1 wrap-break-words"
                        >
                          {card.title}
                        </div>
                      )}

                      {/* Edit icon */}
                      {onClickEdit === "" && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation(); // prevent modal open
                            setOnClickEdit(card.id);
                          }}
                          className="w-7 h-7 flex justify-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 rounded-full hover:bg-[#0000003a] items-center"
                        >
                          <img src={Edit} alt="edit" className="size-5" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* drop indicator at end */}
              <div
                className={`h-2 rounded ${
                  over?.toListId === list.id &&
                  over?.toIndex === list.cards.length
                    ? "bg-amber-500"
                    : "bg-transparent"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
