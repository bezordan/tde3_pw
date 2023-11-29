package catalogo.produto;

import java.math.BigDecimal;

public record RecordMovie(
        String name,
        BigDecimal price,
        String synopsis,
        String url_poster
) {}