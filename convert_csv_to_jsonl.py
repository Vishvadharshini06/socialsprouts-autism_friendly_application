import pandas as pd
import json

# Load the CSV file
def convert_csv_to_jsonl(csv_path, jsonl_path):
    df = pd.read_csv(csv_path)

    # Creating prompt and completion columns
    data = []
    for _, row in df.iterrows():
        prompt = f"{row['context']} {row['question']}"
        correct_answer = row[f"answer{chr(65 + row['label'] - 1)}"]  # Convert label to answer choice
        completion = correct_answer

        data.append({"prompt": prompt, "completion": completion})

    # Save as JSONL
    with open(jsonl_path, "w", encoding="utf-8") as f:
        for entry in data:
            f.write(json.dumps(entry) + "\n")

# Convert train and validation CSVs
convert_csv_to_jsonl("train.csv", "train.jsonl")
convert_csv_to_jsonl("validation.csv", "validation.jsonl")

print("Conversion completed successfully!")
