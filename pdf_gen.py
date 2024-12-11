from reportlab.pdfgen import canvas
import os

# Carpeta donde se guardarán los PDFs
output_dir = "/home/treming/Desktop/qr-generator-app/public/pdf"

# Asegúrate de que la carpeta exista
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Dimensiones de la página
PAGE_WIDTH = 595.27  # Ancho estándar de una página A4 en puntos
PAGE_HEIGHT = 841.89  # Altura estándar de una página A4 en puntos

# Generar 100 PDFs
for i in range(1, 1001):
    # Nombre del archivo PDF
    filename = os.path.join(output_dir, f"{i}.pdf")

    # Crear el PDF
    c = canvas.Canvas(filename, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))

    # Texto principal (más pequeño)
    text = "Tu número es:"
    text_font_size = 40
    c.setFont("Helvetica-Bold", text_font_size)
    text_width = c.stringWidth(text, "Helvetica-Bold", text_font_size)
    text_x = (PAGE_WIDTH - text_width) / 2
    text_y = PAGE_HEIGHT / 2 + 50  # Posición centrada con ajuste hacia arriba
    c.drawString(text_x, text_y, text)

    # Número (más grande)
    number_font_size = 100
    c.setFont("Helvetica-Bold", number_font_size)
    number_width = c.stringWidth(str(i), "Helvetica-Bold", number_font_size)
    number_x = (PAGE_WIDTH - number_width) / 2
    number_y = text_y - 120  # Posición debajo del texto principal
    c.drawString(number_x, number_y, str(i))

    # Guardar el PDF
    c.save()

print(f"¡Se generaron 100 PDFs en la carpeta '{output_dir}'!")
